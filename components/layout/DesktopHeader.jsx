import Image from "next/image";
import classes from "./DesktopHeader.module.css";
import DesktopHeaderNav from "./DesktopHeaderNav";
import Button from "../ui/Button";
import Coin from "../ui/Coin";
import HeaderTools from "../ui/HeaderTools";

function DesktopHeader() {
  return (
    <div className={classes.header}>
      <div className={classes.nav}>
        <Image
          className={classes.logo}
          src="/logo.svg"
          width={120}
          height={36}
          alt="logo"
        />
        <DesktopHeaderNav />
      </div>
      <div className={classes.subscription}>
        <Button color="yellow">
          <Image
            src="/icons/wallet-add.svg"
            width={24}
            height={24}
            alt="wallet"
          />
          خرید اشتراک
        </Button>
        <Coin />
      </div>
      <HeaderTools />
    </div>
  );
}

export default DesktopHeader;
