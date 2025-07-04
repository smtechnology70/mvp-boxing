"use client";
import { useEffect, useState } from "react";

import Link from "next/link";
import GLOBALS from "@/server/Globals";

const createMarkup = (htmlString) => {
  return { __html: htmlString };
};

const TalentRepresentation = (props) => {
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
              expertise&nbsp;&gt;&nbsp;talent rep.
            </h1>
            <meta itemProp="serviceType" content="talent rep." />
            <div style={{ margin: "25px 0 25px 0" }}>
              <img
                className=" lazyloaded"
                alt="Talent Representation"
                data-src="assets/images//serviceimages/image-4.jpg"
                style={{ width: "100%", height: "auto" }}
                src="assets/images/serviceimages/image-4.jpg"
              />
            </div>
            <p>
              {`Masson, LLC manages the careers of many world class athletes in
              the combative sports industry. Masson, LLC is the world's foremost
              talent representation agency in combative sports. From contract
              negotiations to media training, our agency takes a comprehensive
              strategic approach to managing and marketing talent brands.`}
            </p>
            <br />
            <br />
            <p>
              {`To learn more about Masson, LLC's talent representation, choose a
              category below:`}
            </p>
            <br />
            <br />
            <ul className="expertise">
              <li>
                <Link
                  href="/talent-representation/boxing"
                  alt="Boxing"
                  title="Boxing"
                >
                  &gt;&nbsp;Boxing
                </Link>
              </li>
              <li>
                <Link href="/talent-representation/mma" alt="MMA" title="MMA">
                  &gt;&nbsp;MMA
                </Link>
              </li>
              <li>
                <Link
                  href="/services/talent-representation/coaches"
                  alt="Coaches"
                  title="Coaches"
                >
                  &gt;&nbsp;Coaches
                </Link>
              </li>
              <li>
                <Link
                  href="/services/talent-representation/speakers"
                  alt="Speakers"
                  title="Speakers"
                >
                  &gt;&nbsp;Speakers
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
    </div>
  );
};

export default TalentRepresentation;
