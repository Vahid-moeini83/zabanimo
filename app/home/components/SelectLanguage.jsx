import LanguageBox from "@/components/ui/LanguageBox";
import classes from "./SelectLanguage.module.css";

function SelectLanguage() {
  return (
    <section className={classes.wrapper}>
      <span>انتخاب زبان سایت</span>
      <LanguageBox />
    </section>
  );
}

export default SelectLanguage;
