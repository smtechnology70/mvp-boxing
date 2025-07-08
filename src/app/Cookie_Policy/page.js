"use client";

import React, { useState, useEffect } from "react";
import GLOBALS from "@/server/Globals";
import Loader from "@/components/Loader";

export default function CookiePolicyPage() {
  const [loading, setLoading] = useState(true);
  const [pagedata, setPagedata] = useState("");
  const [pagetitle, setPagetitle] = useState("");

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch(
          `${GLOBALS.API_BASE_URL}/cmspage?page_id=cookies`
        );
        if (!res.ok) throw new Error(`Status ${res.status}`);
        const json = await res.json();
        setPagetitle(json.data.page_title);
        setPagedata(json.data.content);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="mvpBgContainer mvp_container" id="newsMainContent">
      <div
        className="article_area_content"
        itemScope
        itemType="https://schema.org/Article"
        style={{ padding: "20px" }}
      >
        <h1
          className="titles_article border_titles_article"
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            borderBottom: "2px solid #ddd",
            paddingBottom: "10px",
            marginBottom: "20px",
          }}
        >
          {pagetitle || "Cookie Usage"}
        </h1>

        <div
          className="workout_content borderNone text-left size-n-col1 margin-bottom-0"
          style={{
            textAlign: "justify",
            fontSize: "16px",
            lineHeight: "1.7",
            color: "#333",
          }}
        >
          <div className="mainContentBlock section sectionMain">
            <div className="baseHtml">
              <p>
                This page discusses how cookies are used by this site. If you
                continue to use this site, you are consenting to our use of
                cookies.
              </p>

              <h3
                style={{
                  fontSize: "26px",
                  marginTop: "28px",
                }}
              >
                What are cookies?
              </h3>
              <p>
                Cookies are small text files stored on your computer by your web
                browser at the request of a site you're viewing. This allows the
                site you're viewing to remember things about you, such as your
                preferences and history or to keep you logged in.
              </p>
              <p>
                Cookies may be stored on your computer for a short time (such as
                only while your browser is open) or for an extended period of
                time, even years. Cookies not set by this site will not be
                accessible to us.
              </p>

              <h3
                style={{
                  fontSize: "26px",
                  marginTop: "28px",
                }}
              >
                Our cookie usage
              </h3>
              <p>This site uses cookies for numerous things, including:</p>
              <div style={{ marginLeft: "20px" }}>
                <ul
                  style={{
                    paddingLeft: "20px",
                    marginBottom: "30px",
                    listStyleType: "disc",
                  }}
                >
                  <li>
                    1. Registration and maintaining your preferences. This
                    includes ensuring that you can stay logged in and keeping
                    the site in the language or appearance that you requested.
                  </li>
                  <br />
                  <li>
                    2. Analytics. This allows us to determine how people are
                    using the site and improve it.
                  </li>
                  <br />
                  <li>
                    3. Advertising cookies (possibly third-party). If this site
                    displays advertising, cookies may be set by the advertisers
                    to determine who has viewed an ad or similar things. These
                    cookies may be set by third parties, in which case this site
                    has no ability to read or write these cookies.
                  </li>
                  <br />
                  <li>
                    4. Other third-party cookies for things like Facebook or
                    Twitter sharing. These cookies will generally be set by the
                    third-party independently, so this site will have no ability
                    to access them.
                  </li>
                  <br />
                </ul>
              </div>

              <h3
                style={{
                  fontSize: "26px",
                  marginTop: "28px",
                }}
              >
                Standard cookies we set
              </h3>
              <p>
                These are the main cookies we set during normal operation of the
                software.
              </p>

              <h3
                style={{
                  fontSize: "26px",
                  marginTop: "28px",
                }}
              >
                Additional cookies and those set by third parties
              </h3>
              <p>
                Additional cookies may be set during the use of the site to
                remember information as certain actions are being performed, or
                remembering certain preferences.
              </p>
              <p>
                Other cookies may be set by third party service providers which
                may provide information such as tracking anonymously which users
                are visiting the site, or set by content embedded into some
                pages, such as YouTube or other media service providers.
              </p>

              <h3
                style={{
                  fontSize: "26px",
                  marginTop: "28px",
                }}
              >
                Removing/disabling cookies
              </h3>
              <p>
                Managing your cookies and cookie preferences must be done from
                within your browser's options/preferences. Here is a list of
                guides on how to do this for popular browser software:
              </p>
              <div style={{ marginLeft: "20px" }}>
                <ul style={{ paddingLeft: "20px", marginBottom: "20px" }}>
                  <li>
                    <a
                      href="https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies"
                      target="_blank"
                      rel="noreferrer"
                    >
                      &bull; Microsoft Internet Explorer
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://privacy.microsoft.com/en-us/windows-10-microsoft-edge-and-privacy"
                      target="_blank"
                      rel="noreferrer"
                    >
                      &bull; Microsoft Edge
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
                      target="_blank"
                      rel="noreferrer"
                    >
                      &bull; Mozilla Firefox
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.google.com/chrome/answer/95647?hl=en"
                      target="_blank"
                      rel="noreferrer"
                    >
                      &bull; Google Chrome
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.apple.com/kb/PH21411"
                      target="_blank"
                      rel="noreferrer"
                    >
                      &bull; Safari for macOS
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.apple.com/en-gb/HT201265"
                      target="_blank"
                      rel="noreferrer"
                    >
                      &bull; Safari for iOS
                    </a>
                  </li>
                </ul>
              </div>

              <h3
                style={{
                  fontSize: "26px",
                  marginTop: "28px",
                }}
              >
                More information about cookies
              </h3>
              <p>
                To learn more about cookies, and find more information about
                blocking certain types of cookies, please visit the{" "}
                <a
                  href="https://ico.org.uk/for-the-public/online/cookies/"
                  target="_blank"
                  rel="noreferrer"
                >
                  ICO website Cookies page
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
