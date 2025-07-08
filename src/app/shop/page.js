// app/comingsoon/page.js
"use client";

import React from "react";

export default function LaunchingSoonPage() {
  return (
    <div className="mvpBgContainer mvp_container">
      <div className="service_content contentShadow" style={{ margin: "0px" }}>
        <a href="/contact">
          <div>
            <img
              alt="Coming Soon"
              data-src="/assets/images/launchingsoon.jpeg"
              src="/assets/images/launchingsoon.jpeg"
            />
          </div>
        </a>
      </div>
    </div>
  );
}
