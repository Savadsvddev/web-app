import React from "react";
import AlertBarComponent from "./components/AlertBarComponent";
import Header from "./components/Header";
import Division from "./components/Division";
import Categories from "./components/Categories";
import Ads from "./components/Ads";
import WeeklyDeals from "./components/WeeklyDeals";
import TrendingSearch from "./components/TrendingSearch";
import curousal from "../src/assets/images/curousel.png";
import BestSeller from "./components/BestSeller";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <>
      {/* Alert Bar Compnent */}
      <AlertBarComponent />

      {/* Header */}
      <Header />

      {/* divisions */}
      <Division />

      {/* categories */}
      <Categories />

      {/* image Ads */}
      <Ads />

      {/* weekly Deals */}
      <WeeklyDeals />

      {/* Trending search */}
      <TrendingSearch />

      <img className="w-full p-5" src={curousal} />

      {/* Best seller */}
      <BestSeller />

      {/* footer */}
      <Footer />
    </>
  );
};
export default Home;
