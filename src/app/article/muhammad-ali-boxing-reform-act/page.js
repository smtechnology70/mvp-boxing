"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

import GLOBALS from "@/server/Globals";
import Loader from "@/components/Loader";

export default function AliAct() {
  const [loading, setLoading] = useState(false);
  const [pagedata, setPagedata] = useState("");

  useEffect(() => {
    setLoading(true);
    async function getData() {
      try {
        const res = await fetch(
          `${GLOBALS.API_BASE_URL}cmspage?page_id=partnership-inquiries`
        );
        if (!res.ok) throw new Error(`Status ${res.status}`);
        const json = await res.json();
        setPagedata(json.data.content);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="mvpBgContainer mvp_container" style={{ width: "100%" }}>
      <div
        className="news_articles_content"
        itemScope
        itemType="https://schema.org/Article"
        style={{ width: "100%" }}
      >
        <div className="left_content_area" style={{ margin: 0 }}>
          <h1 className="titles_article border_titles_article1">
            <span itemProp="name">
              Muhammad Ali Boxing Reform Act | MVP Boxing
            </span>
            <div className="socialInfo">
              <div className="left">
                mvpboxing&nbsp;|&nbsp;
                <i className="fa fa-clock-o" />
                &nbsp;May 17, 2018, 08:40PM
              </div>
              <div className="clear" />
            </div>
          </h1>

          {/* If you want to render CMS HTML: */}
          {/* <div dangerouslySetInnerHTML={{ __html: pagedata }} /> */}

          <div className="workout_content update-workout_content">
            <div id="accordion" className="accordion">
              {/* Section 0 */}
              <AccordionCard id="collapse0" heading="An Act" expanded={false}>
                <p>
                  To reform unfair and anticompetitive practices in the
                  professional boxing industry.
                </p>
                <p>
                  Be it enacted by the Senate and House of Representatives of
                  the United States of America in Congress assembled:
                </p>
              </AccordionCard>

              {/* Section 1 */}
              <AccordionCard
                id="collapse1"
                heading="SECTION 1 SHORT TITLE"
                expanded={false}
              >
                <p>
                  <strong>
                    This Act may be cited as the “Muhammad Ali Boxing Reform
                    Act”.
                  </strong>
                </p>
              </AccordionCard>

              {/* Section 2 */}
              <AccordionCard
                id="collapse2"
                heading="SECTION 2 FINDINGS"
                expanded={false}
              >
                <p>
                  <strong>The Congress makes the following findings:</strong>
                </p>
                <ol>
                  <li>Professional boxing differs from other major…</li>
                  <li>State officials are the proper regulators…</li>
                  <li>Promoters who engage in illegal…</li>
                  <li>The sanctioning organizations…</li>
                  <li>Open competition…</li>
                  <li>It is necessary and appropriate…</li>
                </ol>
              </AccordionCard>

              {/* Section 3 */}
              <AccordionCard
                id="collapse3"
                heading="SECTION 3 PURPOSES"
                expanded={false}
              >
                <p>
                  <strong>The purposes of this Act are:</strong>
                </p>
                <ol>
                  <li>To protect the rights and welfare…</li>
                  <li>To assist State boxing commissions…</li>
                  <li>To promote honorable competition…</li>
                </ol>
              </AccordionCard>

              {/* Section 4 */}
              <AccordionCard
                id="collapse4"
                heading="SECTION 4 PROTECTING BOXERS FROM EXPLOITATION"
                expanded={false}
              >
                <p>
                  <strong>
                    The Professional Boxing Safety Act of 1996… is amended:
                  </strong>
                </p>
                <ol>
                  <li>By re-designating sections 9–15…</li>
                  <li>By inserting after section 8 the following…</li>
                </ol>
              </AccordionCard>

              {/* Section 9 */}
              <AccordionCard
                id="collapse5"
                heading="SECTION 9 CONTRACT REQUIREMENTS"
                expanded={false}
              >
                <p>Within 2 years after enactment…</p>
              </AccordionCard>

              {/* Section 10 */}
              <AccordionCard
                id="collapse6"
                heading="SECTION 10 PROTECTION FROM COERCIVE CONTRACTS"
                expanded={false}
              >
                <p>
                  <strong>(a) GENERAL RULE</strong>
                </p>
                <ol>
                  <li>(A) A contract provision…</li>
                  <li>(B) A coercive provision…</li>
                </ol>
                <p>(II) This subsection…</p>
                <ol>
                  <li>PROMOTIONAL RIGHTS…</li>
                  <li>PROTECTION FROM COERCIVE…</li>
                </ol>
              </AccordionCard>

              {/* Section 11 */}
              <AccordionCard
                id="collapse7"
                heading="SECTION 11 SANCTIONING ORGANIZATIONS"
                expanded={false}
              >
                <p>(a) OBJECTIVE CRITERIA: Within 2 years…</p>
                <p>(b) APPEALS PROCESS: A sanctioning organization…</p>
                <p>(c) NOTIFICATION OF CHANGE IN RATING…</p>
                <p>(d) PUBLIC DISCLOSURE:</p>
                <ol>
                  <li>FEDERAL TRADE COMMISSION FILING…</li>
                  <li>FORMAT UPDATES…</li>
                  <li>FTC TO MAKE INFO AVAILABLE…</li>
                  <li>INTERNET ALTERNATIVE…</li>
                </ol>
              </AccordionCard>

              {/* Section 12 */}
              <AccordionCard
                id="collapse8"
                heading="SECTION 12 REQUIRED DISCLOSURES TO STATE BOXING COMMISSIONS BY SANCTIONING ORGANIZATIONS"
                expanded={false}
              >
                <ol>
                  <li>All charges, fees, and costs…</li>
                  <li>All payments, benefits…</li>
                  <li>Such additional information…</li>
                </ol>
              </AccordionCard>

              {/* Section 13 */}
              <AccordionCard
                id="collapse9"
                heading="SECTION 13 REQUIRED DISCLOSURES FOR PROMOTERS"
                expanded={false}
              >
                <p>(A) DISCLOSURES TO THE BOXING COMMISSIONS…</p>
                <ol>
                  <li>A copy of any agreement…</li>
                  <li>A statement under penalty…</li>
                  <li>All fees, charges, expenses…</li>
                </ol>
                <p>(B) DISCLOSURES TO THE BOXER:</p>
                <ol>
                  <li>The amounts of any compensation…</li>
                  <li>All fees, charges, expenses…</li>
                  <li>Any reduction in a boxer’s purse…</li>
                </ol>
                <p>(C) INFO TO STATE AG: …</p>
              </AccordionCard>

              {/* Section 14 */}
              <AccordionCard
                id="collapse10"
                heading="SECTION 14 REQUIRED DISCLOSURES FOR JUDGES AND REFEREES"
                expanded={false}
              >
                <p>
                  A judge or referee shall not be entitled… until it provides to
                  the boxing commission…
                </p>
              </AccordionCard>

              {/* Section 15 */}
              <AccordionCard
                id="collapse11"
                heading="SECTION 15 CONFIDENTIALITY"
                expanded={false}
              >
                <p>(A) IN GENERAL: Neither a boxing commission…</p>
                <p>(B) EFFECT OF CONTRARY STATE LAW: …</p>
              </AccordionCard>

              {/* Section 16 */}
              <AccordionCard
                id="collapse12"
                heading="SECTION 16 JUDGES AND REFEREES"
                expanded={false}
              >
                <p>
                  No person may arrange, promote… unless all referees and
                  judges…
                </p>
              </AccordionCard>

              {/* Section 5 (re-labeled 17) */}
              <AccordionCard
                id="collapse13"
                heading="SECTION 5 CONFLICT OF INTEREST"
                expanded={false}
              >
                <ol>
                  <li>In the first sentence…</li>
                  <li>By adding at the end…</li>
                </ol>
              </AccordionCard>

              {/* Section 6 */}
              <AccordionCard
                id="collapse14"
                heading="SECTION 6 ENFORCEMENT"
                expanded={false}
              >
                <p>Subsection (b) of section 18…</p>
                <ol>
                  <li>In paragraph (1)…</li>
                  <li>By re-designating paragraphs…</li>
                  <li>By inserting after paragraph (1)…</li>
                  <li>In paragraph (3)…</li>
                </ol>
              </AccordionCard>

              {/* Section 7 */}
              <AccordionCard
                id="collapse15"
                heading="SECTION 7 ADDITIONAL AMENDMENTS"
                expanded={false}
              >
                <ol>
                  <li>(A) DEFINITIONS: Section 2(a)…</li>
                  <li>(B) STATE BOXING COMMISSION PROCEDURES…</li>
                  <li>(C) RENEWAL PERIOD…</li>
                  <li>(D) REVIEW OF SUSPENSIONS…</li>
                  <li>(E) ALTERNATIVE SUPERVISION…</li>
                  <li>(F) HEALTH AND SAFETY DISCLOSURES…</li>
                </ol>
              </AccordionCard>
            </div>

            <p>
              Published by:&nbsp;
              <a
                href="https://mvpboxing.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>mvpboxing.com</strong>
              </a>
            </p>
          </div>

          <div className="page__links" style={{ marginBottom: 10 }}>
            <Link href="/contact" className="page__links__link btn feat-link">
              <strong>Contact Us</strong>
              <i className="fa fa-chevron-right" aria-hidden="true" />
            </Link>
          </div>
          <div className="content-separator">&nbsp;</div>
          <div className="socialInfo">
            <div className="text-center bottom-social-share">
              {/* … your social icons here … */}
            </div>
            <div className="clear" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable AccordionCard helper
function AccordionCard({ id, heading, children, expanded }) {
  const [open, setOpen] = React.useState(expanded);
  return (
    <div className="card mb-1">
      <button
        className={`text-left header${open ? "" : " collapsed"}`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={id}
        style={{
          border: "none",
          width: "100%",
          textAlign: "left",
          background: "transparent",
          padding: 0,
        }}
      >
        <div className="card-header">
          <h5 className="mb-0 question">
            <strong>{heading}</strong>
            <span className="right">
              <i
                className={`arrow fa ${
                  open ? "fa-arrow-down" : "fa-arrow-right"
                }`}
                aria-hidden="true"
              />
            </span>
          </h5>
        </div>
      </button>
      <div
        id={id}
        className={`collapse${open ? " show" : ""}`}
        aria-labelledby=""
        data-parent="#accordion"
      >
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
}
