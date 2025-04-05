import classes from "./Button.module.css";

function Button({ color, children, roundedSize = "xs" }) {
  return (
    <div
      style={{ borderRadius: `var(--rounded-${roundedSize})` }}
      className={`${classes.button} ${
        color === "yellow" ? classes.yellowColor : classes.greenColor
      }`}
    >
      {children}
    </div>
  );
}

export default Button;
