// app/forums/page.js
"use client";

import React from "react";
import Link from "next/link";

export default function ForumsPage() {
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
          style={{
            padding: "100px 0 80px",
            textAlign: "center",
          }}
        >
          <img
            className="v-center"
            src="https://www.mvpboxing.com/assets/images/forum-coming-soon-1.png"
            alt="Forums coming soon"
          />

        
        </div>
      </div>
    </div>
  );
}
