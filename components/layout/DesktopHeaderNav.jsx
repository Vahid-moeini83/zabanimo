"use client";

import Link from "next/link";
import classes from "./DesktopHeaderNav.module.css";
import { GoChevronDown } from "react-icons/go";
import { usePathname } from "next/navigation";
import AboutUs from "../ui/AboutUs";

function DesktopHeaderNav() {
  const path = usePathname();

  return (
    <ul className={classes.menu}>
      <li className={`${classes.item} ${path === "/" ? classes.active : ""}`}>
        <Link href="/">خانه</Link>
      </li>
      <li className={classes.item}>
        <Link href="#">
          درباره ما <GoChevronDown className={classes.chevron} size={16} />
        </Link>
        <div className={classes.dropdown}>
          <AboutUs />
        </div>
      </li>
      <li className={classes.item}>
        <Link href="#">شهرک زبانیمو</Link>
      </li>
      <li className={classes.item}>
        <Link href="#">چت روم</Link>
      </li>
      <li className={classes.item}>
        <Link href="#">
          آزمون <GoChevronDown className={classes.chevron} size={16} />
        </Link>
        <div className={classes.dropdown}>
          <ul className={classes.exam}>
            <li>
              <Link href="#">آزمون آنلاین</Link>
            </li>
            <li>
              <Link href="#">آزمون حضوری</Link>
            </li>
            <li>
              <Link href="#">دریافت Certification</Link>
            </li>
          </ul>
        </div>
      </li>
      <li className={classes.item}>
        <Link href="#">بازی</Link>
      </li>
      <li className={classes.item}>
        <Link href="#">JOINT</Link>
        <span className={classes.soon}>به زودی</span>
      </li>
    </ul>
  );
}

export default DesktopHeaderNav;
