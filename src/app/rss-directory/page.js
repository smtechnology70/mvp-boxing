"use client";

import { useEffect, useState } from "react";

import GLOBALS from "@/server/Globals";

const createMarkup = (htmlString) => {
  return { __html: htmlString };
};

const RssDirectory = (props) => {
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
    <div className="mvpBgContainer mvp_container" id="newsMainContent">
      <div className="service_content contentShadow" style={{ minHeight: 219 }}>
        <div className="fContactForm p-3">
          <h1 className="titles_article">syndicated content (rss) directory</h1>
          {/* ends (.contactPageTitle) */}
          <div className="left fContactFormArea">
            <div className="xmlDirectory">
              <div className="left xmlList1">
                <div className="xml-heading">xml1</div>
                <ul>
                  <li>
                    <i className="fa fa-rss-square" aria-hidden="true" />
                    <a href="#">MVP Boxing MMA News RSS</a>
                  </li>
                  <li>
                    <i className="fa fa-rss-square" aria-hidden="true" />
                    <a href="#">MVP Boxing MMA Articles RSS</a>
                  </li>
                  <li>
                    <i className="fa fa-rss-square" aria-hidden="true" />
                    <a href="#">MVP Boxing MMA Interviews RSS</a>
                  </li>
                  <li>
                    <i className="fa fa-rss-square" aria-hidden="true" />
                    <a href="#">MVP Boxing MMA Pictures RSS</a>
                  </li>
                  <li>
                    <i className="fa fa-rss-square" aria-hidden="true" />
                    <a href="#">MVP Boxing MMA Fights RSS</a>
                  </li>
                  <li>
                    <i className="fa fa-rss-square" aria-hidden="true" />
                    <a href="#">MVP Boxing MMA Videos RSS</a>
                  </li>
                  <li>
                    <i className="fa fa-rss-square" aria-hidden="true" />
                    <a href="#">MVP Boxing MMA Noticias RSS</a>
                  </li>
                </ul>
              </div>
              <div className="left xmlList2">
                <div className="xml-heading">xml2</div>
                <ul>
                  <li>
                    <i className="fa fa-rss-square" aria-hidden="true" />
                    <a href="#">MVP Boxing MMA News RSS v2</a>
                  </li>
                  <li>
                    <i className="fa fa-rss-square" aria-hidden="true" />
                    <a href="#">MVP Boxing MMA Articles RSS v2</a>
                  </li>
                  <li>
                    <i className="fa fa-rss-square" aria-hidden="true" />
                    <a href="#">MVP Boxing MMA Interviews RSS v2</a>
                  </li>
                  <li>
                    <i className="fa fa-rss-square" aria-hidden="true" />
                    <a href="#">MVP Boxing MMA Pictures RSS v2</a>
                  </li>
                  <li>
                    <i className="fa fa-rss-square" aria-hidden="true" />
                    <a href="#">MVP Boxing MMA Videos RSS v2</a>
                  </li>
                  <li>
                    <i className="fa fa-rss-square" aria-hidden="true" />
                    <a href="#">MVP Boxing MMA Noticias RSS v2</a>
                  </li>
                </ul>
              </div>
              <div className="clear" />
            </div>
          </div>
          <div className="right fContactFormAd2" />
          <div className="clear" />
        </div>
      </div>
    </div>
  );
};

export default RssDirectory;
