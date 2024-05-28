import Categories from "./components/Categories";
import DiscoverNFT from "./components/DiscoverNFT";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TopCreators from "./components/TopCreators";
import TrendingCollection from "./components/TrendingCollection";

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
    </>
  );
}

export default Home;
