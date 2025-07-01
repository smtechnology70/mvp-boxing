"use client";

import React, { useState, useEffect } from "react";
import GLOBALS from "@/server/Globals";
import Loader from "@/components/Loader";

const createMarkup = (html) => ({ __html: html });

export default function AboutPage() {
  const [loading, setLoading] = useState(true);
  const [pagedata, setPagedata] = useState("");
  const [pagetitle, setPagetitle] = useState("");

  useEffect(() => {
    async function fetchAbout() {
      try {
        const res = await fetch(
          `${GLOBALS.API_BASE_URL}/cmspage?page_id=about`
        );
        if (!res.ok) throw new Error(`Status ${res.status}`);
        const json = await res.json();
        setPagetitle(json.data.page_title);
        setPagedata(json.data.content);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchAbout();
  }, []);

  return (
    <div className="mvpBgContainer mvp_container" id="newsMainContent">
      <div
        className="article_area_content"
        itemScope
        itemType="https://schema.org/Article"
      >
        <h1 itemProp="name" className="titles_article">
          {pagetitle}
        </h1>

        <div className="workout_content text-justify page-loader">
          <Loader loading={loading} />
          {!loading && (
            <div
              className="page-content"
              dangerouslySetInnerHTML={createMarkup(pagedata)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
