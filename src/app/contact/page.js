// app/contact/page.js

"use client";

import React, { useState, useEffect } from "react";
import GLOBALS from "@/server/Globals";
import Loader from "@/components/Loader";

const createMarkup = (html) => ({ __html: html });

export default function ContactPage() {
  const [loading, setLoading] = useState(true);
  const [pagedata, setPagedata] = useState("");

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch(
          `${GLOBALS.API_BASE_URL}/cmspage?page_id=contact-us`
        );
        if (!res.ok) throw new Error(`Status ${res.status}`);
        const json = await res.json();
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
    <div className="mvpBgContainer mvp_container" id="newsMainContents">
      <Loader loading={loading} />
      {!loading && pagedata && (
        <div
          className="page-content mb-4"
          dangerouslySetInnerHTML={createMarkup(pagedata)}
        />
      )}

      <div className="content_section">
        <div id="wrapper">
          <div className="left-content">
            <div id="form-area">
              <div className="form">
                <form id="contact-form" method="post" noValidate>
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="cf_name"
                    id="cf_name"
                  />
                  <br />
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="cf_email"
                    id="cf_email"
                  />
                  <br />
                  <textarea
                    placeholder="HOW MAY WE HELP YOU?"
                    name="cf_message"
                    id="cf_message"
                  />
                  <button type="submit" className="submit" id="submit">
                    Send Message
                    <div className="popup_box">
                      <div className="pop_up_msg">
                        <p>Test Data</p>
                        <span>Test Data</span>
                      </div>
                    </div>
                  </button>
                </form>
              </div>
              <div className="address-area">
                <h2>Masson, LLC</h2>
                <p>
                  360 East South Water St.
                  <br /> Chicago, IL 60601
                </p>
                <ul>
                  <li>
                    Phone: <a href="tel:312-399-5390">312-399-5390</a>; Fax:{" "}
                    <a href="tel:312-951-0896">312-951-0896</a>
                  </li>
                  <li>
                    Email:{" "}
                    <a href="mailto:info@mvpboxing.com">info@mvpboxing.com</a>
                  </li>
                </ul>
              </div>
            </div>

            <div id="contact">
              <img
                src="/assets/images/world.jpg"
                alt="Contact Map"
                className="lazyloaded"
              />
              {[...Array(13)].map((_, i) => (
                <a
                  key={i}
                  href="http://mvpboxing.com/contact/"
                  className={`place-icon place-icon-${String(i + 1).padStart(
                    2,
                    "0"
                  )} masterTooltip`}
                  title="Location"
                >
                  +<div className="circle" />
                  <div className="circle2" />
                </a>
              ))}

              <div className="info">
                <h2>INFO:</h2>
                <p>
                  Roll your mouse over the hotspots for more info. Click on a
                  hotspot to open the link to the web location of that specific
                  hotspot
                </p>
              </div>
            </div>

            <div className="site-bg">
              <img
                src="/assets/images/site_bg.jpg"
                alt="Site Background"
                className="lazyloaded"
              />
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </div>
  );
}
