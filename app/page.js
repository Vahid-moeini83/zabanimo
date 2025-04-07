import Intro from "./home/components/Intro";
import Features from "./home/components/Features";
import DownloadBox from "./home/components/DownloadBox";
import TeachingModels from "./home/components/TeachingModels";
import Entertainments from "./home/components/Entertainments";
import Subscribe from "./home/components/Subscribe";
import Sponsors from "./home/components/Sponsors";
import Teachers from "./home/components/Teachers";
import SelectLanguage from "./home/components/SelectLanguage";

function Page() {
  return (
    <>
      <Intro />
      <Features />
      <DownloadBox />
      <TeachingModels />
      <Entertainments />
      <Subscribe />
      <Teachers />
      <SelectLanguage />
      <Sponsors />
    </>
  );
}

export default Page;
