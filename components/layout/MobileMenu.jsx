"use client";

import classes from "./MobileMenu.module.css";
import AboutUs from "../ui/AboutUs";
import SocialMedia from "../ui/SocialMedia";
import Symbols from "../ui/Symbols";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { useMenu } from "@/hooks/useMenu";

function MobileMenu() {
  const { isOpen, handleOpen, handleClose } = useMenu();

  return (
    <div>
      <HiBars3
        onClick={handleOpen}
        className={classes.icon}
        size={28}
        color="white"
      />
      <div
        className={`${classes.menu} ${isOpen ? classes.open : classes.close}`}
      >
        <div className={classes.top}>
          <HiXMark
            onClick={handleClose}
            className={classes.icon}
            size={28}
            color="white"
          />
        </div>
        <div className={classes.main}>
          <div>
            <h2>درباره ما</h2>
            <AboutUs />
          </div>
          <div>
            <h2>تماس با ما</h2>
            <div className={classes.contact}>
              <h4>6789 345 0912</h4>
              <h4>emailaddress@gmail.com</h4>
            </div>
          </div>
        </div>
        <div className={classes.bottom}>
          <SocialMedia />
          <Symbols />
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
