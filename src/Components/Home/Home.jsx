import React from "react";
import Slider from "../Home/Slider/Slider";
import Show from "../Shared/Show/Show";
import Categories from "./Categories/Categories";
import Newsletter from "./Newsletter/Newsletter";
import Popular from "./Popular/Popular";
import Recomandation from "./Recomandation/Recomandation.jsx";
import Single from "./Recomandation/Single/Single.jsx";
import Search from "./Search/Search";
import Trending from "./Trending/Trending";
import Video from "./Video/Video";

const Home = () => {
  return (
    <>
      <Slider />
      <Search />
      <Categories />
      <Popular />
      <Trending />
      {/* <Video /> */}
      <Recomandation />

      <Newsletter />
      <Show />
    </>
  );
};

export default Home;
