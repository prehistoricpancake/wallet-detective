import type { DataFunctionArgs } from "@remix-run/server-runtime";
import { PageNotFound } from "~/components/PageNotFound";
import { useLoaderData } from "remix";
import getAccountTokens from "~/data/getAccountTokens.server";
import {
  ResultCardToken,
  ResultCardAddress,
} from "../components/SearchResultCards";

type LoaderData = Awaited<ReturnType<typeof loader>>;

export let loader = async ({ request }: DataFunctionArgs) => {
  let url = new URL(request.url);
  let address = url.searchParams.get("term");

  if (!address) return null;

  const tokens = await getAccountTokens(address);

  if (!tokens) return null;

  return { address, tokens };
};

export default function Search() {
  const loaderData = useLoaderData<LoaderData>();

  const getAllERCTokens = () => {
    const length = loaderData?.tokens.length;
    for (let i = 0; i < length!; i++) {
      let count = 0;
      loaderData?.tokens.map((token) => {
        if (token.supportsErc) {
          count++;
        }
      });
      return count;
    }
  };

  console.log(getAllERCTokens());

  if (!loaderData) {
    return (
     <PageNotFound />
    );
  }

  return (
    <>
      <a href="https://wallet-detective.netlify.app">
         <h1 className="text-grey-darkest pt-4 pl-4">
        Wallets Detective &#128021;
      </h1>
         </a>

      <div className="centred-results">
        <h1 className="text-dark-gray font-medium pt-4 pl-4 mb-5">Overview</h1>

        {/* Wallet Address/query typed by user */}
        <ResultCardAddress address={loaderData.address} />

        {/* Tokens that don't support erc-20 */}
        <ul>
          {loaderData.tokens.map((token) =>
            !token.supportsErc ? (
              <li key={token.contractTickerSymbol}>
                <ResultCardToken
                  logoUrl={token.logoUrl}
                  contractSymbol={token.contractTickerSymbol}
                  balance={token.formattedBalance}
                  name={token.contractName}
                  tokenPage="https://shorturl.at/jxU14"
                />
              </li>
            ) : (
              ""
            )
          )}
        </ul>

        <h1 className="text-dark-gray text-sm font-medium text-left mt-8 mb-4">
          ERC-20 Tokens ({getAllERCTokens()})
        </h1>

        <ul>
          {loaderData.tokens.map((token) =>
            token.supportsErc ? (
              <li key={token.contractTickerSymbol}>
                <ResultCardToken
                  logoUrl={token.logoUrl}
                  contractSymbol={token.contractTickerSymbol}
                  balance={token.formattedBalance}
                  name={token.contractName}
                  tokenPage="https://shorturl.at/jxU14"
                />
              </li>
            ) : (
              ""
            )
          )}
        </ul>
      </div>
    </>
  );
}
