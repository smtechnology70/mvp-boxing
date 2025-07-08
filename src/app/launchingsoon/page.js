// app/comingsoon/page.js
"use client";

import ReusableImage from "@/components/ReusableImage";
import React from "react";

export default function LaunchingSoonPage() {
  return (
    <div className="mvpBgContainer mvp_container">
      <div className="service_content contentShadow">
        <a href="/contact">
          <div>
            <ReusableImage
              alt="Coming Soon"
              data-src="/assets/images/nacher.42618e8dd97adc9d8454.jpeg"
              src="/assets/images/nacher.42618e8dd97adc9d8454.jpeg"
            />
          </div>
        </a>
      </div>
    </div>
  );
}
