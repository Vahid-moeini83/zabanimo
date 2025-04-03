import classes from "./Button.module.css";

function Button({ color, children }) {
  return (
    <div
      className={`${classes.button} ${
        color === "yellow" ? classes.yellowColor : classes.greenColor
      }`}
    >
      {children}
    </div>
  );
}

export default Button;
