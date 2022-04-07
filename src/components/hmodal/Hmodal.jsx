import React from "react";
import "./Hmodal.css";
import { RiSettings5Fill } from "react-icons/ri";
import { ImLock } from "react-icons/im";
import { BsClockFill } from "react-icons/bs";
import { RiUserStarLine } from "react-icons/ri";
import { MdPrivacyTip, MdFeedback } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";

function Hmodal() {
  return (
    <div>
      <div id="Hmodal">
        <div className="modal-div">
          <div>
            {" "}
            <RiSettings5Fill />{" "}
          </div>
          <div>Setting</div>
        </div>

        <div className="modal-div">
          <div>
            {" "}
            <ImLock />{" "}
          </div>
          <div>SafeSearch</div>
        </div>

        <div className="modal-div">
          <div>
            {" "}
            <BsClockFill />{" "}
          </div>
          <div>Search history</div>
        </div>

        <div className="modal-div">
          <div>
            {" "}
            <RiUserStarLine />{" "}
          </div>
          <div>My Bing</div>
        </div>

        <div className="modal-div">
          <div>
            {" "}
            <MdPrivacyTip />{" "}
          </div>
          <div>Privacy</div>
        </div>

        <div className="modal-div">
          <div>
            {" "}
            <MdFeedback />{" "}
          </div>
          <div>Feedback</div>
        </div>

        <div className="modal-div">
          <div>
            {" "}
            <AiFillHome />{" "}
          </div>
          <div>Customise your homepage</div>
        </div>

        {/* -------------- */}
        <div className="hmodel-f">
          <div className="hb_section_nohover">
            <ul className="menuFooter items">
              <li className="item">
                Privacy and Cookies
                <label className="separator">•</label>
              </li>
              <li className="item">
                Legal
                <label className="separator">•</label>
              </li>
              <li className="item">
                Advertise
                <label className="separator">•</label>
              </li>
              <li className="item">
                About our ads
                <label className="separator">•</label>
              </li>
              <li className="item">Help</li>
            </ul>
            <span>© 2022 Microsoft</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hmodal;
