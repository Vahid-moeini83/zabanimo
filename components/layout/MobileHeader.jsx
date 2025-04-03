import Image from "next/image";
import classes from "./MobileHeader.module.css";
import Button from "../ui/Button";
import Link from "next/link";

import { HiBars3 } from "react-icons/hi2";
import HeaderTools from "../ui/HeaderTools";
import Coin from "../ui/Coin";
import MobileMenu from "./MobileMenu";

function MobileHeader() {
  return (
    <div className={classes.header}>
      <div className={classes.top}>
        <Link href="/">
          <Image
            className={classes.logo}
            src="/logo.svg"
            width={120}
            height={40}
            alt="logo"
          />
        </Link>
        <Button color="yellow">
          <Image
            src="/icons/wallet-add.svg"
            width={20}
            height={20}
            alt="wallet"
          />
          خرید اشتراک
        </Button>
      </div>
      <div className="container">
        <div className={classes.bottom}>
          <MobileMenu />
          <div>
            <Coin reverse={true} />
            <HeaderTools />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileHeader;
