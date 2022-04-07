import React from "react";
import "./footerCarousel.css";
import {
  MdOutlineLocationOn,
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";

import { v4 as uuidv4 } from "uuid";

import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

function FooterCarousel() {
  let newsData = [
    {
      title: "The Times of India",
      image:
        "https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAVUVpT.img&ehk=TmMNBT9%2bqKz1tYpmgTy5arXqLNGsmCf4KRbSlUqX7xE%3d&w=150&h=150&c=8&rs=2&o=6&pid=WP0",
      description:
        "2 Gaganyaan abort tests in August, December; relay satellites next year",
    },
    {
      title: "DNA",
      image:
        "https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAVV6f1.img&ehk=%2fCAe0eMrcD2kkSapTD2yvaJ7qDYpzefgNcGUcM%2bBTTo%3d&w=150&h=150&c=8&rs=2&o=6&pid=WP0",
      description:
        "Assistant sub-inspector offers free IAS-IPS training to stude…",
    },
    {
      title: "The Times of India",
      image:
        "https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAVUVpT.img&ehk=TmMNBT9%2bqKz1tYpmgTy5arXqLNGsmCf4KRbSlUqX7xE%3d&w=150&h=150&c=8&rs=2&o=6&pid=WP0",
      description:
        "2 Gaganyaan abort tests in August, December; relay satellites next year",
    },
    {
      title: "DNA",
      image:
        "https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAVV6f1.img&ehk=%2fCAe0eMrcD2kkSapTD2yvaJ7qDYpzefgNcGUcM%2bBTTo%3d&w=150&h=150&c=8&rs=2&o=6&pid=WP0",
      description:
        "Assistant sub-inspector offers free IAS-IPS training to stude…",
    },
    {
      title: "The Times of India",
      image:
        "https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAVUVpT.img&ehk=TmMNBT9%2bqKz1tYpmgTy5arXqLNGsmCf4KRbSlUqX7xE%3d&w=150&h=150&c=8&rs=2&o=6&pid=WP0",
      description:
        "2 Gaganyaan abort tests in August, December; relay satellites next year",
    },
    {
      title: "DNA",
      image:
        "https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAVV6f1.img&ehk=%2fCAe0eMrcD2kkSapTD2yvaJ7qDYpzefgNcGUcM%2bBTTo%3d&w=150&h=150&c=8&rs=2&o=6&pid=WP0",
      description:
        "Assistant sub-inspector offers free IAS-IPS training to stude…",
    },
    {
      title: "The Times of India",
      image:
        "https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAVUVpT.img&ehk=TmMNBT9%2bqKz1tYpmgTy5arXqLNGsmCf4KRbSlUqX7xE%3d&w=150&h=150&c=8&rs=2&o=6&pid=WP0",
      description:
        "2 Gaganyaan abort tests in August, December; relay satellites next year",
    },
    {
      title: "DNA",
      image:
        "https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAVV6f1.img&ehk=%2fCAe0eMrcD2kkSapTD2yvaJ7qDYpzefgNcGUcM%2bBTTo%3d&w=150&h=150&c=8&rs=2&o=6&pid=WP0",
      description:
        "Assistant sub-inspector offers free IAS-IPS training to stude…",
    },
    {
      title: "The Times of India",
      image:
        "https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAVUVpT.img&ehk=TmMNBT9%2bqKz1tYpmgTy5arXqLNGsmCf4KRbSlUqX7xE%3d&w=150&h=150&c=8&rs=2&o=6&pid=WP0",
      description:
        "2 Gaganyaan abort tests in August, December; relay satellites next year",
    },
    {
      title: "DNA",
      image:
        "https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAVV6f1.img&ehk=%2fCAe0eMrcD2kkSapTD2yvaJ7qDYpzefgNcGUcM%2bBTTo%3d&w=150&h=150&c=8&rs=2&o=6&pid=WP0",
      description:
        "Assistant sub-inspector offers free IAS-IPS training to stude…",
    },
  ];

  return (
    <>
      <div className="footer-carousel">
        <div className="div-2">
          <div className="div-1">
            <MdKeyboardArrowDown className="arrow__style" />
          </div>

          <div className="div__flex">
            <div className="div-3">
              <MdOutlineLocationOn />A road for adventure junkies
            </div>
            <div className="div-1">
              {" "}
              <MdKeyboardArrowLeft className="arrow__style" />{" "}
            </div>
            <div className="div-1">
              {" "}
              <MdKeyboardArrowRight className="arrow__style" />{" "}
            </div>
          </div>
        </div>

        {/* -----------  Carousel---------------- */}

        <Swiper
          modules={[Navigation]}
          spaceBetween={12}
          navigation
          className="footerCarousel__container"
          /* make slidesPreview as per condition with window width */
          slidesPerView={4}
        >
          {newsData.map(({ title, image, description }) => {
            return (
              <SwiperSlide key={uuidv4()} className="fd-1">
                <div className="fd-title">{title}</div>
                <div className="fd-2">
                  <img src={image} alt=".." />
                  {description}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}

export { FooterCarousel };

/* <div className="fd-1">
            <div className="fd-title">The Times of India</div>
            <div className="fd-2">
              <img
                src="https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAVUVpT.img&ehk=TmMNBT9%2bqKz1tYpmgTy5arXqLNGsmCf4KRbSlUqX7xE%3d&w=150&h=150&c=8&rs=2&o=6&pid=WP0"
                alt=".."
              />
              2 Gaganyaan abort tests in August, December; relay satellites next
              year
            </div>
          </div> */
