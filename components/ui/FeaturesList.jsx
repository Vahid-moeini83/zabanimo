"use client";

import classes from "./FeaturesList.module.css";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";

const features = [
  { name: "شهرک زبانیمو", image: "building" },
  { name: "چت روم", image: "chat" },
  { name: "آزمون", image: "exam" },
  { name: "Joint", image: "joint" },
  { name: "بازی", image: "game" },
];

function FeaturesList() {
  // Handle images by size
  const isInDesktopSize = useMediaQuery("(min-width: 1025px)");

  return (
    <div className={classes.wrapper}>
      <ul className={classes.list}>
        {features.map((feature) => (
          <li key={feature.name}>
            <Link href="#">
              <Image
                src={`/icons/${
                  isInDesktopSize
                    ? `${feature.image}-gold.svg`
                    : `${feature.image}.svg`
                }`}
                width={isInDesktopSize ? 84 : 48}
                height={isInDesktopSize ? 84 : 48}
                alt={feature.name}
              />
              {feature.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FeaturesList;
