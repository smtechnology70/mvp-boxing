"use client";

import React, { useState, useEffect } from "react";
import HoverPrefetchLink from "@/components/HoverPrefetchLink";
import GLOBALS from "@/server/Globals";
import Loader from "@/components/Loader";

const createMarkup = (html) => ({ __html: html });

export default function SitemapPage() {
  const [loading, setLoading] = useState(true);
  const [pagedata, setPagedata] = useState("");
  const [pagetitle, setPagetitle] = useState("");

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch(
          `${GLOBALS.API_BASE_URL}/cmspage?page_id=sitemap`
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
    <div className="mvpBgContainer mvp_container" id="newsMainContents">
      <div className="article_area_content odds_section sitemap mx-0 w-100">
        <h1 className="titles_article border_titles_article sitemapTitle">
          {pagetitle || "MVPBOXING.com Sitemap"}
        </h1>

        <Loader loading={loading} />
        {!loading && pagedata && (
          <div
            className="page-content mb-4"
            dangerouslySetInnerHTML={createMarkup(pagedata)}
          />
        )}

        <div id="sitemapLinks" className="odds-div">
          <div id="sitemapLevel" className="row mx-1">
            <div className="col-12">
              <ul>
                <li className="linksHeading">
                  <HoverPrefetchLink href="/">HOME</HoverPrefetchLink>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-4">
              <ul>
                <li className="linksHeading">
                  <HoverPrefetchLink href="/news">ALL NEWS</HoverPrefetchLink>
                </li>
                <li>
                  <HoverPrefetchLink href="/talent-representation/boxing">
                    Boxing
                  </HoverPrefetchLink>
                </li>
                <li>
                  <HoverPrefetchLink href="/news-mma">MMA</HoverPrefetchLink>
                </li>
              </ul>

              <ul>
                <li className="linksHeading">
                  <HoverPrefetchLink href="/espanol-boxeo">
                    ESPAÑOL
                  </HoverPrefetchLink>
                </li>
                <li>
                  <HoverPrefetchLink href="/espanol-boxeo">
                    Boxeo
                  </HoverPrefetchLink>
                </li>
                <li>
                  <HoverPrefetchLink href="/espanol-amm">AMM</HoverPrefetchLink>
                </li>
              </ul>

              <ul>
                <li className="linksHeading">FIGHT WORLD</li>
                <li>
                  <HoverPrefetchLink href="/fight-poll">
                    Fight Poll
                  </HoverPrefetchLink>
                </li>
                <li>
                  <HoverPrefetchLink href="/Injuries">
                    Body Scan
                  </HoverPrefetchLink>
                </li>
              </ul>

              <ul>
                <li className="linksHeading">MORE</li>
                <li>
                  <HoverPrefetchLink href="/article/muhammad-ali-boxing-reform-act">
                    Ali Reform Act
                  </HoverPrefetchLink>
                </li>
                <li>
                  <a
                    href="https://boxrec.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Box Rec
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.wada-ama.org/en/prohibited-list"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Anti-Doping Policy
                  </a>
                </li>
                <li>
                  <HoverPrefetchLink href="/article/unified_boxing_rules">
                    Boxing Rules
                  </HoverPrefetchLink>
                </li>
                <li>Athlete’s Brain Health</li>
                <li>TICKETS</li>
                <li>EVENTS</li>
                <li>FIGHT ZONE</li>
              </ul>

              <ul>
                <li className="linksHeading">WATCH</li>
                <li>
                  <HoverPrefetchLink href="/talent-representation/boxing">
                    BOXING
                  </HoverPrefetchLink>
                </li>
                <li>
                  <HoverPrefetchLink href="/news-mma">MMA</HoverPrefetchLink>
                </li>
              </ul>

              <ul>
                <li className="linksHeading">MVP BOXING</li>
                <li>
                  <HoverPrefetchLink href="/about">About</HoverPrefetchLink>
                </li>
                <li>
                  <HoverPrefetchLink href="/community">
                    Community
                  </HoverPrefetchLink>
                </li>
                <li>
                  <HoverPrefetchLink href="/launchingsoon">
                    Shop
                  </HoverPrefetchLink>
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-4">
              <ul>
                <li className="linksHeading">ALL ACCESS VIDEOS</li>
                <li>
                  <HoverPrefetchLink href="/videos/all-access/FIGHT-HIGHLIGHTS-Josh-Warrington-vs-Luis-Alberto-Lopez">
                    Boxing Training
                  </HoverPrefetchLink>
                </li>
                <li>
                  <HoverPrefetchLink href="/videos/mma-training/5-stance-basics-mma-fighting">
                    MMA Training
                  </HoverPrefetchLink>
                </li>
              </ul>

              <ul>
                <li className="linksHeading">PROGRAMS</li>
                <li>
                  <HoverPrefetchLink href="/article/boxing">
                    Boxing Training
                  </HoverPrefetchLink>
                </li>
                <li>
                  <HoverPrefetchLink href="/article/brazilian-jiu-jitsu">
                    BJJ Training
                  </HoverPrefetchLink>
                </li>
                <li>
                  <HoverPrefetchLink href="/article/online-training">
                    Online Training
                  </HoverPrefetchLink>
                </li>
                <li>
                  <HoverPrefetchLink href="/mvp-kids/kid-reporter">
                    Kids & Juniors
                  </HoverPrefetchLink>
                </li>
                <li>
                  <HoverPrefetchLink href="/article/seminars">
                    Seminars
                  </HoverPrefetchLink>
                </li>
              </ul>

              <ul>
                <li className="linksHeading">FORUM</li>
                <li>
                  <HoverPrefetchLink href="/forums">forum</HoverPrefetchLink>
                </li>
              </ul>

              <ul>
                <li className="linksHeading">EXPERTISE</li>
                <li>
                  <HoverPrefetchLink href="/services/talent-representation">
                    Talent Rep.
                  </HoverPrefetchLink>
                </li>
                <li>
                  <HoverPrefetchLink href="/services/consulting">
                    Consulting
                  </HoverPrefetchLink>
                </li>
                <li>
                  <HoverPrefetchLink href="/services/promotions">
                    Promotions
                  </HoverPrefetchLink>
                </li>
                <li>
                  <HoverPrefetchLink href="/services/sponsorships">
                    Sponsorship
                  </HoverPrefetchLink>
                </li>
                <li>
                  <HoverPrefetchLink href="/services/marketing">
                    Marketing
                  </HoverPrefetchLink>
                </li>
              </ul>

              <ul>
                <li className="linksHeading">MVPBOXING +</li>
                <li>
                  <HoverPrefetchLink href="/talent-representation/boxing">
                    Boxing
                  </HoverPrefetchLink>
                </li>
                <li>
                  <HoverPrefetchLink href="/news-mma">MMA</HoverPrefetchLink>
                </li>
              </ul>

              <ul>
                <li className="linksHeading">MVP BOXING APP</li>
                <li>
                  <HoverPrefetchLink href="/mvp-kids/kid-reporter">
                    MVP BOXING APP
                  </HoverPrefetchLink>
                </li>
              </ul>

              <ul>
                <li className="linksHeading">MVP KIDS</li>
                <li>
                  <HoverPrefetchLink href="/mvp-kids/football">
                    Football
                  </HoverPrefetchLink>
                </li>
                <li>
                  <HoverPrefetchLink href="/mvp-kids/baseball">
                    Baseball
                  </HoverPrefetchLink>
                </li>
                <li>
                  <HoverPrefetchLink href="/mvp-kids/unboxed">
                    Unboxed
                  </HoverPrefetchLink>
                </li>
                <li>
                  <HoverPrefetchLink href="/mvp-kids/kid-reporter">
                    Kid Reporter
                  </HoverPrefetchLink>
                </li>
                <li>
                  <HoverPrefetchLink href="/mvp-kids/kid-reporter">
                    More
                  </HoverPrefetchLink>
                </li>
              </ul>

              <ul>
                <li className="linksHeading">HELP</li>
                <li>
                  <HoverPrefetchLink href="/partnership-inquiries">
                    Partnership Inquiries
                  </HoverPrefetchLink>
                </li>
                <li>
                  <HoverPrefetchLink href="/support">Support</HoverPrefetchLink>
                </li>
                <li>
                  <HoverPrefetchLink href="/contact">Contact</HoverPrefetchLink>
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-4">
              <ul>
                <li className="linksHeading">WORKOUTS</li>
                <li>
                  <HoverPrefetchLink href="/article/custom_workout">
                    Boxing
                  </HoverPrefetchLink>
                </li>
                <li>
                  <HoverPrefetchLink href="/article/custom_workout">
                    Thai Boxing
                  </HoverPrefetchLink>
                </li>
              </ul>

              <ul>
                <li className="linksHeading">SCHEDULES</li>
                <li>
                  <HoverPrefetchLink href="/talent-representation/boxing">
                    Boxing
                  </HoverPrefetchLink>
                </li>
                <li>
                  <HoverPrefetchLink href="/news-mma">MMA</HoverPrefetchLink>
                </li>
              </ul>

              <ul>
                <li className="linksHeading">PODCAST</li>
                <li>
                  <HoverPrefetchLink href="/podcasts/boxing">
                    Boxing
                  </HoverPrefetchLink>
                </li>
                <li>
                  <HoverPrefetchLink href="/podcasts/mma">
                    MMA
                  </HoverPrefetchLink>
                </li>
              </ul>

              <ul>
                <li className="linksHeading">MVP FIT</li>
                <li>
                  <HoverPrefetchLink href="/article/skills">
                    Skill Development
                  </HoverPrefetchLink>
                </li>
                <li>
                  <HoverPrefetchLink href="/article/athlete-assessment">
                    Athlete Assessment
                  </HoverPrefetchLink>
                </li>
                <li>
                  <HoverPrefetchLink href="/article/fitness_training">
                    Fitness Training
                  </HoverPrefetchLink>
                </li>
                <li>
                  <HoverPrefetchLink href="/article/custom_workout">
                    Custom Workout
                  </HoverPrefetchLink>
                </li>
                <li>
                  <HoverPrefetchLink href="/article/corp_performance">
                    Corp. Performance
                  </HoverPrefetchLink>
                </li>
                <li>
                  <HoverPrefetchLink href="/article/speed">
                    Speed Training
                  </HoverPrefetchLink>
                </li>
                <li>
                  <HoverPrefetchLink href="/article/injury_prevention">
                    Injury Prevention
                  </HoverPrefetchLink>
                </li>
                <li>
                  <HoverPrefetchLink href="/article/biomechanicstechnique">
                    Biomechanics
                  </HoverPrefetchLink>
                </li>
              </ul>

              <ul>
                <li className="linksHeading">FIGHTER TOOLS</li>
                <li>
                  <HoverPrefetchLink href="/article/link-between-cte-and-football-players">
                    Concussion
                  </HoverPrefetchLink>
                </li>
                <li>
                  <HoverPrefetchLink href="/article/cut-treatment">
                    Cut Treatment
                  </HoverPrefetchLink>
                </li>
                <li>
                  <HoverPrefetchLink href="/article/womens-sports-injuries">
                    Q-Angle
                  </HoverPrefetchLink>
                </li>
                <li>
                  <HoverPrefetchLink href="/article/vo2-max">
                    VO2-MAX
                  </HoverPrefetchLink>
                </li>
                <li>
                  <HoverPrefetchLink href="/article/taping-and-bracing">
                    Taping & Bracing
                  </HoverPrefetchLink>
                </li>
                <li>
                  <HoverPrefetchLink href="/article/for-women">
                    For Women
                  </HoverPrefetchLink>
                </li>
                <li>
                  <HoverPrefetchLink href="/article/tabata-protocol">
                    Tabata Protocol
                  </HoverPrefetchLink>
                </li>
                <li>
                  <HoverPrefetchLink href="/article/lactate-threshold">
                    Lactate Threshold
                  </HoverPrefetchLink>
                </li>
              </ul>

              <ul>
                <li className="linksHeading">LEGAL</li>
                <li>
                  <HoverPrefetchLink href="/privacy_policy">
                    Privacy Policy
                  </HoverPrefetchLink>
                </li>
                <li>
                  <HoverPrefetchLink href="/terms_of_use">
                    Terms of Use
                  </HoverPrefetchLink>
                </li>
                <li>
                  <HoverPrefetchLink href="/advertise_with_us">
                    Advertise With Us
                  </HoverPrefetchLink>
                </li>
                <li>
                  <HoverPrefetchLink href="/cookie_policy">
                    Cookie Policy
                  </HoverPrefetchLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
