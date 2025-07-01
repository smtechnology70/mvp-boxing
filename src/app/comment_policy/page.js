"use client";

import React, { useState, useEffect } from "react";
import GLOBALS from "@/server/Globals";

const createMarkup = (htmlString) => {
  return { __html: htmlString };
};

const CommentPolicy = (props) => {
  const [loading, setLoading] = useState(false);
  const [pagedata, setPagedata] = useState("");

  useEffect(() => {
    setLoading(true);
    async function getData() {
      let apiUrl = "cmspage?page_id=partnership-inquiries";
      const url = GLOBALS.API_BASE_URL + apiUrl;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        setPagedata(json.data.content);
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
    <div
      className="mvpBgContainer mvp_container"
      id="newsMainContents"
      style={{ width: "100%" }}
    >
      <div className="mvpBgContainer mvp_container" id="newsMainContent">
        {/* <div class="ad d-none d-md-block">
	<input type="hidden" name="IL_IN_ARTICLE">
</div> */}
        <div className="article_area_content">
          <div className="titles_article border_titles_article1">
            MVP BOXING COMMUNITY GUIDELINES
            <div className="socialInfo">
              <div className="left">
                mvpboxing&nbsp;|&nbsp;
                <i className="fa fa-clock-o" aria-hidden="true" />
                &nbsp;June 08, 2019
              </div>
            </div>
            <div className="clear" />
          </div>
          <div
            className="workout_content borderNone text-left size-n-col1 margin-bottom-0"
            style={{ textAlign: "justify" }}
          >
            <div className="mainContentBlock section sectionMain">
              <div className="baseHtml">
                <p>
                  We’re proud to host and foster discussion about boxing and
                  mixed martial arts and related topics from some of the
                  smartest, best-informed and insightful die-hard fight fans
                  worldwide. In order to make your experience here as enjoyable
                  as possible, here are some tips, rules and guidelines.
                </p>
                <h3 className="textHeading">
                  Tips
                  <br />
                  {`Or, "Hey, why isn't my comment showing up?!"`}
                </h3>
                <ul>
                  <li>
                    <p>
                      <strong>Please consider opening an account</strong> using
                      our social login options. Until you do, you {`won't`} be
                      able to join the discussions or like/dislike a comment or
                      reply a comment or even flag a comment as inappropraite.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>
                        Posts with hyperlinks in them do not show up right away.
                      </strong>{" "}
                      They go into “pending” status until a moderator approves
                      them. That protects us and you from phishing sites,
                      malware and porn bombs. We will approve non-harmful links
                      once we get to them, but if you want your post to show up
                      right away, consider “breaking” the link (e.g. typing
                      “youtube dot com” instead of the actual URL).
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>The flip side of that:</strong> If you copy and
                      paste someone’s broken link into your browser, you are
                      doing so at your own risk.
                    </p>
                  </li>
                </ul>
                <h3 className="textHeading">Guidelines</h3>
                <ul>
                  <li>
                    <p>
                      <strong>Make the place and experience better.</strong>{" "}
                      Bring your knowledge, bring your expertise, bring your
                      opinions and bring your passion. Don’t be the kind of
                      community member who only comes around to hate on
                      everything. Don’t be a one-note poster who only talks
                      about one topic -- even if that one topic is{" "}
                      <strong style={{ fontSize: "1em", color: "#d20a0a" }}>
                        ALI
                      </strong>
                      . Flag spam when you see it. Commenting about typos or
                      coding snafus in articles is human; using the contact form
                      to tell us about them directly is divine. (Moderators and
                      editorial staff are not the same people.)
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Don’t be an asshole.</strong> We are fairly
                      lenient where this is concerned. Debate is the soul of
                      boxing and MMA conversation, we’re all passionate here and
                      we do not filter for strong language, but if you’ve
                      stopped addressing the argument and started attacking the
                      person, we’re within our rights to ask you to stop and, if
                      that doesn’t work, make you stop.
                    </p>
                  </li>
                </ul>
                <h3 className="textHeading">Rules</h3>
                <ul>
                  <li>
                    <p>
                      <strong>
                        Do not flag a post as spam unless it really is spam.
                      </strong>{" "}
                      Flagging posts as spam just because you don’t like what
                      someone has to say is a complete punk move. You get one
                      warning, then you get to go make more work for the
                      moderators of some other site.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>stuff:</strong> This should fall under the
                      umbrella of “don’t be an asshole,” but to be clear, use of
                      racial, ethnic, religious, homophobic or transphobic slurs
                      is not allowed. Moderators handle infractions on a
                      case-by-case basis, but please understand that you are not
                      owed a warning.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="content-separator">&nbsp;</div>
              {/* ends (.content-separator) */}
              <div className="socialInfo">
                {/* <div class="left back-to-info">
							<a href="javascript:void(0);" id="goTop" title="Back To Top"><i class="fa fa-arrow-circle-up" aria-hidden="true"></i></a>
						</div> */}
                <div className="text-center social-sharing-info bottom-social-share">
                  <p className="social-share-block">
                    <i
                      className="share-icon fas fa-share-alt"
                      aria-hidden="true"
                    />
                    {/* AddToAny BEGIN */}
                    <span className="social-icons a2a_kit a2a_kit_size_32 a2a_default_style">
                      <a
                        className="a2a_button_facebook"
                        href="#"
                        title="Facebook"
                      />
                      <a
                        className="a2a_button_twitter"
                        href="#"
                        title="Twitter"
                      />
                      <a
                        className="a2a_button_whatsapp"
                        href="#"
                        title="WhatsApp"
                      />
                      <a
                        className="a2a_button_facebook_messenger"
                        href="#"
                        title="Facebook Messenger"
                      />
                      <a
                        className="a2a_button_reddit"
                        href="#"
                        title="Reddit"
                      />
                      <a
                        className="a2a_button_pinterest"
                        href="#"
                        title="Pinterest"
                      />
                      <a className="a2a_button_email" href="#" title="Email" />
                    </span>
                    {/* AddToAny END */}{" "}
                  </p>
                </div>
              </div>
              {/* ends (.social-sharing-info) */}
              <div className="clear" />
            </div>
            {/* ends (.socialInfo) */}
          </div>
        </div>
        {/* ends (.workout_content) */}
        {/* <div class="ad">
  <input type="hidden" name="IL_IN_ARTICLE">
    </div> */}
      </div>
    </div>
  );
};

export default CommentPolicy;
