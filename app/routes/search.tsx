import type { DataFunctionArgs } from "@remix-run/server-runtime";
import { useLoaderData } from "remix";
import getAccountTokens from "~/data/getAccountTokens.server";
import { ResultCardToken, ResultCardAddress} from "../components/SearchResultCards"

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

  if (!loaderData) {
    return (
      <main>
        <div className="card">
          <h1 className="mb-8 text-xl font-bold">
            404: No tokens found but you have found Ulalume:
          </h1>
          <h1 className="mb-8 text-xl font-bold">
            And I said: "What is written, sweet sister, On the door of this
            legended tomb?" She replied: "Ulalume -Ulalume— 'Tis the vault of
            thy lost Ulalume!"{" "}
          </h1>
        </div>
      </main>
    );
  }

  return (
    <>
     <h1 className="text-grey-darkest pt-4 pl-4">Wallets Detective &#128021;</h1>

     <div className="centred-results">

     <h1 className="text-dark-gray font-medium pt-4 pl-4 mb-5">
          Overview
      </h1>

      {/* Wallet Address/query typed by user */}
      <ResultCardAddress address={loaderData.address} />

     {/* Tokens that don't support erc-20 */}
      <ul>
          {loaderData.tokens.map((token) => (
            !token.supportsErc ? (
                <li key={token.contractTickerSymbol}>
                  <ResultCardToken 
                  logoUrl={token.logoUrl} 
                  contractSymbol={token.contractTickerSymbol}
                  balance={token.formattedBalance}
                  name={token.contractName}
                  specialSurprise="https://shorturl.at/jxU14"
                  />
                </li>
                ) : ''
          )

         )}
            
          </ul>

              <h1 className="text-dark-gray text-sm font-medium text-left mt-8 mb-4">ERC-20 Tokens</h1>

          <ul>
          {loaderData.tokens.map((token) => (
            token.supportsErc ? (
                <li key={token.contractTickerSymbol}>
                  <ResultCardToken 
                  logoUrl={token.logoUrl} 
                  contractSymbol={token.contractTickerSymbol}
                  balance={token.formattedBalance}
                  name={token.contractName}
                  specialSurprise="https://shorturl.at/jxU14"
                  />
                </li>
                ) : ''
          )


          )}
            
          </ul>
</div>

               
</>
       
            
  );
}
<<<<<<< HEAD

=======
>>>>>>> 09ce8c8a80e44e4ac3cecb4fdc4ba688b9c8a2b5
