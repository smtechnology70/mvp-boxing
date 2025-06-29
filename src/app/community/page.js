"use client";

import React, { useState, useEffect } from "react";
// adjust these to match your folder layout
import GLOBALS from "@/server/Globals";
import Loader from "@/components/Loader";

const createMarkup = (html) => ({ __html: html });

export default function CommunityPage() {
  const [loading, setLoading] = useState(true);
  const [pagedata, setPagedata] = useState("");

  useEffect(() => {
    async function fetchCommunity() {
      setLoading(true);
      try {
        const res = await fetch(
          `${GLOBALS.API_BASE_URL}/cmspage?page_id=community`
        );
        if (!res.ok) throw new Error(`Status ${res.status}`);
        const json = await res.json();
        setPagedata(json.data.content);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchCommunity();
  }, []);

  return (
    <div className="mvpBgContainer mvp_container" id="newsMainContent">
      <div
        className="article_area_content"
        itemScope
        itemType="https://schema.org/Article"
      >
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
