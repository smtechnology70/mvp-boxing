"use client";

import React, { useState, useEffect } from "react";
import GLOBALS from "@/server/Globals";
import Loader from "@/components/Loader";

export default function AdvertiseWithUsPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch(
          `${GLOBALS.API_BASE_URL}/cmspage?page_id=advertise_with_us`
        );
        if (!res.ok) throw new Error(`Status ${res.status}`);
        await res.json(); // CMS data fetched (not rendered statically here)
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="mvpBgContainer mvp_container adver" id="newsMainContent">
      <Loader loading={loading} />

      <div className="article_area_content">
        <h1 className="titles_article border_titles_article">
          Advertise on MVP Boxing on Your Terms
        </h1>
        <div className="workout_content borderNone text-left size-n-col1 margin-bottom-0">
          <p className="first">
            <a
              href="http://mvpboxing.com"
              target="_blank"
              rel="noopener noreferrer"
              title="MVPBoxing.com"
              className="text-red uk-text-bold"
            >
              MVPBOXING.com
            </a>{" "}
            Your Way gives you the convenience and flexibility you need with the
            advertising impact you must have.
          </p>

          <div className="inline-content-1">
            <p className="uk-text-bold">
              Your Way provides customization to your specific MVPBOXING.com and
              MVP Boxing Mobile needs:
            </p>
            <ul>
              <li>Target at a local level</li>
              <li>
                Create your own custom run-of-site display ads with easy-to-use
                templates
              </li>
              <li>Plan your own campaign, within your budget</li>
              <li>
                Target specific dates for extra visibility for your brand or
                product
              </li>
              <li>
                Access the status of your campaign online - whenever you want!
              </li>
              <li>
                Optimize your campaign, testing different images, copy and
                colors
              </li>
            </ul>
          </div>

          <p>
            Please choose the option that best suits your advertising needs:
          </p>

          <div className="uk-grid-separation">
            <p>
              <a
                className="typeform-share text-red uk-text-bold"
                href="https://mvp.typeform.com/to/kPnBqG"
                data-mode={1}
                target="_blank"
                rel="noopener noreferrer"
                title="Advertise on MVPBOXING.COM"
              >
                <i className="uk-icon uk-icon-minus-circle" /> Under $3,000
              </a>
              <br />I have an advertising budget of $3,000 or less and would
              like to create a campaign now.
            </p>
            <p>
              <a
                className="typeform-share text-red uk-text-bold"
                href="https://mvp.typeform.com/to/kPnBqG"
                data-mode={1}
                target="_blank"
                rel="noopener noreferrer"
                title="Advertise on MVPBOXING.COM"
              >
                <i className="uk-icon uk-icon-plus-circle" /> Over $3,000
              </a>{" "}
              I have an advertising budget of over{" "}
              <a
                className="typeform-share text-red uk-text-bold"
                href="https://mvp.typeform.com/to/kPnBqG"
                data-mode={1}
                target="_blank"
                rel="noopener noreferrer"
              >
                $3,000—contact our sales team
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
