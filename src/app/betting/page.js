// app/comingsoon/page.js
"use client";

import React from "react";

export default function ComingSoonPage() {
  return (
    <div className="mvpBgContainer mvp_container">
      <div
        className="service_content contentShadow"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgb(71, 72, 76) 10%, rgb(23, 26, 31) 100%)",
          position: "relative",
          minHeight: 49,
        }}
      >
        <div
          className="fContactForm"
          style={{ padding: "100px 0 80px !important", textAlign: "center" }}
        >
          <img
            className="v-center ls-is-cached lazyloaded"
            alt="Coming Soon"
            data-src="https://www.mvpboxing.com/assets/images/forum-coming-soon-1.png"
            src="https://www.mvpboxing.com/assets/images/forum-coming-soon-1.png"
          />
        </div>
      </div>
    </div>
  );
}
