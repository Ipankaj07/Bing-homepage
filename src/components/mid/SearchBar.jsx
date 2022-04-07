import React from "react";
import "./searchBar.css";
import { BiMicrophone } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

function SearchBar() {
  return (
    <div className="top__search">
      <div>
        <div className="searchBar__container">
          <div className="searchBar__content">
            <input className="searchBar__input" type="text" />
            <div className="search__logo">
              <BiMicrophone />
              <img
                src="https://r.bing.com/rp/XvRHqJwJt19aXQca73hQTfvNMxk.svg"
                alt="search"
              />
              <AiOutlineSearch />
            </div>
          </div>
        </div>

        <div className="language__search">
          <div>Languages:</div>
          <div>हिंदी</div>
          <div>বাংলা</div>
          <div>اردو</div>
          <div>ਪੰਜਾਬੀ</div>
          <div>मराठी</div>
          <div>తెలుగు</div>
          <div>தமிழ்</div>
          <div>ಕನ್ನಡ</div>
          <div>ગુજરાતી</div>
          <div>മലയാളം</div>
          <div>ଓଡ଼ିଆ</div>
        </div>
      </div>
    </div>
  );
}

export { SearchBar };
