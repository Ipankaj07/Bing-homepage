import React from "react";
import "./homepage.css";
import { Navbar } from "../components/nav/Navbar";
import { SearchBar } from "../components/mid/SearchBar";
import { FooterCarousel } from "../components/footer/FooterCarousel";

const Homepage = () => {
  return (
    <div className="homepage__container">
      <div className="homepage__content">
        <Navbar />
        <SearchBar />
        <FooterCarousel />
      </div>
    </div>
  );
};

export default Homepage;
