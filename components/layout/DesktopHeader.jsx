import Image from "next/image";
import classes from "./DesktopHeader.module.css";
import HeaderNav from "../ui/HeaderNav";

function DesktopHeader() {
  return (
    <div className={classes.header}>
      <div>
        <Image src="/logo.svg" width={120} height={36} alt="logo" />
        <HeaderNav />
      </div>
    </div>
  );
}

export default DesktopHeader;
