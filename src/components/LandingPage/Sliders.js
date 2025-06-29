"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GLOBALS from "@/server/Globals";
import Loader from "../Loader";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function Sliders() {
  const [loading, setLoading] = useState(false);
  const [sliders, setSliders] = useState([]);

  useEffect(() => {
    setLoading(true);
    async function getData() {
      let apiUrl = "sliders";
      const url = GLOBALS.API_BASE_URL + apiUrl;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        setSliders(json.data);
        setLoading(false);
      } catch (error) {
        console.error(error.message);
      }
    }
    getData();
    return () => {
      // Cleanup logic here
    };
  }, []);

  var settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Loader />
      {typeof Slider === "function" && (
        <Slider {...settings}>
          {sliders.map((item, i) => {
            return (
              <div key={i}>
                <img
                  data-src={item.image}
                  className="img-fluid d-show ls-is-cached lazyloaded"
                  id="s3"
                  src={item.image}
                />
                <div
                  id="caption-list"
                  className="bg-button slick-caption s2 d-show"
                >
                  <p
                    id="caption_list"
                    className="caption text-truncate p-1 mb-0"
                  >{`"${item.title}"`}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      )}
    </>
  );
}
