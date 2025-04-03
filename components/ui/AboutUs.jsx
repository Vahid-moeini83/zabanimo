import Link from "next/link";
import classes from "./AboutUs.module.css";

function AboutUs() {
  return (
    <ul className={classes.list}>
      <li>
        <Link href="#">داستان ما</Link>
      </li>
      <li>
        <Link href="#">اساتید</Link>
      </li>
      <li>
        <Link href="#">اسپانسرها</Link>
      </li>
      <li>
        <Link href="#">نمایندگی‌ها</Link>
      </li>
      <li>
        <Link href="#">پشتیبانی</Link>
      </li>
      <li>
        <Link href="#">همکاری با ما</Link>
      </li>
      <li>
        <Link href="#">جدیدترین خبرها</Link>
      </li>
    </ul>
  );
}

export default AboutUs;
