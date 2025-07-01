"use client";

import { useEffect } from "react";
import Head from "next/head";
import HoverPrefetchLink from "@/components/HoverPrefetchLink";

export default function BodyScanPage() {
  useEffect(() => {
    const items = document.querySelectorAll(".scan .item");
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
    items.forEach((el) => el.addEventListener("click", scrollToTop));
    return () =>
      items.forEach((el) => el.removeEventListener("click", scrollToTop));
  }, []);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/assets/css/style-body-scan.css" />
      </Head>

      <div className="mvpBgContainer mvp_container" id="newsMainContent">
        <div
          className="service_content pt-4"
          id="scan_flash"
          style={{ minHeight: 58 }}
        >
          <div id="middle_inner_wraper1">
            <div id="body-scan-injury" className="row nomargin">
              {/* Male Body Scan */}
              <div
                id="male-body-cont"
                className="col-sm-12 d-flex justify-content-center"
              >
                <div className="scan" id="scan">
                  <img
                    title="Male Injuries"
                    alt="Male Injuries"
                    src="/assets/body-scan-injuries/body_scan_male001.png"
                    className="maleImage"
                  />
                  <div className="scan01" style={{ height: 0 }} />

                  {[
                    {
                      href: "/body-injury/male-head-injury",
                      src: "/assets/body-scan-injuries/item1.png",
                      title: "Head Injuries",
                    },
                    {
                      href: "/body-injury/male-facial-injury",
                      src: "/assets/body-scan-injuries/item2.png",
                      title: "Facial Injuries",
                    },
                    {
                      href: "/body-injury/male-shoulder-injury",
                      src: "/assets/body-scan-injuries/item3.png",
                      title: "Shoulder Injuries",
                    },
                    {
                      href: "/body-injury/male-wrist-injury",
                      src: "/assets/body-scan-injuries/item4.png",
                      title: "Wrist & Hand Injuries",
                    },
                    {
                      href: "/body-injury/male-lowback-injury",
                      src: "/assets/body-scan-injuries/item6.png",
                      title: "Low Back Pain",
                    },
                    {
                      href: "/body-injury/male-elbow-injury",
                      src: "/assets/body-scan-injuries/item5.png",
                      title: "Elbow Injuries",
                    },
                    {
                      href: "/body-injury/male-hip-injury",
                      src: "/assets/body-scan-injuries/item7.png",
                      title: "Hip Injuries",
                    },
                    {
                      href: "/body-injury/male-knee-injury",
                      src: "/assets/body-scan-injuries/item8.png",
                      title: "Knee Injuries",
                    },
                    {
                      href: "/body-injury/male-lowerleg-injury",
                      src: "/assets/body-scan-injuries/item9.png",
                      title: "Lower Leg Injuries",
                    },
                    {
                      href: "/body-injury/male-foot-injury",
                      src: "/assets/body-scan-injuries/item10.png",
                      title: "Foot Injuries",
                    },
                    {
                      href: "/body-injury/male-ankle-injury",
                      src: "/assets/body-scan-injuries/item11.png",
                      title: "Ankle Injuries",
                    },
                  ].map((item, i) => (
                    <HoverPrefetchLink
                      key={i}
                      href={item.href}
                      className={`item item${i + 1}`}
                      title={item.title}
                    >
                      <img
                        src={item.src}
                        alt={item.title}
                        title={item.title}
                        className="img hvr-bounce-out"
                      />
                    </HoverPrefetchLink>
                  ))}
                </div>
              </div>

              {/* Female Body Scan */}
              <div
                id="female-body-cont"
                className="col-sm-12 d-flex justify-content-center"
              >
                <div className="scan" id="scan02">
                  <img
                    title="Female Injuries"
                    alt="Female Injuries"
                    src="/assets/body-scan-injuries/body_scan_female001.png"
                    className="femaleImage"
                  />
                  <div className="scan02" style={{ height: 0 }} />

                  {[
                    {
                      href: "/body-injury/female-shoulder-injury",
                      src: "/assets/body-scan-injuries/item3.png",
                      title: "Shoulder Injuries",
                    },
                    {
                      href: "/body-injury/female-elbow-injury",
                      src: "/assets/body-scan-injuries/item5.png",
                      title: "Elbow Injuries",
                    },
                    {
                      href: "/body-injury/female-wrist-injury",
                      src: "/assets/body-scan-injuries/item4.png",
                      title: "Wrist & Hand Injuries",
                    },
                    {
                      href: "/body-injury/female-lowback-injury",
                      src: "/assets/body-scan-injuries/item6.png",
                      title: "Low Back Pain",
                    },
                    {
                      href: "/body-injury/female-knee-injury",
                      src: "/assets/body-scan-injuries/item8.png",
                      title: "Knee Injuries",
                    },
                    {
                      href: "/body-injury/female-lowerleg-injury",
                      src: "/assets/body-scan-injuries/item9.png",
                      title: "Lower Leg Injuries",
                    },
                    {
                      href: "/body-injury/female-ankle-injury",
                      src: "/assets/body-scan-injuries/item11.png",
                      title: "Ankle Injuries",
                    },
                    {
                      href: "/body-injury/female-foot-injury",
                      src: "/assets/body-scan-injuries/item10.png",
                      title: "Foot Injuries",
                    },
                  ].map((item, i) => (
                    <HoverPrefetchLink
                      key={i}
                      href={item.href}
                      className={`item item${i + 1}`}
                      title={item.title}
                    >
                      <img
                        src={item.src}
                        alt={item.title}
                        title={item.title}
                        className="img hvr-bounce-out"
                      />
                    </HoverPrefetchLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
