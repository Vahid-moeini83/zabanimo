import Link from "next/link";
import classes from "./MobileNav.module.css";
import Image from "next/image";

function MobileNav() {
  return (
    <div className={classes.wrapper}>
      <ul>
        <li>
          <Link href="#">
            <Image
              src="/icons/building.svg"
              width={48}
              height={48}
              alt="شهرک"
            />
            شهرک زبانیمو
          </Link>
        </li>
        <li>
          <Link href="#">
            <Image src="/icons/chat.svg" width={48} height={48} alt="شهرک" />
            چت روم
          </Link>
        </li>
        <li>
          <Link href="#">
            <Image src="/icons/exam.svg" width={48} height={48} alt="شهرک" />
            آزمون
          </Link>
        </li>
        <li>
          <Link href="#">
            <Image src="/icons/joint.svg" width={48} height={48} alt="شهرک" />
            Joint
          </Link>
        </li>
        <li>
          <Link href="#">
            <Image src="/icons/game.svg" width={48} height={48} alt="شهرک" />
            بازی
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MobileNav;
