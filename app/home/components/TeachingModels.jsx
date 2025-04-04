import Image from "next/image";
import classes from "./TeachingModels.module.css";
import { teachingModels } from "@/utils/localData";
import SoonText from "@/components/ui/SoonText";
import Link from "next/link";

function TeachingModels() {
  return (
    <section className={`container ${classes.wrapper}`}>
      <h2>سبک‌های آموزشی</h2>
      <div className={classes.grid}>
        {teachingModels.map((model) => {
          const textIsCentered = model.textPlace === "center";

          return (
            <div className={classes.box} key={model.name}>
              <div className={classes.card}>
                <div className={classes.banner}>
                  <div className={classes.front}>
                    <Link href="#">
                      {model.images.length ? (
                        <Image
                          src={`/teaching-models/${model.images[0]}`}
                          fill
                          alt={model.name}
                        />
                      ) : (
                        ""
                      )}
                    </Link>
                    {textIsCentered && (
                      <h4 className={classes.centeredText}>{model.name}</h4>
                    )}
                    {model.comingSoon && (
                      <div className={classes.soon}>
                        <SoonText isCentered={true} />
                      </div>
                    )}
                  </div>
                  <div className={classes.back}>
                    <Link href="#">
                      {model.images.length ? (
                        <Image
                          src={`/teaching-models/${model.images[1]}`}
                          fill
                          alt={model.name}
                        />
                      ) : (
                        ""
                      )}
                    </Link>
                    <div className={classes.watch}>
                      <Image
                        src="/icons/play-light.svg"
                        width={68}
                        height={68}
                        alt="play"
                      />
                      <span>تماشای راهنما</span>
                    </div>
                    {model.comingSoon && (
                      <div className={classes.soon}>
                        <SoonText isCentered={true} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {!textIsCentered && (
                <h4 className={classes.bottomText}>{model.name}</h4>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default TeachingModels;
