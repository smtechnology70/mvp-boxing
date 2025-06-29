// app/support/page.js

"use client";

import React, { useState, useEffect } from "react";
import HoverPrefetchLink from "@/components/HoverPrefetchLink";
import GLOBALS from "@/server/Globals";
import Loader from "@/components/Loader";

const createMarkup = (html) => ({ __html: html });

export default function SupportPage() {
  const [loading, setLoading] = useState(true);
  const [pagedata, setPagedata] = useState("");
  const [pagetitle, setPagetitle] = useState("");

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch(
          `${GLOBALS.API_BASE_URL}/cmspage?page_id=support`
        );
        if (!res.ok) throw new Error(`Status ${res.status}`);
        const json = await res.json();
        setPagedata(json.data.content);
        setPagetitle(json.data.page_title);
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
      <div className="service_content contentShadow">
        <div className="fContactForm p-3">
          <h1 className="titles_article text-center">
            {pagetitle || "Support"}
          </h1>

          <Loader loading={loading} />
          {!loading && pagedata && (
            <div
              className="page-content mb-4"
              dangerouslySetInnerHTML={createMarkup(pagedata)}
            />
          )}

          <div className="left fContactFormArea">
            <div className="supportList">
              <p className="supportTitle">Monitor Recommendations:</p>
              <p className="supportDesc">
                For best results please have your monitors resolution set to
                1024x768 or higher
              </p>
            </div>
            <div className="supportList">
              <p className="supportTitle">Browser Requirements:</p>
              <p className="supportDesc">
                Internet Explorer 9.0+, <a href="#">(Get IE 7.0)</a>
              </p>
            </div>
            <div className="supportList">
              <p className="supportTitle">JavaScript Requirements:</p>
              <p className="supportDesc">
                In order for the MVPboxing.com web site to function properly,
                JavaScript must be enabled
              </p>
            </div>
            <div className="supportList">
              <p className="supportTitle">Video Requirements:</p>
              <p className="supportDesc">
                Windows Media Player 7.0+,{" "}
                <a href="#">(Get Win Media Player 8.0+)</a>
              </p>
            </div>
            <div className="supportList">
              <p className="supportTitle">Other Requirements:</p>
              <p className="supportDesc">
                Flash Player 10.0, <a href="#">(Get Flash Player 10.0+)</a>
              </p>
            </div>
            <div className="supportList">
              <p className="supportTitle">Recommended Requirements:</p>
              <p className="supportDesc">
                Quick Time 5.0+, <a href="#">(Get Quick Time 7.0+)</a>
              </p>
              <p className="supportDesc">
                Cable or DSL connection is recommended
              </p>
            </div>
            <div className="support-contact">
              For other help, please{" "}
              <HoverPrefetchLink href="/contact" className="text-red underline">
                Contact Us
              </HoverPrefetchLink>
            </div>
          </div>

          <div className="right fContactFormAd2" />
          <div className="clear" />
        </div>
      </div>
    </div>
  );
}
