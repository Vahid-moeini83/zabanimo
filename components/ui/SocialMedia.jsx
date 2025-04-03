"use client";

import classes from "./SocialMedia.module.css";
import Link from "next/link";
import Image from "next/image";

const socialMediaIcons = [
  "telegram",
  "whatsapp",
  "instagram",
  "youtube",
  "linkedin",
];

function SocialMedia() {
  return (
    <div className={classes.wrapper}>
      {socialMediaIcons.map((icon) => (
        <Link href="#" key={icon}>
          <Image src={`/icons/${icon}.svg`} width={32} height={32} alt={icon} />
        </Link>
      ))}
    </div>
  );
}

export default SocialMedia;
