import FeaturesList from "@/components/ui/FeaturesList";
import classes from "./Features.module.css";

function Features() {
  return (
    <section className={classes.wrapper}>
      <FeaturesList />
    </section>
  );
}

export default Features;
