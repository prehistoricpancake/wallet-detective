import Container from "./ContentContainer";
import { BigNumber } from "bignumber.js";

type AddressCardProps = {
  address: string;
};

type TokenCardProps = {
  logoUrl: string;
  balance: BigNumber;
  name: string;
  contractSymbol: string;
  tokenPage: string;
};

export const ResultCardAddress = (props: AddressCardProps) => {
  return (
    <Container>
      <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 flex-none">
        <p> Address</p>
        <div className="flex-1">
          <p className="text-dark-gray">{props.address}</p>
        </div>
      </div>
    </Container>
  );
};

export const ResultCardToken = (props: TokenCardProps) => {
  return (
    <Container>
      <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1">
        <div>
          <img
            src={props.logoUrl}
            className="flex1 w-14 h-14 p-1 border-white rounded-full"
            alt="token logo"
          />
        </div>

        <div className="xl:ml-15 lg:ml-15 md:ml-15 sm-ml-0">
          <p>
            <span className="text-black text-sm mb-2 font-medium">
              {props.name}
            </span>
            <span className="text-dark-gray">({props.contractSymbol})</span>
          </p>
          <p className="text-dark-gray">Balance: {props.balance} </p>
        </div>
        <button className="xl:pl-28 lg:pl-28 md:pl-28 sm:pl-0">
          {/* a vida é boa */}
          <a href={props.tokenPage}>
            <p className="text-dark-gray transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-light-gray duration-300 p-2 button">
              Token page ↗︎
            </p>
          </a>
        </button>
      </div>
    </Container>
  );
};
