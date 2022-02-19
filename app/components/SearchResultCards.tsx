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
  specialSurprise: string;
};

export const ResultCardAddress = (props: AddressCardProps) => {
  return (
    <Container>
      <div className="grid grid-cols-1 flex-none">
        <p> Address</p>
        <div className="flex-1">
          <p>{props.address}</p>
        </div>
      </div>
    </Container>
  );
};

export const ResultCardToken = (props: TokenCardProps) => {
  return (
    <Container>
      <div className="grid grid-cols-3 gap-0 pl-0 flex-none">
        <div>
          <img
            src={props.logoUrl}
            className="flex1 w-14 h-14 p-1 border-white rounded-full"
            alt="token logo"
          />
        </div>

        <div className="contractNameStyling">
          <p>
            <span className="text-black text-sm mb-2 font-medium">
              {props.name}
            </span>
            <span className="text-dark-gray">({props.contractSymbol})</span>
          </p>
          <p className="text-dark-gray">Balance: {props.balance} </p>
        </div>
        <button className="pl-28">
          {/* uma surpresa especial */}
          <a href={props.specialSurprise}>
            <p className="text-dark-gray transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-light-gray duration-300 p-2 button">
              Token page ↗︎
            </p>
          </a>
        </button>
      </div>
    </Container>
  );
};
