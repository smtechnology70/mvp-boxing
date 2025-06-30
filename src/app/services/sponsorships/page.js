"use client";

import React, { useState, useEffect } from "react";
import GLOBALS from "@/server/Globals";
import Link from "next/link";
import $ from "jquery";

const Sponsorships = (props) => {
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
        style={{ minHeight: 65 }}
      >
        <div className="contentData">
          <h1 className="contentBreadcrumb2">
            expertise&nbsp;&gt;&nbsp;sponsorship
          </h1>
          <meta itemProp="serviceType" content="sponsorship" />
          <div style={{ margin: "25px 0 25px 0" }}>
            <img
              className=" ls-is-cached lazyloaded"
              alt="Sponsorships"
              data-src="/assets/images/serviceimages/image-9.jpg"
              style={{ width: "100%", height: "auto" }}
              src="/assets/images/serviceimages/image-9.jpg"
            />
          </div>
          <p>
            Masson, LLC provides nearly unlimited access to corporate sponsors
            and lifestyle events, and global media platforms. Some of the
            best-known brands work with Masson, LLC to connect with prestigious
            sponsorship opportunities around the world.
          </p>
          <p>
            Masson, LLC provides nearly unlimited access to corporate sponsors
            and lifestyle events, and global media platforms. Some of the
            best-known brands work with Masson, LLC to connect with prestigious
            sponsorship opportunities around the world.
          </p>
          <p>
            {`Our ability to negotiate, manage and activate sponsorship's helps
            these companies create unique brand experience, which influence
            consumer-buying behaviors and simultaneously build long-term
            loyalty.`}
          </p>
          <p>Masson, LLC turnkey sponsorship services include:</p>
          <p>•&nbsp;Competitive assessment</p>
          <p>•&nbsp;Sponsor evaluation</p>
          <p>•&nbsp;Contract negotiation</p>
          <p>•&nbsp;On-site management</p>
          <p>•&nbsp;Media production and distribution</p>
          <p>•&nbsp;Press support</p>
          <p>
            For contact information, choose from the sponsorship categories
            below:
          </p>
          <ul className="expertise">
            <li>
              <Link href="/sponsorships/boxing" alt="Boxing" title="Boxing">
                &gt;&nbsp;Boxing
              </Link>
            </li>
            <li>
              <Link href="/sponsorships/mma" alt="MMA" title="MMA">
                &gt;&nbsp;MMA
              </Link>
            </li>
          </ul>
        </div>
        <div className="page__links" style={{ marginBottom: 10 }}>
          <h3 className="page__links__title" />
          <Link
            className="page__links__link btn feat-link"
            target="_self"
            href="/contact"
          >
            <strong>Contact Us</strong>
            <i className="fa fa-chevron-right" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sponsorships;
