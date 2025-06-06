import SocialMedia from "../ui/SocialMedia";
import Symbols from "../ui/Symbols";
import classes from "./Footer.module.css";
import FooterSlider from "./FooterSlider";

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={`container ${classes.main}`}>
        <div className={classes.details}>
          <span>تماس با ما:</span>
          <div className={classes.connection}>
            <div className={classes.contact}>
              <span>09123456789</span>
              <span>emailaddress@gmail.com</span>
            </div>
            <div className={classes.time}>
              <span>شنبه تا چهارشنبه</span>
              <span> 9 صبح الی 10 شب</span>
            </div>
          </div>
        </div>
        <SocialMedia />
        <Symbols />
      </div>
      <FooterSlider />
    </div>
  );
}

export default Footer;
