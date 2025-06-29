"use client";

import React, { useState, useEffect } from "react";
import GLOBALS from "@/server/Globals";
import Loader from "@/components/Loader";

export default function CookiePolicyPage() {
  const [loading, setLoading] = useState(true);
  const [pagedata, setPagedata] = useState("");
  const [pagetitle, setPagetitle] = useState("");

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch(
          `${GLOBALS.API_BASE_URL}/cmspage?page_id=cookies`
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
    fetchData();
  }, []);

  return (
    <div className="mvpBgContainer mvp_container" id="newsMainContent">
      <div
        className="article_area_content"
        itemScope
        itemType="https://schema.org/Article"
      >
        <h1 className="titles_article border_titles_article">
          {pagetitle || "Cookie Usage"}
        </h1>
        <div className="workout_content page-loader text-justify borderNone size-n-col1 margin-bottom-0">
          <Loader loading={loading} />
          {!loading && (
            <div
              className="page-content"
              dangerouslySetInnerHTML={{ __html: pagedata }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
