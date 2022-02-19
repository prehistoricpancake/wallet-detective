import { useTransition } from "remix";

export default function Index() {
  const transition = useTransition();
  
  const text = transition.state === "submitting"
  
      ? "Finding..."
      : transition.state === "loading"
      ? "Finding..."
      : "Find It";

 

  return (
    <div className="container mx-auto px-4 pt-24">
      <h1 className="mb-10 text-center text-lg text-black font-medium">
        Wallets Detective &#128021;
      </h1>

      <div className="justify-center items-center flex">
        <span className="block">
          <div className="bg-white rounded shadow-lg p-8">
            <label className="text-black text-sm mb-4 font-normal">
              Wallet Address goes here
            </label>
            <form className="address" method="get" action="/search">
              <input
                className="bg-light-gray appearance-none rounded py-2 px-3 text-black leading-tight mb-7 focus:outline-none focus:shadow-outline md:w-full"
                type="text"
                name="term"
              />
              <button
                type="submit"
                className="bg-black h-12 text-white rounded-lg md:w-full search"
              >
                {text}
              </button>
            </form>
          </div>
        </span>
      </div>
    </div>
  );
}