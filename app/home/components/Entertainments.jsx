import classes from "./Entertainments.module.css";
import EntertainmentBox from "@/components/ui/EntertainmentBox";

function Entertainments() {
  return (
    <section className={`container ${classes.wrapper}`}>
      <EntertainmentBox title="زنگ تفریح" imageSrc="/clock.svg">
        وقتشه که یکم استراحت کنی و خوش بگذرونی. کلی ویدیوی کمدی و جذاب براتون
        دارم که خستگی‌هارو بشوره و ببره! دنبالم بیا.
      </EntertainmentBox>
      <EntertainmentBox title="کوله پشتی" imageSrc="/backpack.svg">
        تور گردشگری با استاد زبانت!
        <br /> دوره آنلاین ثبت‌نام کن و در پایان دوره به همراه استادت به یه تور
        گردشگری برو.
      </EntertainmentBox>
    </section>
  );
}

export default Entertainments;
