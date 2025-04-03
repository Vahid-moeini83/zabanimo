import Link from "next/link";
import classes from "./HeaderTools.module.css";
import Image from "next/image";

function HeaderTools() {
  return (
    <div className={classes.tools}>
      <Link href="#">
        <Image src="/icons/search.svg" width={32} height={32} alt="search" />
      </Link>
      <Link href="#">
        <Image
          src="/icons/notification.svg"
          width={32}
          height={32}
          alt="notification"
          style={{ marginBottom: "4px" }}
        />
      </Link>
      <Link href="#">
        <Image src="/icons/note.svg" width={32} height={32} alt="note" />
      </Link>
      <Link href="#">
        <Image
          className={classes.profile}
          src="/profile.png"
          width={36}
          height={36}
          alt="profile"
        />
      </Link>
    </div>
  );
}

export default HeaderTools;
