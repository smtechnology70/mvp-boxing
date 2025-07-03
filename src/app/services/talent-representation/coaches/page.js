"use client";
import { useEffect, useState } from "react";

import Link from "next/link";
import GLOBALS from "@/server/Globals";

const createMarkup = (htmlString) => {
  return { __html: htmlString };
};

const CoachesService = (props) => {
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
              expertise&nbsp;&gt;&nbsp;talent rep.&nbsp;&gt;&nbsp;coaches
            </h1>
            <meta itemProp="serviceType" content="talent rep." />
            <div style={{ margin: "25px 0 25px 0" }}>
              <img
                className=" lazyloaded"
                alt="Talent Representation"
                data-src="assets/images/serviceimages/image-7.jpg"
                style={{ width: "100%", height: "auto" }}
                src="assets/images/serviceimages/image-7.jpg"
              />
            </div>
            <p>
              Masson, LLC manages the careers of both professional and amateur
              coaches to help them maximize their earnings potential.
            </p>
            <p>
              Our expert insight and knowledge of combative sports, soccer &amp;
              tennis coaching markets, coupled with our professional
              relationships, enables the career advancement of our
              company&apos;s coaching clients. Media, speaking and endorsement
              opportunities at the local, regional and national levels are also
              generated through our extensive networks and corporate
              partnerships.
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

export default CoachesService;
