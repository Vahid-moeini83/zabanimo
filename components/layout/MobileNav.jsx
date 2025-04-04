import FeaturesList from "../ui/FeaturesList";
import classes from "./MobileNav.module.css";

function MobileNav() {
  return (
    <div className={classes.wrapper}>
      <FeaturesList />
    </div>
  );
}

export default MobileNav;
