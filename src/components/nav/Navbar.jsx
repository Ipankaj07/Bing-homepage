import React, { useState } from "react";
import "./navbar.css";
import { AiOutlineUser } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

import Hmodal from "../hmodal/Hmodal";

function Navbar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      onClick={() => {
        if (showModal) {
          setShowModal(false);
        }
      }}
    >
      <div className="nav__container">
        <div className="content__1">
          <div className="logo">
            <img
              src="https://www.bing.com/set/assets/images/MicrosoftBingLogo.png"
              alt="logo"
            />
          </div>
          <div>Images</div>
          <div>Videos</div>
          <div>Translate</div>
          <div style={{ letterSpacing: "0.3rem" }}>...</div>
        </div>

        <div className="content__2">
          <div>
            <span>Sign in </span>
            <span
              style={{
                backgroundColor: "#ececec",
                color: "#000",
                borderRadius: "50%",
                padding: "0.4rem",
                fontSize: "1.2rem",
                marginLeft: "0.3rem",
              }}
            >
              <AiOutlineUser />
            </span>
          </div>

          <div
            style={{
              fontSize: "1.9rem",
              paddingTop: "0.4rem",
            }}
            onClick={() => setShowModal(!showModal)}
          >
            <GiHamburgerMenu />
          </div>
        </div>
      </div>
      <div
        style={{
          display: showModal ? "block" : "none",
        }}
      >
        <Hmodal />
      </div>
    </div>
  );
}

export { Navbar };
