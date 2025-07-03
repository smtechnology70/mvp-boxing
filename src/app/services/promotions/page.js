"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import GLOBALS from "@/server/Globals";

const createMarkup = (htmlString) => {
  return { __html: htmlString };
};

const Promotions = (props) => {
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
              expertise&nbsp;&gt;&nbsp;promotions
            </h1>
            <meta itemProp="serviceType" content="promotions" />
            <div style={{ margin: "25px 0 25px 0" }}>
              <img
                className=" lazyloaded"
                alt="Promotions"
                data-src="assets/images/serviceimages/image-3.jpg"
                style={{ width: "100%", height: "auto" }}
                src="assets/images/serviceimages/image-3.jpg"
              />
            </div>
            <p>
              Founded in 2010, Masson, LLC uses a modern-day approach to sports
              marketing. The company promotes live boxing and MMA events
              nationally and internationally.The company represents and manages
              sports athletes and; stages live events and branded entertainment
              experiences annually; and also independently produces and
              distributes sports media.{" "}
            </p>
            <br />
            <br />
            <p>
              Masson, LLC works with our clients and partners to bring unmatched
              experiences in live boxing, MMA, and events to the world. As part
              of the extensive partnerships worldwide, we are reshaping the way
              people engage in sports entertainment.
            </p>
            <br />
            <br />
            <p>
              We own, operate and commercially represent boxing, MMA events that
              influence every facet of sports culture with a particular focus on
              sports entertainment. Through our deep relationships with major
              associations and our extensive global media and sponsor network,
              we assist in transforming events into content-rich experiences
              that connect with consumers.
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
      </div>
    </div>
  );
};

export default Promotions;
