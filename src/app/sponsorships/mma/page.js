"use client";

import React, { useState, useEffect } from "react";
import GLOBALS from "@/server/Globals";
import Link from "next/link";
import $ from "jquery";

const SponsorshipMma = (props) => {
  const [loading, setLoading] = useState(false);
  const [newsdata, setNewsdata] = useState([]);

  let currentPage = 1;

  useEffect(() => {
    async function getData(currentPage) {
      setLoading(true);
      let apiUrl = "dropboxingnews?p=" + currentPage;
      const url = GLOBALS.API_BASE_URL + apiUrl;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        setNewsdata(json.data);
        setLoading(false);
      } catch (error) {
        console.error(error.message);
      }
    }
    getData(currentPage);

    $(".nextPage").on("click", function () {
      currentPage++;
      getData(currentPage);
    });

    $(".previousPage").on("click", function () {
      currentPage--;
      if (currentPage > 0) {
        getData(currentPage);
      } else {
        currentPage++;
      }
    });

    return () => {
      // Cleanup logic here
    };
  }, []);

  return (
    <div className="mvpBgContainer mvp_container" id="newsMainContents">
      <div
        className="service_content"
        itemScope
        itemType="https://schema.org/Service"
      >
        <div className="contentData">
          <h1 className="contentBreadcrumb2">
            expertise&nbsp;&gt;&nbsp;sponsorship&nbsp;&gt;&nbsp;mma
          </h1>
          <meta itemProp="serviceType" content="sponsorship" />
          <div style={{ margin: "25px 0 25px 0" }}>
            <img
              className=" ls-is-cached lazyloaded"
              alt="Sponsorships"
              data-src="https://alimder.com/mvpboxing/public//uploads/serviceimages/image-10.jpg"
              style={{ width: "100%", height: "auto" }}
              src="https://alimder.com/mvpboxing/public//uploads/serviceimages/image-10.jpg"
            />
          </div>
          <p>{`To connect with today's increasingly powerful youth demographic, marketers have to reach them where they
      live and play. Masson, LLC creates meaningful brand interactions with this powerful market.`}</p>
          <p>{`Using its collective expertise in sports, entertainment and media. We help some of the world's biggest
      brands, like Boost Mobile and Target connect with and capture the attention of the youth market.`}</p>
        </div>
        <div className="page__links" style={{ marginBottom: 10 }}>
          <h3 className="page__links__title" />
          <Link
            className="page__links__link btn feat-link"
            target="_self"
            to="/contact"
          >
            <strong>Contact Us</strong>
            <i className="fa fa-chevron-right" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SponsorshipMma;
