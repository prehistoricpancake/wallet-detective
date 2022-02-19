import { useTransition } from "remix";
import Button from "../components/Button";
import Container from "../components/ContentContainer";

export default function Index() {
  const transition = useTransition();

  const text =
    transition.state === "submitting"
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
        <Container>
          <label className="text-black text-sm font-normal">
            Wallet Address goes here
          </label>
          <form className="address" method="get" action="/search">
            <input
              className="bg-light-gray rounded mt-4 py-2 px-3 text-black leading-tight mb-7 focus:outline-none focus:shadow-outline md:w-full"
              type="text"
              name="term"
            />
            <Button text={text} />
          </form>
        </Container>
      </div>
    </div>
  );
}
