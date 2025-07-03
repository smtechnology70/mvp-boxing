"use client";
import { useEffect, useState } from "react";

import Link from "next/link";
import GLOBALS from "@/server/Globals";

const createMarkup = (htmlString) => {
  return { __html: htmlString };
};

const MmaService = (props) => {
  const [loading, setLoading] = useState(false);
  const [pagedata, setPagedata] = useState("");

  useEffect(() => {
    setLoading(true);
    async function getData() {
      let apiUrl = "cmspage?page_id=partnership-inquiries";
      const url = GLOBALS.API_BASE_URL + apiUrl;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        setPagedata(json.data.content);
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
    <div className="mvpBgContainer mvp_container" id="newsMainContents">
      <div
        className="service-body"
        itemScope
        itemType="https://schema.org/Service"
      >
        <div className="service_content" style={{ minHeight: 49 }}>
          <div className="contentData">
            <h1 className="contentBreadcrumb2">
              expertise&nbsp;&gt;&nbsp;talent rep.&nbsp;&gt;&nbsp;mma
            </h1>
            <meta itemProp="serviceType" content="talent rep." />
            <div style={{ margin: "25px 0 25px 0" }}>
              <img
                className=" lazyloaded"
                alt="Talent Representation"
                data-src="assets/images/serviceimages/image-6.jpg"
                style={{ width: "100%", height: "auto" }}
                src="assets/images/serviceimages/image-6.jpg"
              />
            </div>
            <p>
              Masson, LLC represents some of the most influential and well-known
              athletes within the sport of MMA. These athletes move the needle
              with the powerful youth demographic and are on the cutting edge of
              their respective sport.
            </p>
            <p>Masson, LLC expertise includes:</p>
            <p>
              Maximizing income potential with hands-on, strategic career
              management
            </p>
            <p>
              Extensive resources and expertise to generate value in all facets
              and stages of a career
            </p>
            <p>
              Recurring revenue streams via endorsements, appearances and
              licensing
            </p>
            <p>
              Global media exposure through a tailored public relations program
            </p>
            <p>
              “Franchise approach” to brand management with explicit focus on
              long-term goals.
            </p>
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
        {/* ends (.service_content) */}
      </div>
    </div>
  );
};

export default MmaService;
