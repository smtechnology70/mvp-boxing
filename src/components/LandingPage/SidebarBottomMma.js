"use client";

import React, { useState, useEffect } from "react";
import HoverPrefetchLink from "@/components/HoverPrefetchLink";

import GLOBALS from "@/server/Globals";

const createMarkup = (htmlString) => {
  return { __html: htmlString };
};

const SidebarBottomMma = (props) => {
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);

  useEffect(() => {
    setLoading(true);
    async function getDataBoxingNews() {
      let apiUrl = "mmaheadlines";
      const url = GLOBALS.API_BASE_URL + apiUrl;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        setNews(json.data);
        setLoading(false);
      } catch (error) {
        console.error(error.message);
      }
    }
    getDataBoxingNews();
    return () => {
      // Cleanup logic here
    };
  }, []);

  return (
    <>
      <header>
        <div className="headlines">MMA HEADLINES</div>
      </header>
      <div className="row nomargin bg-grey0 news_data">
        {news.map((item, i) => {
          return (
            <div key={i} className="headlines-item-block">
              <i id="menuIcon" className="headlines-contend" />
              <div className="">
                <HoverPrefetchLink href={item.id} className="headlines-text">
                  <strong className="headlines-text-item">{item.title}</strong>
                </HoverPrefetchLink>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SidebarBottomMma;
