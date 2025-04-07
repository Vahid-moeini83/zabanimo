import Button from "@/components/ui/Button";
import classes from "./Subscribe.module.css";
import Image from "next/image";

function Subscribe() {
  return (
    <section className={`container ${classes.wrapper}`}>
      <div className={classes.count}>
        <span>123,126</span>
        مشترکین فعال
      </div>
      <div className={classes.descriptions}>
        <p className={classes.text}>
          با خرید اشتراک از زبانیمو می‌توانید به تمام محتوای آموزشی ما دسترسی
          پیدا کنید. آموزش‌های زبانیمو در سبک‌های مختلف و برای تمام اعضای
          خانواده با هر سن، نیاز و موقعیتی قابل استفاده هستند.
        </p>
        <div className={classes.bottom}>
          <p>با زبانیمو بی‌وقفه زبان بیاموزیم...</p>
          <Button color="yellow">
            <Image
              src="icons/wallet-add.svg"
              width={24}
              height={24}
              alt="wallet"
            />
            خرید اشتراک
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
