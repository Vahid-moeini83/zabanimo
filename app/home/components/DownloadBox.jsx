import Image from "next/image";
import classes from "./DownloadBox.module.css";

function DownloadBox() {
  return (
    <section className="container">
      <div className={classes.box}>
        <Image src="/small-logo.svg" width={40} height={40} alt="logo" />
        <h2>دانلود اپلیکیشن زبانیمو</h2>
      </div>
    </section>
  );
}

export default DownloadBox;
