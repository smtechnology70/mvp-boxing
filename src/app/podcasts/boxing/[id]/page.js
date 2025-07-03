"use client";

import { useEffect, useState } from "react";
import GLOBALS from "@/server/Globals";
import $ from "jquery";
import { useParams } from "next/navigation";
import Link from "next/link";
import Loader from "@/components/Loader";

const PodcastBoxing = (props) => {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [podcastboxing, setPodcastboxing] = useState([]);
  const [currentPodcast, setCurrentPodcast] = useState([]);

  let currentPage = 1;
  let isPlaying = false;

  useEffect(() => {
    setLoading(true);
    async function getData() {
      let apiUrl = "podcasts?boxing_type=boxing";
      const url = GLOBALS.API_BASE_URL + apiUrl;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        setPodcastboxing(json.data);
        let podcats = json.data;
        podcats.map((item, i) => {
          if (item.id == id) {
            setCurrentPodcast(item);
            setTimeout(function () {
              $("#jp_audio_0")[0].play();
              $("#jp_container_1").addClass("jp-state-playing");
              isPlaying = true;
            }, 500);
          }
        });
        setLoading(false);
      } catch (error) {
        console.error(error.message);
      }

      $(".jp-play").on("click", function () {
        if (!isPlaying) {
          $("#jp_audio_0")[0].play();
          $("#jp_container_1").addClass("jp-state-playing");
          isPlaying = true;
        } else {
          $("#jp_audio_0")[0].pause();
          $("#jp_audio_0")[0].currentTime = 0;
          $("#jp_container_1").removeClass("jp-state-playing");
          isPlaying = false;
        }
      });

      $(".jp-stop").on("click", function () {
        $("#jp_audio_0")[0].pause();
        $("#jp_audio_0")[0].currentTime = 0;
        $("#jp_container_1").removeClass("jp-state-playing");
        isPlaying = false;
      });

      var audio = $("#jp_audio_0")[0];

      $(document).ready(function () {
        var audio = $("#jp_audio_0")[0]; // Get the HTML5 audio element

        audio.addEventListener("loadedmetadata", function () {
          var duration = audio.duration; // Duration in seconds
          var currentTime = 0;
          // Calculate remaining time
          var remainingTime = duration - currentTime;

          // Format the times for display (optional)
          var currentMinutes = Math.floor(currentTime / 60);
          var currentSeconds = Math.floor(currentTime - currentMinutes * 60);
          var remainingMinutes = Math.floor(remainingTime / 60);
          var remainingSeconds = Math.floor(
            remainingTime - remainingMinutes * 60
          );

          if (currentSeconds < 10) {
            currentSeconds = "0" + currentSeconds;
          }
          if (remainingSeconds < 10) {
            remainingSeconds = "0" + remainingSeconds;
          }

          // Display the times (example)
          $("#current_time").text(currentMinutes + ":" + currentSeconds);
          $("#remaining_time").text(
            "-" + remainingMinutes + ":" + remainingSeconds
          );
        });

        audio.addEventListener("timeupdate", function () {
          var currentTime = audio.currentTime;
          var duration = audio.duration;

          // Calculate remaining time
          var remainingTime = duration - currentTime;

          // Format the times for display (optional)
          var currentMinutes = Math.floor(currentTime / 60);
          var currentSeconds = Math.floor(currentTime - currentMinutes * 60);
          var remainingMinutes = Math.floor(remainingTime / 60);
          var remainingSeconds = Math.floor(
            remainingTime - remainingMinutes * 60
          );

          if (currentSeconds < 10) {
            currentSeconds = "0" + currentSeconds;
          }
          if (remainingSeconds < 10) {
            remainingSeconds = "0" + remainingSeconds;
          }

          // Display the times (example)
          $("#current_time").text(currentMinutes + ":" + currentSeconds);
          $("#remaining_time").text(
            "-" + remainingMinutes + ":" + remainingSeconds
          );
        });
      });
    }
    getData();
    return () => {
      // Cleanup logic here
    };
  }, [id]);

  return (
    <div classname="mvpBgContainer mvp_container" id="newsMainContents">
      <div className="content_section">
        <div id="wrapper" className="video-wrapper podcasts">
          <div className="videos-block">
            <div className="videos-title">PODCASTS</div>
            <div className="video-main">
              <h1 className="video-title mb-4">
                {currentPodcast.title}
                <br />
                <span
                  className="fnt12 socialInfo left pad10"
                  style={{ color: "#fff" }}
                >
                  <i className="fa fa-clock-o" aria-hidden="true" />
                  11-03-2021
                </span>
              </h1>
              <div className="video-desc">
                <link
                  href="/assets/plugins/jPlayer-2.9.2/dist/skin/blue.monday/css/jplayer.blue.monday.min.css"
                  rel="stylesheet"
                  type="text/css"
                />
                <div
                  id="jquery_jplayer_1"
                  className="jp-jplayer"
                  style={{ width: 0, height: 0 }}
                >
                  <img
                    id="jp_poster_0"
                    style={{ width: 0, height: 0, display: "none" }}
                  />
                  <audio
                    id="jp_audio_0"
                    preload="metadata"
                    src={currentPodcast.podcast_url}
                    title={currentPodcast.title}
                  />
                </div>
                <div
                  id="jp_container_1"
                  className="jp-audio mw-100"
                  role="application"
                  aria-label="media player"
                >
                  <div className="jp-type-single">
                    <div className="jp-gui jp-interface">
                      <div className="jp-controls">
                        <button
                          className="jp-play"
                          role="button"
                          tabIndex={0}
                          fdprocessedid="vh2fja"
                        >
                          play
                        </button>
                        <button
                          className="jp-stop"
                          role="button"
                          tabIndex={0}
                          fdprocessedid="3pq9wy"
                        >
                          stop
                        </button>
                      </div>
                      <div className="jp-progress">
                        <div className="jp-seek-bar" style={{ width: "100%" }}>
                          <div
                            className="jp-play-bar"
                            style={{ width: "0%" }}
                          />
                        </div>
                      </div>
                      <div className="jp-volume-controls">
                        <button
                          className="jp-mute"
                          role="button"
                          tabIndex={0}
                          fdprocessedid="inafaj"
                        >
                          mute
                        </button>
                        <button
                          className="jp-volume-max"
                          role="button"
                          tabIndex={0}
                          fdprocessedid="u3mroi"
                        >
                          max volume
                        </button>
                        <div className="jp-volume-bar">
                          <div
                            className="jp-volume-bar-value"
                            style={{ width: "80%" }}
                          />
                        </div>
                      </div>
                      <div className="jp-time-holder">
                        <div
                          className="jp-current-time"
                          id="current_time"
                          role="timer"
                          aria-label="time"
                        >
                          00:00
                        </div>
                        <div
                          className="jp-duration"
                          id="remaining_time"
                          role="timer"
                          aria-label="duration"
                        >
                          -00:00
                        </div>
                        <div className="jp-toggles">
                          <button
                            className="jp-repeat"
                            role="button"
                            tabIndex={0}
                            fdprocessedid="wkp1jq"
                          >
                            repeat
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="jp-details">
                      <div className="jp-title" aria-label="title">
                        {currentPodcast.title}
                      </div>
                    </div>
                    <div className="jp-no-solution" style={{ display: "none" }}>
                      <span>Update Required</span>
                      To play the media you will need to either update your
                      browser to a recent version or update your{" "}
                      <a
                        href="http://get.adobe.com/flashplayer/"
                        target="_blank"
                      >
                        Flash plugin
                      </a>
                      .
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="videos-alt podcast">
              <Loader loading={loading} />
              <div
                className="videos-title"
                style={{ textTransform: "unset !important" }}
              ></div>
              <div className="arrows">
                <Link href="/podcasts/boxing/317">
                  <i
                    className="fa prev-arrow fa-caret-square-o-left"
                    aria-hidden="true"
                  />
                </Link>
                <Link href="/podcasts/mma/285">
                  <i
                    className="fa prev-arrow fa-caret-square-o-right"
                    aria-hidden="true"
                  />
                </Link>
              </div>
              <Loader loading={loading} />
              <div className="text-center video-block">
                <ul className="row mx-0 d-flex justify-content-center">
                  {podcastboxing.map((item, i) => {
                    return (
                      <li key={i} className="col-12  px-2 item">
                        <Link href={item.url} title={item.title}>
                          <div className="video-title">
                            <span className="numbers">{i + 1}</span>{" "}
                            {item.title}
                            <br />
                            <span className="video-span">
                              <i className="fa fa-clock-o" aria-hidden="true" />
                              {item.date}
                            </span>
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="slick-dots">
                {/* <a href="/podcasts/all-access"><i
                      class="fa fa-circle "></i></a> */}
                <Link href="/podcasts/boxing/317">
                  <i className="fa fa-circle active" aria-hidden="true" />
                </Link>
                <Link href="/podcasts/mma/285">
                  <i className="fa fa-circle  " aria-hidden="true" />
                </Link>
              </div>
            </div>
            {/* ends (.boxing_training_pics) */}
            <div className="comments-block" style={{ marginTop: 5 }}>
              {/* <div class="mvp-comment-box"></div> */}
              {/* ends (.mvp-comment-box) */}
              <div
                id="comment-policy"
                className="comment-policy publisher-anchor-color  "
              >
                <div className="content">
                  <h2 className="title">
                    MVPBOXING.COM Comment Policy
                    <i aria-hidden="true" className="fa fa-5x fa-comments-o " />
                  </h2>
                  <p>{"Hey, why isn't my comment displaying?!"}</p>
                  <p>
                    Please read our{" "}
                    <Link
                      href="/comment_policy"
                      target="_blank"
                      className="policy-link"
                    >
                      Comment Policy
                    </Link>{" "}
                    before commenting.
                  </p>
                </div>
              </div>
              <Loader loading={loading} />
              <div className="comments">
                <div className="main-title w-100 row mx-0">
                  <div className="col-7 pl-1">
                    <i className="fa fa-comments-o" aria-hidden="true" />{" "}
                    <span id="total_comments">0</span> <span>Comments</span>
                  </div>
                  <div id="share-block" className="col-5 text-right pr-1">
                    <i className="fa fa-share-alt" aria-hidden="true" /> Share
                  </div>
                </div>
                <div className="comment-block">
                  <div
                    className="social-share-block"
                    style={{ display: "none" }}
                  >
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
                  </div>
                  <div
                    className="mvp-comment-box comments-container jquery-comments responsive rendered"
                    id="comments-container"
                    style={{
                      border: "1px solid #cccccc",
                      backgroundColor: "#ffffff",
                      minHeight: 120,
                      margin: 15,
                      borderRadius: "3px 3px 3px 3px",
                      fontWeight: "bold",
                      fontStyle: "italic",
                      paddingTop: 29,
                    }}
                  >
                    <div className="commenting-field main">
                      <i
                        className="fa fa-user profile-picture round"
                        aria-hidden="true"
                      />
                      <div className="textarea-wrapper">
                        <span
                          className="close inline-button"
                          style={{ display: "none" }}
                        >
                          <span className="left" />
                          <span className="right" />
                        </span>
                        <div
                          className="textarea"
                          data-placeholder="Join the Discussion..."
                          contentEditable="true"
                          style={{ height: "5.1em" }}
                        />
                        <div
                          className="control-row"
                          style={{ display: "none" }}
                        >
                          <div className=" social-icons social-login-block text-uppercase w-100">
                            Sign in to post a comment using&nbsp;&nbsp;&nbsp;
                            <div className="social-icons-block">
                              <span
                                className="fb-auth fb-login-button"
                                scope="public_profile,email"
                                onclick="fbLogin();"
                                title="Facebook"
                                data-width
                                data-size
                                data-button-type="login_with"
                                data-auto-logout-link="false"
                                data-use-continue-as="false"
                              >
                                <i
                                  className="fab fa-facebook-f icon"
                                  aria-hidden="true"
                                />
                              </span>
                              <span
                                className="google-auth"
                                onclick="window.open('/auth/google','','width: 50vw; height: 50vh; ');"
                                title="Google"
                              >
                                <i
                                  className="fab fa-google icon"
                                  aria-hidden="true"
                                />
                              </span>
                              <span
                                className="twitter-auth"
                                onclick="window.open('/auth/twitter','','width: 50vw; height: 50vh; ');"
                                title="twitter"
                              >
                                <i
                                  className="fab fa-twitter icon"
                                  aria-hidden="true"
                                />
                              </span>
                            </div>
                          </div>
                          <div className=" guest-login-block w-100">
                            <span className="text-uppercase">
                              or Comment as a guest
                            </span>{" "}
                            &nbsp;&nbsp;&nbsp;
                            <br />
                            <div className="row mx-0">
                              <div className="form-control col-md-4 col-12 mb-1">
                                <input
                                  type="text"
                                  className="form-input name"
                                  name="Name"
                                  placeholder="Name"
                                />
                                <br />
                                <label className="name-error text-danger d-none">
                                  Please provide Name
                                </label>
                              </div>
                            </div>
                            <div className="row mx-0">
                              <div className="form-control col-md-4 col-12 mb-1">
                                <input
                                  type="email"
                                  className="form-input email"
                                  name="emailaddress"
                                  placeholder="Email (not displayed publicly)"
                                />
                                <label className="email-error text-danger d-none">
                                  Please provide Email Address, it would not be
                                  shown displayed publicly.
                                </label>
                              </div>
                            </div>
                          </div>
                          <span
                            className="send save highlight-background"
                            disabled="disabled"
                          >
                            Comment
                          </span>
                        </div>
                      </div>
                    </div>
                    <ul className="navigation nav-right">
                      <div className="navigation-wrapper">
                        <li
                          data-sort-key="newest"
                          data-container-name="comments"
                        >
                          New
                        </li>
                        <li
                          data-sort-key="oldest"
                          data-container-name="comments"
                        >
                          Oldest
                        </li>
                        <li
                          data-sort-key="popularity"
                          data-container-name="comments"
                          className="active"
                        >
                          Best
                        </li>
                        <li
                          data-sort-key="discussed"
                          data-container-name="comments"
                        >
                          Most Discussed
                        </li>
                        <li
                          data-sort-key="recommend"
                          data-container-name="comments"
                        >
                          Recommended
                        </li>
                      </div>
                      <div className="navigation-wrapper responsive">
                        <p>Sort by </p>
                        <li className="title active">
                          <header>Best</header>
                        </li>
                        <ul className="dropdown">
                          <li
                            data-sort-key="newest"
                            data-container-name="comments"
                          >
                            New
                          </li>
                          <li
                            data-sort-key="oldest"
                            data-container-name="comments"
                          >
                            Oldest
                          </li>
                          <li
                            data-sort-key="popularity"
                            data-container-name="comments"
                            className="active"
                          >
                            Best
                          </li>
                          <li
                            data-sort-key="discussed"
                            data-container-name="comments"
                          >
                            Most Discussed
                          </li>
                          <li
                            data-sort-key="recommend"
                            data-container-name="comments"
                          >
                            Recommended
                          </li>
                        </ul>
                        <p />
                      </div>
                    </ul>
                    <div className="data-container" data-container="comments">
                      <ul id="comment-list" className="main" />
                    </div>
                  </div>
                  {/* ends (.content-separator2) */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};

export default PodcastBoxing;
