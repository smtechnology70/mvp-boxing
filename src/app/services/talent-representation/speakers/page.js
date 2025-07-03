"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import GLOBALS from "@/server/Globals";

const createMarkup = (htmlString) => {
  return { __html: htmlString };
};

const SpeakersService = (props) => {
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
              expertise&nbsp;&gt;&nbsp;talent rep.&nbsp;&gt;&nbsp;speakers
            </h1>
            <meta itemProp="serviceType" content="talent rep." />
            <div style={{ margin: "25px 0 25px 0" }}>
              <img
                className=" lazyloaded"
                alt="Talent Representation"
                data-src="assets/images/serviceimages/image-5.jpg"
                style={{ width: "100%", height: "auto" }}
                src="assets/images/serviceimages/image-5.jpg"
              />
            </div>
            <p>
              Our Speakers are one of leading speakers bureaus in the USA. Our
              exclusive client roster includes professional athletes, coaches,
              business speakers, motivational and inspirational keynote
              speakers, and other celebrity speakers, including media
              personalities/broadcasters.
            </p>
            <p>
              A lecture agency, our Speakers books talent for corporate clients,
              associations, healthcare organizations, lecture series and
              colleges and universities throughout the world.
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

export default SpeakersService;
