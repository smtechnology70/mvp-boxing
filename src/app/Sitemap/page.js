"use client";

import HoverPrefetchLink from "@/components/HoverPrefetchLink";
import GLOBALS from "@/server/Globals";
import Link from "next/link";
import { useEffect, useState } from "react";

const createMarkup = (htmlString) => {
  return { __html: htmlString };
};

const Sitemap = (props) => {
  const [loading, setLoading] = useState(false);
  const [pagedata, setPagedata] = useState("");
  const [pagetitle, setPagetitle] = useState("");

  useEffect(() => {
    async function getData() {
      let apiUrl = "cmspage?page_id=sitemap";
      const url = GLOBALS.API_BASE_URL + apiUrl;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        setPagedata(json.data.content);
        setPagetitle(json.data.page_title);
        setLoading(false);
      } catch (error) {
        console.error(error.message);
      }
    }
    getData();
    return () => {
      // Cleanup logic here
    };
  }, []);

  return (
    <div className="mvpBgContainer mvp_container" id="newsMainContents">
      <div className="article_area_content odds_section sitemap mx-0 w-100">
        <h1 className="titles_article border_titles_article sitemapTitle">
          MVPBOXING.com Sitemap
        </h1>
        <div id="sitemapLinks" className="odds-div">
          <div id="sitemapLevel" className="row mx-1">
            <div className="col-12">
              <div className="row mx-1">
                <ul>
                  <li className="linksHeading">
                    <HoverPrefetchLink href="/" title="HOME">
                      HOME
                    </HoverPrefetchLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="row mx-1">
                <ul>
                  <li className="linksHeading">
                    <HoverPrefetchLink href="/" title="ALL NEWS">
                      ALL NEWS
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink
                      href="/talent-representation/boxing"
                      title="Boxing"
                    >
                      Boxing
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink href="/news-mma" title="MMA">
                      MMA
                    </HoverPrefetchLink>
                  </li>
                </ul>
              </div>
              <div className="row mx-1">
                <ul>
                  <li className="linksHeading">
                    <HoverPrefetchLink href="/" title="ESPAÑOL">
                      ESPAÑOL
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink href="/espanol-boxeo" title="Boxeo">
                      Boxeo
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink href="espanol-amm" title="AMM">
                      AMM
                    </HoverPrefetchLink>
                  </li>
                </ul>
              </div>
              <div className="row mx-1">
                <ul>
                  <li className="linksHeading">
                    <HoverPrefetchLink href="/" title="FIGHT WORLD">
                      FIGHT WORLD
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink href="/" title="Fight Poll">
                      Fight Poll
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink href="/Injuries" title="Body Scan">
                      Body Scan
                    </HoverPrefetchLink>
                  </li>
                </ul>
              </div>

              <div className="row mx-1">
                <ul>
                  <li className="linksHeading">
                    <HoverPrefetchLink href="/" title="MORE">
                      MORE
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink
                      href="/article/muhammad-ali-boxing-reform-act"
                      title="Ali Reform Act"
                    >
                      Ali Reform Act
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink
                      href="https://boxrec.com/"
                      title="Box Rec"
                    >
                      Box Rec
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink
                      href="https://www.wada-ama.org/en/prohibited-list"
                      title="Anti-Doping Policy"
                    >
                      Anti-Doping Policy
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink
                      href="/article/unified_boxing_rules"
                      title="Boxing Rules"
                    >
                      Boxing Rules
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink href="/" title="Athlete’s Brain Health">
                      Athlete’s Brain Health
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink href="/" title="TICKETS">
                      TICKETS
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink href="/" title="EVENTS">
                      EVENTS
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink href="/" title="FIGHT ZONE">
                      FIGHT ZONE
                    </HoverPrefetchLink>
                  </li>
                </ul>
              </div>
              <div className="row mx-1">
                <ul>
                  <li className="linksHeading">
                    <HoverPrefetchLink href="/" title="WATCH">
                      WATCH
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink
                      href="/talent-representation/boxing"
                      title="BOXING"
                    >
                      BOXING
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink href="/news-mma" title="MMA">
                      MMA
                    </HoverPrefetchLink>
                  </li>
                </ul>
              </div>
              <div className="row mx-1">
                <ul>
                  <li className="linksHeading">
                    <HoverPrefetchLink href="/" title="MVP BOXING">
                      MVP BOXING
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink href="/about" title="About">
                      About
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink href="/community" title="Community">
                      Community
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink href="/launchingsoon" title="Shop">
                      Shop
                    </HoverPrefetchLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="row mx-1">
                <ul>
                  <li className="linksHeading">
                    <HoverPrefetchLink
                      href="/videos/all-access/FIGHT-HIGHLIGHTS-Josh-Warrington-vs-Luis-Alberto-Lopez"
                      title="ALL ACCESS VIDEOS"
                    >
                      ALL ACCESS VIDEOS
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink
                      href="/videos/boxing-training/art-of-the-jab"
                      title="Boxing Training"
                    >
                      Boxing Training
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink
                      href="/videos/mma-training/5-stance-basics-mma-fighting"
                      title="MMA Training"
                    >
                      MMA Training
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink
                      href="/videos/all-access/FIGHT-HIGHLIGHTS-Josh-Warrington-vs-Luis-Alberto-Lopez"
                      title="ALL ACCESS"
                    >
                      ALL ACCESS
                    </HoverPrefetchLink>
                  </li>
                </ul>
              </div>
              <div className="row mx-1">
                <ul>
                  <li className="linksHeading">
                    <HoverPrefetchLink href="/" title="PROGRAMS">
                      PROGRAMS
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink
                      href="/article/boxing"
                      title="Boxing Training"
                    >
                      Boxing Training
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink
                      href="/article/brazilian-jiu-jitsu"
                      title="BJJ Training"
                    >
                      BJJ Training
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink
                      href="/article/online-training"
                      title="Online Training"
                    >
                      Online Training
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink
                      href="/mvp-kids/kid-reporter"
                      title="Kids & Juniors"
                    >
                      Kids &amp; Juniors
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink
                      href="/article/seminars"
                      title="Seminars"
                    >
                      Seminars
                    </HoverPrefetchLink>
                  </li>
                </ul>
              </div>
              <div className="row mx-1">
                <ul>
                  <li className="linksHeading">
                    <HoverPrefetchLink href="/launchingsoon" title="forum">
                      forum
                    </HoverPrefetchLink>
                  </li>
                </ul>
              </div>
              <div className="row mx-1">
                <ul>
                  <li className="linksHeading">
                    <HoverPrefetchLink href="/" title="EXPERTISE">
                      EXPERTISE
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink
                      href="/services/talent-representation"
                      title="Talent Rep."
                    >
                      Talent Rep.
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink
                      href="/services/consulting"
                      title="Consulting"
                    >
                      Consulting
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink
                      href="/services/promotions"
                      title="Promotions"
                    >
                      Promotions
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink
                      href="/services/sponsorships"
                      title="Sponsorship"
                    >
                      Sponsorship
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink
                      href="services/marketing"
                      title="Marketing"
                    >
                      Marketing
                    </HoverPrefetchLink>
                  </li>
                </ul>
              </div>
              <div className="row mx-1">
                <ul>
                  <li className="linksHeading">
                    <HoverPrefetchLink href="/" title="MVPBOXING +">
                      MVPBOXING +
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink
                      href="/talent-representation/boxing"
                      title="Boxing"
                    >
                      Boxing
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink href="/news-mma" title="MMA">
                      MMA
                    </HoverPrefetchLink>
                  </li>
                </ul>
              </div>
              <div className="row mx-1">
                <ul>
                  <li className="linksHeading">
                    <HoverPrefetchLink
                      href="/mvp-kids/kid-reporter"
                      title="MVP BOXING APP"
                    >
                      MVP BOXING APP
                    </HoverPrefetchLink>
                  </li>
                </ul>
              </div>
              <div className="row mx-1">
                <ul>
                  <li className="linksHeading">
                    <HoverPrefetchLink href="/" title="MVP KIDS">
                      MVP KIDS
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink
                      href="/mvp-kids/football"
                      title="Football"
                    >
                      Football
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink
                      href="/mvp-kids/baseball"
                      title="Baseball"
                    >
                      Baseball
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink href="/mvp-kids/unboxed" title="Unboxed">
                      Unboxed
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink
                      href="/mvp-kids/kid-reporter"
                      title="Kid Reporter"
                    >
                      Kid Reporter
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink
                      href="/mvp-kids/kid-reporter"
                      title="More"
                    >
                      More
                    </HoverPrefetchLink>
                  </li>
                </ul>
              </div>
              <div className="row mx-1">
                <ul>
                  <li className="linksHeading">
                    <HoverPrefetchLink href="/" title="HELP">
                      HELP
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink
                      href="/Partnership"
                      title="Partnership Inquiries"
                    >
                      Partnership Inquiries
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink href="/Support" title="Support">
                      Support
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink href="/contact" title="Contact">
                      Contact
                    </HoverPrefetchLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="row mx-1">
                <ul>
                  <li className="linksHeading">
                    <HoverPrefetchLink
                      href="/article/custom_workout"
                      title="WORKOUTS"
                    >
                      WORKOUTS
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink
                      href="/article/custom_workout"
                      title="Boxing"
                    >
                      Boxing
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink
                      href="/article/custom_workout"
                      title="Thai Boxing"
                    >
                      Thai Boxing
                    </HoverPrefetchLink>
                  </li>
                </ul>
              </div>
              <div className="row mx-1">
                <ul>
                  <li className="linksHeading">
                    <HoverPrefetchLink href="/" title="SCHEDULES">
                      SCHEDULES
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink
                      href="/talent-representation/boxing"
                      title="Boxing"
                    >
                      Boxing
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink href="/news-mma" title="MMA">
                      MMA
                    </HoverPrefetchLink>
                  </li>
                </ul>
              </div>
              <div className="row mx-1">
                <ul>
                  <li className="linksHeading">
                    <HoverPrefetchLink href="/" title="PODCAST">
                      PODCAST
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink href="/podcasts/boxing" title="Boxing">
                      Boxing
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink href="/podcasts/mma" title="MMA">
                      MMA
                    </HoverPrefetchLink>
                  </li>
                </ul>
              </div>
              <div className="row mx-1">
                <ul>
                  <li className="linksHeading">
                    <HoverPrefetchLink href="/" title="MVP FIT">
                      MVP FIT
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink
                      href="/article/skills"
                      title="Skill Development"
                    >
                      Skill Development
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink
                      href="/article/athlete-assessment"
                      title="Athlete Assessment"
                    >
                      Athlete Assessment
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink
                      href="/article/fitness_training"
                      title="Fitness Training"
                    >
                      Fitness Training
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink
                      href="/article/custom_workout"
                      title="Custom Workout"
                    >
                      Custom Workout
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink
                      href="/article/corp_performance"
                      title="Corp. Performance"
                    >
                      Corp. Performance
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink
                      href="/article/speed"
                      title="Speed Training"
                    >
                      Speed Training
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink
                      href="/article/injury_prevention"
                      title="Injury Prevention"
                    >
                      Injury Prevention
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink
                      href="/article/biomechanicstechnique"
                      title="Biomechanics"
                    >
                      Biomechanics
                    </HoverPrefetchLink>
                  </li>
                </ul>
              </div>
              <div className="row mx-1">
                <ul>
                  <li className="linksHeading">
                    <HoverPrefetchLink href="/" title="FIGHTER TOOLS">
                      FIGHTER TOOLS
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink
                      href="/article/link-between-cte-and-football-players"
                      title="Concussion"
                    >
                      Concussion
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink
                      href="/article/cut-treatment"
                      title="Cut Treatment"
                    >
                      Cut Treatment
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink
                      href="/article/womens-sports-injuries"
                      title="Q-Angle"
                    >
                      Q-Angle
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink href="/article/vo2-max" title="VO2-MAX">
                      VO2-MAX
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink
                      href="/article/taping-and-bracing"
                      title="Taping & Bracing"
                    >
                      Taping &amp; Bracing
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink
                      href="/article/for-women"
                      title="For Women"
                    >
                      For Women
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink
                      href="/article/tabata-protocol"
                      title="Tabata Protocol"
                    >
                      Tabata Protocol
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink
                      href="/article/lactate-threshold"
                      title="Lactate Threshold"
                    >
                      Lactate Threshold
                    </HoverPrefetchLink>
                  </li>
                </ul>
              </div>
              <div className="row mx-1">
                <ul>
                  <li className="linksHeading">
                    <HoverPrefetchLink href="/" title="LEGAL">
                      LEGAL
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink
                      href="/Privacy_Policy"
                      title="Privacy Policy"
                    >
                      Privacy Policy
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink
                      href="/Terms_of_use"
                      title="Terms of Use"
                    >
                      Terms of Use
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink
                      href="/Advertise_With_Us"
                      title="Advertise With Us"
                    >
                      Advertise With Us
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink
                      href="/Cookie_Policy"
                      title="Cookie Policy"
                    >
                      Cookie Policy
                    </HoverPrefetchLink>
                  </li>
                </ul>
              </div>
              <div className="clear" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
