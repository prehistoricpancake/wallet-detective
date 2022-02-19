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
        <h1 className="mb-8 text-xl font-bold">No results!</h1>
      </main>
    );
  }

  return (
    <main className="p-8">
      <h1 className="mb-8 text-xl font-bold">{loaderData.address} tokens</h1>

      <ul className="flex flex-col gap-2">
        {loaderData.tokens.map((token) => (
          <li key={token.contractTickerSymbol}>
            {token.contractName} - {token.formattedBalance} tokens
          </li>
        ))}
      </ul>
    </main>
  );
}