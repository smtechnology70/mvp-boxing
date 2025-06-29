"use client";

import React, { useState, useEffect } from "react";

import GLOBALS from "@/server/Globals";

import HoverPrefetchLink from "@/components/HoverPrefetchLink";

const createMarkup = (htmlString) => {
  return { __html: htmlString };
};

const BoxingTrainingMma = (props) => {
  const [loading, setLoading] = useState(false);
  const [pagedata, setPagedata] = useState([]);

  useEffect(() => {
    setLoading(true);
    async function getData() {
      let apiUrl = "trainings?trainning_type=mma_boxing";
      const url = GLOBALS.API_BASE_URL + apiUrl;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        setPagedata(json.data);
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

  return (
    <div className="DYBOXING_TRAINING">
      <h3 className="DYBOXING_TRAINING_text">BOXING TRAINING FOR&nbsp;MMA</h3>
      <div className="DYBOXING_TRAINING_contend1">
        {pagedata.map((item, i) => {
          return (
            <div key={i} className="videos1">
              {" "}
              <img src={item.image} className="videos1img" />{" "}
              <HoverPrefetchLink href={item.youtubevideolink}>
                <img src="assets/img/play.png" className="play_icon" />{" "}
              </HoverPrefetchLink>
              <div className="videos_text">
                <div className="time">
                  <p className="time_text">{item.videoduration}</p>
                </div>
                <p className="video_text">Videos</p>
                <p className="Fighting_off">{item.title}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="DYBOXING_TRAINING_contend2" />
    </div>
  );
};

export default BoxingTrainingMma;
