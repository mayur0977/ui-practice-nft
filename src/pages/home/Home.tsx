import Categories from "./components/Categories";
import DiscoverNFT from "./components/DiscoverNFT";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import JoinTeam from "./components/JoinTeam";
import TopCreators from "./components/TopCreators";
import TrendingCollection from "./components/TrendingCollection";
import UpcomingNFT from "./components/UpcomingNFT";

function Home() {
  return (
    <>
      <Header />
      {/* <GridTest /> */}
      <Hero />
      <TrendingCollection />
      <TopCreators />
      <Categories />
      <DiscoverNFT />
      <UpcomingNFT />
      <HowItWorks />
      <JoinTeam />
    </>
  );
}

export default Home;
