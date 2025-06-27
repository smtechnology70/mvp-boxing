"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
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
                  <Link href="/">HOME</Link>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-4">
              <ul>
                <li className="linksHeading">
                  <Link href="/news">ALL NEWS</Link>
                </li>
                <li>
                  <Link href="/talent-representation/boxing">Boxing</Link>
                </li>
                <li>
                  <Link href="/news-mma">MMA</Link>
                </li>
              </ul>

              <ul>
                <li className="linksHeading">
                  <Link href="/espanol-boxeo">ESPAÑOL</Link>
                </li>
                <li>
                  <Link href="/espanol-boxeo">Boxeo</Link>
                </li>
                <li>
                  <Link href="/espanol-amm">AMM</Link>
                </li>
              </ul>

              <ul>
                <li className="linksHeading">FIGHT WORLD</li>
                <li>
                  <Link href="/fight-poll">Fight Poll</Link>
                </li>
                <li>
                  <Link href="/Injuries">Body Scan</Link>
                </li>
              </ul>

              <ul>
                <li className="linksHeading">MORE</li>
                <li>
                  <Link href="/article/muhammad-ali-boxing-reform-act">
                    Ali Reform Act
                  </Link>
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
                  <Link href="/article/unified_boxing_rules">Boxing Rules</Link>
                </li>
                <li>Athlete’s Brain Health</li>
                <li>TICKETS</li>
                <li>EVENTS</li>
                <li>FIGHT ZONE</li>
              </ul>

              <ul>
                <li className="linksHeading">WATCH</li>
                <li>
                  <Link href="/talent-representation/boxing">BOXING</Link>
                </li>
                <li>
                  <Link href="/news-mma">MMA</Link>
                </li>
              </ul>

              <ul>
                <li className="linksHeading">MVP BOXING</li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/community">Community</Link>
                </li>
                <li>
                  <Link href="/launchingsoon">Shop</Link>
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-4">
              <ul>
                <li className="linksHeading">ALL ACCESS VIDEOS</li>
                <li>
                  <Link href="/videos/all-access/FIGHT-HIGHLIGHTS-Josh-Warrington-vs-Luis-Alberto-Lopez">
                    Boxing Training
                  </Link>
                </li>
                <li>
                  <Link href="/videos/mma-training/5-stance-basics-mma-fighting">
                    MMA Training
                  </Link>
                </li>
              </ul>

              <ul>
                <li className="linksHeading">PROGRAMS</li>
                <li>
                  <Link href="/article/boxing">Boxing Training</Link>
                </li>
                <li>
                  <Link href="/article/brazilian-jiu-jitsu">BJJ Training</Link>
                </li>
                <li>
                  <Link href="/article/online-training">Online Training</Link>
                </li>
                <li>
                  <Link href="/mvp-kids/kid-reporter">Kids & Juniors</Link>
                </li>
                <li>
                  <Link href="/article/seminars">Seminars</Link>
                </li>
              </ul>

              <ul>
                <li className="linksHeading">FORUM</li>
                <li>
                  <Link href="/forums">forum</Link>
                </li>
              </ul>

              <ul>
                <li className="linksHeading">EXPERTISE</li>
                <li>
                  <Link href="/services/talent-representation">
                    Talent Rep.
                  </Link>
                </li>
                <li>
                  <Link href="/services/consulting">Consulting</Link>
                </li>
                <li>
                  <Link href="/services/promotions">Promotions</Link>
                </li>
                <li>
                  <Link href="/services/sponsorships">Sponsorship</Link>
                </li>
                <li>
                  <Link href="/services/marketing">Marketing</Link>
                </li>
              </ul>

              <ul>
                <li className="linksHeading">MVPBOXING +</li>
                <li>
                  <Link href="/talent-representation/boxing">Boxing</Link>
                </li>
                <li>
                  <Link href="/news-mma">MMA</Link>
                </li>
              </ul>

              <ul>
                <li className="linksHeading">MVP BOXING APP</li>
                <li>
                  <Link href="/mvp-kids/kid-reporter">MVP BOXING APP</Link>
                </li>
              </ul>

              <ul>
                <li className="linksHeading">MVP KIDS</li>
                <li>
                  <Link href="/mvp-kids/football">Football</Link>
                </li>
                <li>
                  <Link href="/mvp-kids/baseball">Baseball</Link>
                </li>
                <li>
                  <Link href="/mvp-kids/unboxed">Unboxed</Link>
                </li>
                <li>
                  <Link href="/mvp-kids/kid-reporter">Kid Reporter</Link>
                </li>
                <li>
                  <Link href="/mvp-kids/kid-reporter">More</Link>
                </li>
              </ul>

              <ul>
                <li className="linksHeading">HELP</li>
                <li>
                  <Link href="/partnership-inquiries">
                    Partnership Inquiries
                  </Link>
                </li>
                <li>
                  <Link href="/support">Support</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-4">
              <ul>
                <li className="linksHeading">WORKOUTS</li>
                <li>
                  <Link href="/article/custom_workout">Boxing</Link>
                </li>
                <li>
                  <Link href="/article/custom_workout">Thai Boxing</Link>
                </li>
              </ul>

              <ul>
                <li className="linksHeading">SCHEDULES</li>
                <li>
                  <Link href="/talent-representation/boxing">Boxing</Link>
                </li>
                <li>
                  <Link href="/news-mma">MMA</Link>
                </li>
              </ul>

              <ul>
                <li className="linksHeading">PODCAST</li>
                <li>
                  <Link href="/podcasts/boxing">Boxing</Link>
                </li>
                <li>
                  <Link href="/podcasts/mma">MMA</Link>
                </li>
              </ul>

              <ul>
                <li className="linksHeading">MVP FIT</li>
                <li>
                  <Link href="/article/skills">Skill Development</Link>
                </li>
                <li>
                  <Link href="/article/athlete-assessment">
                    Athlete Assessment
                  </Link>
                </li>
                <li>
                  <Link href="/article/fitness_training">Fitness Training</Link>
                </li>
                <li>
                  <Link href="/article/custom_workout">Custom Workout</Link>
                </li>
                <li>
                  <Link href="/article/corp_performance">
                    Corp. Performance
                  </Link>
                </li>
                <li>
                  <Link href="/article/speed">Speed Training</Link>
                </li>
                <li>
                  <Link href="/article/injury_prevention">
                    Injury Prevention
                  </Link>
                </li>
                <li>
                  <Link href="/article/biomechanicstechnique">
                    Biomechanics
                  </Link>
                </li>
              </ul>

              <ul>
                <li className="linksHeading">FIGHTER TOOLS</li>
                <li>
                  <Link href="/article/link-between-cte-and-football-players">
                    Concussion
                  </Link>
                </li>
                <li>
                  <Link href="/article/cut-treatment">Cut Treatment</Link>
                </li>
                <li>
                  <Link href="/article/womens-sports-injuries">Q-Angle</Link>
                </li>
                <li>
                  <Link href="/article/vo2-max">VO2-MAX</Link>
                </li>
                <li>
                  <Link href="/article/taping-and-bracing">
                    Taping & Bracing
                  </Link>
                </li>
                <li>
                  <Link href="/article/for-women">For Women</Link>
                </li>
                <li>
                  <Link href="/article/tabata-protocol">Tabata Protocol</Link>
                </li>
                <li>
                  <Link href="/article/lactate-threshold">
                    Lactate Threshold
                  </Link>
                </li>
              </ul>

              <ul>
                <li className="linksHeading">LEGAL</li>
                <li>
                  <Link href="/privacy_policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms_of_use">Terms of Use</Link>
                </li>
                <li>
                  <Link href="/advertise_with_us">Advertise With Us</Link>
                </li>
                <li>
                  <Link href="/cookie_policy">Cookie Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
