"use client";

import React, { useState, useEffect } from "react";
import GLOBALS from "@/server/Globals";
import Link from "next/link";
import $ from "jquery";

const Marketing = (props) => {
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
            expertise&nbsp;&gt;&nbsp;marketing
          </h1>
          <meta itemProp="serviceType" content="marketing" />
          <div style={{ margin: "25px 0 25px 0" }}>
            <img
              className=" lazyloaded"
              alt="Marketing"
              data-src="/assets/images/serviceimages/image-2.jpg"
              style={{ width: "100%", height: "auto" }}
              src="/assets/images/serviceimages/image-2.jpg"
            />
          </div>
          <p>
            Our comprehensive marketing service connects, develops and promotes
            brands via our culture-defining talent, content and properties to
            help change the way marketers approach partnership.
          </p>
          <p>
            {" "}
            {`Masson, LLC team's offerings in brand strategy and activation;
            sponsorships and endorsements; creative development and design;
            digital and original content; naming rights; public relations; live
            events; branded impact; and B2B services help brands leverage the
            world around them to create targeted, relevant programs that deliver
            measurable value.`}
          </p>
          <p>
            Our global insights group further provides actionable consumer,
            media and marketplace data that gives context to consumer behavior,
            directly influencing our brand engagement strategy.
          </p>
          <p>
            Through access to our international sales team and extensive
            relationship network, our clients can maximize opportunities to
            expand their presence globally.
          </p>
          <br />
          <br />
          <br />
          <br />
          <p>
            We are a full-service solutions provider in all areas of sports
            marketing, creating innovative platforms to help our partners reach
            the combative sports fan base.
          </p>
          <br />
          <br />
          <p>
            Through Licensing, we provide our partner institutions with
            full-service brand protection, management and development platforms
            to help them e ffectively promote the production and sales of
            high-quality boxing and MMA licensed merchandise. Because every
            promotional event is unique, we work with best-in-class licensees
            and retailers across every distribution channel to maintain brand
            integrity while optimizing experiences for consumers.
          </p>
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

export default Marketing;
