import Image from "next/image";
import classes from "./Coin.module.css";

function Coin({ reverse = false }) {
  return (
    <div
      style={
        reverse ? { flexDirection: "row-reverse" } : { flexDirection: "row" }
      }
      className={classes.wrapper}
    >
      <Image src="/icons/coin.svg" width={30} height={30} alt="coin" />
      <div>
        <span>1200</span>
        <span>کوین</span>
      </div>
    </div>
  );
}

export default Coin;
