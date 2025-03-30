import Link from "next/link";
import classes from "./HeaderNav.module.css";

function HeaderNav() {
  return (
    <ul className={classes.menu}>
      <li>
        <Link href="/">خانه</Link>
      </li>
      <li>
        <Link href="#">درباره ما</Link>
      </li>
      <li>
        <Link href="#">شهرک زبانیمو</Link>
      </li>
      <li>
        <Link href="#">چت روم</Link>
      </li>
      <li>
        <Link href="#">آزمون</Link>
      </li>
      <li>
        <Link href="#">بازی</Link>
      </li>
      <li>
        <Link href="#">Joint</Link>
      </li>
    </ul>
  );
}

export default HeaderNav;
