import { teachingModels } from "@/utils/localData";
import classes from "./TeachingModels.module.css";
import Image from "next/image";
import Button from "@/components/ui/Button";
import SoonText from "@/components/ui/SoonText";

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
                    {model.images.length ? (
                      <div className={classes.image}>
                        <Image
                          src={`/teaching-models/${model.images[0]}`}
                          fill
                          alt={model.name}
                        />
                      </div>
                    ) : (
                      ""
                    )}
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
                    {model.images.length ? (
                      <div className={classes.image}>
                        <Image
                          src={`/teaching-models/${
                            model.images.length > 1
                              ? model.images[1]
                              : model.images[0]
                          }`}
                          fill
                          alt={model.name}
                        />
                      </div>
                    ) : (
                      ""
                    )}

                    {model.comingSoon ? (
                      <div className={classes.soon}>
                        <SoonText isCentered={true} />
                      </div>
                    ) : (
                      <div className={classes.watch}>
                        <Button color="yellow" roundedSize="sm">
                          <Image
                            src="/icons/logout.svg"
                            width={24}
                            height={24}
                            alt="view"
                          />
                          مشاهده دوره‌ها
                        </Button>
                        <Image
                          src="/icons/play-light.svg"
                          width={68}
                          height={68}
                          alt="play"
                        />
                        <span>تماشای راهنما</span>
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
