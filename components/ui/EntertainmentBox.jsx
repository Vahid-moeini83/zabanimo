"use client";

import classes from "./EntertainmentBox.module.css";
import Image from "next/image";
import Button from "./Button";
import { useMediaQuery } from "@mui/material";

function EntertainmentBox({ title, imageSrc, children }) {
  const isInMobileSize = useMediaQuery("(max-width: 768px)");

  if (isInMobileSize && title !== "زنگ تفریح") return;

  return (
    <div className={classes.box}>
      <Image
        src={imageSrc}
        width={isInMobileSize ? 166 : 210}
        height={isInMobileSize ? 165 : 220}
        alt={title}
      />
      <div className={classes.details}>
        <div className={classes.heading}>
          <h3>{title}</h3>
          {!isInMobileSize && (
            <div className={classes.button}>
              <Button color="green" roundedSize="sm">
                بزن بریم
              </Button>
            </div>
          )}
        </div>
        <p>{children}</p>
        {isInMobileSize && (
          <div className={classes.button}>
            <Button color="yellow">بزن بریم</Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default EntertainmentBox;
