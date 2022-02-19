import type { DataFunctionArgs } from "@remix-run/server-runtime";
import { useLoaderData } from "remix";
import getAccountTokens from "~/data/getAccountTokens.server";

type LoaderData = Awaited<ReturnType<typeof loader>>;

export let loader = async ({ request }: DataFunctionArgs) => {

  let url = new URL(request.url);
  let address = url.searchParams.get("term");

  if (!address) return null;

  const tokens = await getAccountTokens(address);

  if (!tokens) return null;

  return { address, tokens };
};



export default function Index() {
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
      <h1 className="text-grey-darkest pt-4 pl-4">
        Wallets Detective &#128021;
      </h1>

      <div className="container mx-auto px-96 pt-25">
        <p className="text-dark-gray text-sm font-semibold text-left mb-4">
          {" "}
          Overview
        </p>

        <div className="bg-white border-dark-gray rounded shadow-lg p-8 mt-2 max-w-full">
          <p className="text-gray-400 text-sm mb-2 font-medium"> Address</p>
          <p>{loaderData.address}</p>
        </div>

        <ul>
          {loaderData.tokens.map((token) =>
            !token.supportsErc ? (
              <>
                <li key={token.contractTickerSymbol}>
                  <div className="bg-white border-dark-gray rounded shadow-lg p-8 mt-2 max-w-full">
                    <div className="grid grid-cols-3 pl-0 flex-none">
                      <img
                        src={token.logoUrl}
                        className="flex1 w-14 h-14 p-1 border-white rounded-full"
                        alt="token logo"
                      />
                      <div className="flex-1">
                        <p>
                          <span className="text-black text-sm mb-2 font-medium">
                            {token.contractName}
                          </span>
                          <span className="text-dark-gray">
                            ({token.contractTickerSymbol})
                          </span>
                        </p>

                        <p className="pr-1.5 text-dark-gray">
                          Balance: {token.formattedBalance}{" "}
                        </p>
                      </div>
                      <div className="pl-28 flex-1">
                      {/* uma surpresa especial */}
                     <a href="https://shorturl.at/jxU14"><p className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-light-gray duration-300 p-2">Token page ↗︎</p></a>

                      </div>
                    </div>
                  </div>
                </li>
                <p className="text-dark-gray text-sm font-medium text-left mt-8 mb-4">

                ERC-20 TOKENS</p>
              </>
            ) : (
              <li key={token.contractTickerSymbol}>
                <div className="bg-white border-dark-gray rounded shadow-lg p-8 mt-2 max-w-full">
                  <div className="grid grid-cols-3 pl-0 flex-none">
                    <img
                      src={token.logoUrl}
                      className="flex1 w-14 h-14 p-1 border-white rounded-full"
                      alt="token logo"
                    />
                    <div className="flex-1">
                      <p>
                        <span className="text-black text-sm mb-2 font-medium">
                          {token.contractName}
                        </span>
                        <span className="text-dark-gray">
                          ({token.contractTickerSymbol})
                        </span>
                      </p>

                      <p className="pr-1.5 text-dark-gray">
                        Balance: {token.formattedBalance}{" "}
                      </p>
                    </div>
                    <div className="pl-28 flex-1">
                    {/* uma surpresa especial */}
                    <a href="https://shorturl.at/jxU14"><p className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-light-gray duration-300 p-2">Token page ↗︎</p></a>

                    </div>
                  </div>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </>
  );
}