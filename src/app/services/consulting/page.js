"use client";
import { useEffect, useState } from "react";

import Link from "next/link";
import GLOBALS from "@/server/Globals";

const createMarkup = (htmlString) => {
  return { __html: htmlString };
};

const Consulting = (props) => {
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
              expertise&nbsp;&gt;&nbsp;consulting
            </h1>
            <meta itemProp="serviceType" content="consulting" />
            <div style={{ margin: "25px 0 25px 0" }}>
              <img
                className=" ls-is-cached lazyloaded"
                itemProp="image"
                alt="Consulting"
                data-src="assets/images/serviceimages/image-1.jpg"
                style={{ width: "100%", height: "auto" }}
                src="assets/images/serviceimages/image-1.jpg"
              />
            </div>
            <div className="pageTag">
              Masson, LLC Sports Consulting Division
            </div>
            <p>
              Based in Chicago, IL but operating globally, our consulting
              division provides strategies and solutions to our clients front
              office operations. Leveraging long-term industry relationships and
              expert sports business knowledge, the consulting team proposes
              results-driven plans for our clients commercial development and
              general business knowledge from major sports to service the needs
              of their clients.
            </p>
            <br />
            <br />
            <p>
              Masson, LLC Sports work exclusively on sports assignments and has
              consulted on many diverse projects including increasing efficiency
              in ticket sales operation as well as securing key sponsorship
              placements within the industry.
            </p>
            <br />
            <br />
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
    </div>
  );
};

export default Consulting;
