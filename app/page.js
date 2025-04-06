import Intro from "./home/components/Intro";
import Features from "./home/components/Features";
import DownloadBox from "./home/components/DownloadBox";
import TeachingModels from "./home/components/TeachingModels";
import Entertainments from "./home/components/Entertainments";
import Subscribe from "./home/components/Subscribe";

function Page() {
  return (
    <>
      <Intro />
      <Features />
      <DownloadBox />
      <TeachingModels />
      <Entertainments />
      <Subscribe />
    </>
  );
}

export default Page;
