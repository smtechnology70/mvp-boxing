"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams, useParams } from "next/navigation";
import $ from "jquery";

const AllTraining = (props) => {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [allvideo, setAllvideo] = useState([]);
  const [videosrc, setVideosrc] = useState([]);
  const searchParams = useSearchParams();

  let videocnt = 0;

  useEffect(() => {
    setLoading(true);
    async function getData() {
      let apiUrl = "videomodel?module_type=all-access&id=" + id;
      const url = GLOBALS.API_BASE_URL + apiUrl;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        setAllvideo(json.data);
        var iframe = document.getElementById("iframe_video_data");
        iframe.src = json.video_url + "?autoplay=1";
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

  const changeVideoPlay = () => {
    let videoId = searchParams.get("id");
    allvideo.map(function (item, i) {
      if (item.id == videoId) {
        setVideosrc(item.youtubevideolink);
        var iframe = document.getElementById("iframe_video_data");
        iframe.src = item.youtubevideolink + "?autoplay=1";
      }
    });
    $("html, body").animate({ scrollTop: 0 }, "slow");
  };

  return (
    <div className="mvpBgContainer mvp_container" id="newsMainContents">
      <div className="content_section">
        <div id="wrapper" className="video-wrapper">
          <div className="videos-block">
            <div className="videos-title">ALL ACCESS VIDEOS</div>
            <div className="video-main">
              <div className="videoContainer">
                <ul id="box1" className="box_images d-md-inline-block d-none">
                  {allvideo.map((item, j) => {
                    {
                      videocnt++;
                      if (videocnt > 5 && videocnt < 11) {
                        return (
                          <li>
                            <Link
                              to={"/" + item.alias}
                              title={item.title}
                              onClick={changeVideoPlay}
                            >
                              <div className="training_pic">
                                <i className="fa fa-play-circle" />
                                <img
                                  className="lazyload "
                                  alt={item.title}
                                  data-src={item.image}
                                />
                              </div>
                            </Link>
                          </li>
                        );
                      }
                    }
                  })}
                </ul>
                <iframe
                  id="iframe_video_data"
                  className="lazyload"
                  data-src={videosrc}
                  webkitallowfullscreen
                  mozallowfullscreen
                  width={560}
                  allowFullScreen
                  frameBorder={0}
                  allow="autoplay"
                />
              </div>
              <h1 className="video-title">All Video</h1>
              <div className="video-desc"></div>
            </div>
            <div className="videos-alt">
              <div
                className="videos-title"
                style={{ textTransform: "unset !important" }}
              >
                ALL ACCESS{" "}
              </div>
              <div className="arrows">
                <Link to="/videos/boxing-training/art-of-the-jab">
                  <i className="fa prev-arrow fa-caret-square-o-left" />
                </Link>
                <Link to="/videos/mma-training/5-stance-basics-mma-fighting">
                  <i className="fa prev-arrow fa-caret-square-o-right" />
                </Link>
              </div>
              <div
                className="text-center video-block"
                itemScope
                itemType="https://schema.org/ItemList"
              >
                <ul className="box_images row mx-0 d-flex justify-content-center">
                  {allvideo.map((item, i) => {
                    return (
                      <li
                        key={i}
                        className="col-6  px-2 item"
                        itemProp="itemListElement"
                        itemScope
                        itemType="https://schema.org/VideoObject"
                      >
                        <Link
                          itemProp="url"
                          to={"/" + item.alias}
                          title={item.title}
                          onClick={changeVideoPlay}
                        >
                          <meta itemProp="uploadDate" content={item.title} />
                          <meta itemProp="description" content={item.title} />
                          <meta itemProp="thumbnailUrl" content={item.image} />
                          <div className="training_pic">
                            <i className="fa fa-play-circle" />
                            <img
                              className="img-fluid lazyload"
                              itemProp="thumbnail"
                              alt={item.title}
                              data-src={item.image}
                            />
                          </div>
                          <div className="video-title">
                            <span itemProp="name">{item.title}</span>
                            <br />
                            <br />
                            <span className="video-span">View &gt;&gt;</span>
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="slick-dots">
                <Link to="/videos/all-access/FIGHT-HIGHLIGHTS-Josh-Warrington-vs-Luis-Alberto-Lopez">
                  <i className="fa fa-circle " />
                </Link>
                <Link to="/videos/boxing-training/art-of-the-jab">
                  <i className="fa fa-circle active" />
                </Link>
                <Link to="/videos/mma-training/5-stance-basics-mma-fighting">
                  <i className="fa fa-circle  " />
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
                    <a
                      href="/comment_policy"
                      target="_blank"
                      className="policy-link"
                    >
                      Comment Policy
                    </a>{" "}
                    before commenting.
                  </p>
                </div>
              </div>
              <div className="comments">
                <div className="main-title w-100 row mx-0">
                  <div className="col-7 pl-1">
                    <i className="fa fa-comments-o" />{" "}
                    <span id="total_comments">0</span> <span>Comments</span>
                  </div>
                  <div id="share-block" className="col-5 text-right pr-1">
                    <i className="fa fa-share-alt" /> Share
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
                    {/* AddToAny END */}
                  </div>
                  <div
                    className="mvp-comment-box comments-container"
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
                    MVPBoxing Commenting <br />
                    coming soon.!
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

export default AllTraining;
