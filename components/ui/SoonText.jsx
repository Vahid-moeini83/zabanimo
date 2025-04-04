import classes from "./SoonText.module.css";

function SoonText({ isCentered }) {
  return (
    <span className={`${classes.soon} ${isCentered ? classes.centered : ""}`}>
      به زودی
    </span>
  );
}

export default SoonText;
