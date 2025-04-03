import Image from "next/image";
import classes from "./Symbols.module.css";

function Symbols() {
  return (
    <div className={classes.wrapper}>
      <Image src="/namad-1.png" width={54} height={93} alt="namad-1" />
      <div>
        <Image src="/namad-2.svg" width={75} height={52} alt="namad-2" />
        <h4>نماد‌اعتماد‌الکترونیکی</h4>
      </div>
      <div>
        <Image src="/namad-2.svg" width={75} height={52} alt="namad-2" />
        <h4>نماد‌اعتماد‌الکترونیکی</h4>
      </div>
    </div>
  );
}

export default Symbols;
