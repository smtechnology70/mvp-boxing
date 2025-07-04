import React from "react";
import HoverPrefetchLink from "@/components/HoverPrefetchLink";
import BoxingNews from "@/components/LandingPage/Boxing_news";
import MmaNews from "@/components/LandingPage/Mma_news";
import Podcast from "@/components/LandingPage/Podcast";
import BoxingTraining from "@/components/LandingPage/Boxing_training";
import BoxingTrainingMma from "@/components/LandingPage/Boxing_training_mma";
import SidebarBottom from "@/components/LandingPage/SidebarBottom";
import SidebarBottomMma from "@/components/LandingPage/SidebarBottomMma";
import Sliders from "@/components/LandingPage/Sliders";

export default function Home() {
  return (
    <div className="mvpBgContainer mvp_container" id="newsMainContent">
      <div className="d-md-none d-block" id="mobile-device">
        <div className="container-fluid nopadding" style={{ padding: 1 }}>
          <section className="headlines">
            <Sliders />
          </section>
          <section className="bgwhite" id="boxing-news">
            <BoxingNews />
          </section>
          <section className="bgwhite" id="mma-news">
            <MmaNews />
            {/* <footer class="bg-button">        <div class="row nomargin">          <div class="col-12 nopadding">            <div class="text-right">              <a href="https://www.mvpboxing.com/news-mma" class="btn btn-grey vm">View More</a>            </div>          </div>        </div>      </footer> */}
          </section>

          <Podcast />

          {/* <section class="bgwhite" id="training-videos">    <header>      <div class="header-text"><a href="javascript:void(0);">BOXING & MMA TRAINING</a>        <a class=" btn btn-book p-0 px-1" href="https://mvp-boxing.square.site/">Book</a>      </div>    </header>    <div class="row nomargin bg-grey0">                  <div class="col-sm-12 mt15 flex-col nopadding">              <i id="menuIcon" class="ml10 fa fa-chevron-right chevron-icon"></i>              <div class="clear-left mr15">                <p class="box-image"><a href="https://www.mvpboxing.com/videos/boxing-training/Manny-Massons-Boxing-Training-for-MMA-1"><img class="img-fluid lazyload" data-src="https://www.mvpboxing.com/assets/menusImg/z257g7b6cbe790ce987998875d5ee8b257.jpg" height="100" width="100"></a></p>                <a class="list-item caption text-justify" href="https://www.mvpboxing.com/videos/boxing-training/Manny-Massons-Boxing-Training-for-MMA-1">WALKING DOWN OPPONENT</a>              </div>            </div>                  <div class="col-sm-12 mt15 flex-col nopadding">              <i id="menuIcon" class="ml10 fa fa-chevron-right chevron-icon"></i>              <div class="clear-left mr15">                <p class="box-image"><a href="https://www.mvpboxing.com/videos/boxing-training/Manny-Massons-Boxing-Training-for-MMA-2"><img class="img-fluid lazyload" data-src="https://www.mvpboxing.com/assets/menusImg/z258g7b6cbe790ce987998875d5ee8b258.jpg" height="100" width="100"></a></p>                <a class="list-item caption text-justify" href="https://www.mvpboxing.com/videos/boxing-training/Manny-Massons-Boxing-Training-for-MMA-2">BOXING FOR MMA</a>              </div>            </div>                  <div class="col-sm-12 mt15 flex-col nopadding">              <i id="menuIcon" class="ml10 fa fa-chevron-right chevron-icon"></i>              <div class="clear-left mr15">                <p class="box-image"><a href="https://www.mvpboxing.com/videos/boxing-training/Manny-Massons-Boxing-Training-for-MMA-4"><img class="img-fluid lazyload" data-src="https://www.mvpboxing.com/assets/menusImg/z260g7b6cbe790ce987998875d5ee8b260.jpg" height="100" width="100"></a></p>                <a class="list-item caption text-justify" href="https://www.mvpboxing.com/videos/boxing-training/Manny-Massons-Boxing-Training-for-MMA-4">COUNTER PUNCHING</a>              </div>            </div>                  <div class="col-sm-12 mt15 flex-col nopadding">              <i id="menuIcon" class="ml10 fa fa-chevron-right chevron-icon"></i>              <div class="clear-left mr15">                <p class="box-image"><a href="https://www.mvpboxing.com/videos/boxing-training/Manny-Massons-Boxing-Training-for-MMA-5"><img class="img-fluid lazyload" data-src="https://www.mvpboxing.com/assets/menusImg/z261g7b6cbe790ce987998875d5ee8b261.jpg" height="100" width="100"></a></p>                <a class="list-item caption text-justify" href="https://www.mvpboxing.com/videos/boxing-training/Manny-Massons-Boxing-Training-for-MMA-5">STIFF ARM</a>              </div>            </div>                  <div class="col-sm-12 mt15 flex-col nopadding">              <i id="menuIcon" class="ml10 fa fa-chevron-right chevron-icon"></i>              <div class="clear-left mr15">                <p class="box-image"><a href="https://www.mvpboxing.com/videos/boxing-training/Manny-Massons-Boxing-Training-for-MMA-16"><img class="img-fluid lazyload" data-src="https://www.mvpboxing.com/assets/menusImg/z272g7b6cbe790ce987998875d5ee8b272.jpg" height="100" width="100"></a></p>                <a class="list-item caption text-justify" href="https://www.mvpboxing.com/videos/boxing-training/Manny-Massons-Boxing-Training-for-MMA-16">DYNAMIC SPRINT DRILL</a>              </div>            </div>          </div>    <!-- <footer class="bg-button">      <div class="row nomargin">        <div class="col-12 nopadding">          <div class="text-right">            <a href="https://www.mvpboxing.com/videos" class="btn btn-grey videos-btn vm">View More</a>          </div>        </div>      </div>    </footer>   </section>*/}
          <div className="d-md-none d-block" id="mobile-device">
            <div className="container-fluid nopadding" style={{ padding: 1 }}>
              <section className="bgwhite" id="boxing-news">
                <div className="row nomargin bg-grey0 news_data">
                  <div className="main_contend">
                    <BoxingTraining />
                    <BoxingTrainingMma />
                  </div>
                  {/* <footer class="bg-button">            <div class="row nomargin">              <div class="col-12 nopadding">                <div class="text-right">                  <a href="https://www.mvpboxing.com/news-boxing" class="btn btn-grey vm">View More</a>                </div>              </div>            </div>          </footer> */}
                </div>
              </section>
            </div>
          </div>
          <div className="d-none d-md-block" id="desktop-device">
            <div className="container-fluid nopadding" style={{ padding: 1 }}>
              <section className="bgwhite" id="boxing-news">
                <div className="main_contend">
                  <div className="DYBOXING_TRAINING">
                    <h3 className="DYBOXING_TRAINING_text">
                      DYNAMIC BOXING TRAINING
                    </h3>
                    <div className="DYBOXING_TRAINING_contend1">
                      <div className="videos1">
                        {" "}
                        <img
                          src="https://www.mvpboxing.com//uploads/training/1741207552img2.jpg"
                          className="videos1img"
                        />{" "}
                        <a href="Manny-Massons-Boxing-Training-for-MMA-15.html">
                          {" "}
                          <img
                            src="https://www.mvpboxing.com//assets/img/play.png"
                            className="play_icon"
                          />{" "}
                        </a>
                        <div className="videos_text">
                          <div className="time">
                            <p className="time_text">00:18</p>
                          </div>
                          <p className="video_text">Videos</p>
                          <p className="Fighting_off">Defensive Fighting</p>
                        </div>
                      </div>
                      <div className="videos1">
                        {" "}
                        <img
                          src="https://www.mvpboxing.com//uploads/training/1741425755img1.jpg"
                          className="videos1img"
                        />{" "}
                        <a href="Manny-Massons-Boxing-Training-for-MMA-15.html">
                          {" "}
                          <img
                            src="https://www.mvpboxing.com//assets/img/play.png"
                            className="play_icon"
                          />{" "}
                        </a>
                        <div className="videos_text">
                          <div className="time">
                            <p className="time_text">00:20</p>
                          </div>
                          <p className="video_text">Videos</p>
                          <p className="Fighting_off">Fighting Off The Ropes</p>
                        </div>
                      </div>
                      <div className="videos1">
                        {" "}
                        <img
                          src="https://www.mvpboxing.com//uploads/training/1741207782img3.jpg"
                          className="videos1img"
                        />{" "}
                        <a href="Manny-Massons-Boxing-Training-for-MMA-15.html">
                          {" "}
                          <img
                            src="https://www.mvpboxing.com//assets/img/play.png"
                            className="play_icon"
                          />{" "}
                        </a>
                        <div className="videos_text">
                          <div className="time">
                            <p className="time_text">00:21</p>
                          </div>
                          <p className="video_text">Videos</p>
                          <p className="Fighting_off">
                            Applying Intelligent Pressure
                          </p>
                        </div>
                      </div>
                      <div className="videos1">
                        {" "}
                        <img
                          src="https://www.mvpboxing.com//uploads/training/1741208086img7.jpg"
                          className="videos1img"
                        />{" "}
                        <a href="Manny-Massons-Boxing-Training-for-MMA-15.html">
                          {" "}
                          <img
                            src="https://www.mvpboxing.com//assets/img/play.png"
                            className="play_icon"
                          />{" "}
                        </a>
                        <div className="videos_text">
                          <div className="time">
                            <p className="time_text">04:33</p>
                          </div>
                          <p className="video_text">Videos</p>
                          <p className="Fighting_off">
                            Technical Boxing Training
                          </p>
                        </div>
                      </div>
                      <div className="videos1">
                        {" "}
                        <img
                          src="https://www.mvpboxing.com//uploads/training/1741532567img4.jpg"
                          className="videos1img"
                        />{" "}
                        <a href="Manny-Massons-Boxing-Training-for-MMA-15.html">
                          {" "}
                          <img
                            src="https://www.mvpboxing.com//assets/img/play.png"
                            className="play_icon"
                          />{" "}
                        </a>
                        <div className="videos_text">
                          <div className="time">
                            <p className="time_text">00:12</p>
                          </div>
                          <p className="video_text">Videos</p>
                          <p className="Fighting_off">Dynamic Sprint Drill</p>
                        </div>
                      </div>
                      <div className="videos1">
                        {" "}
                        <img
                          src="https://www.mvpboxing.com//uploads/training/1741208320img8.jpg"
                          className="videos1img"
                        />{" "}
                        <a href="Manny-Massons-Boxing-Training-for-MMA-15.html">
                          {" "}
                          <img
                            src="https://www.mvpboxing.com//assets/img/play.png"
                            className="play_icon"
                          />{" "}
                        </a>
                        <div className="videos_text">
                          <div className="time">
                            <p className="time_text">00:28</p>
                          </div>
                          <p className="video_text">Videos</p>
                          <p className="Fighting_off">
                            Dynamic Boxing Training
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="DYBOXING_TRAINING_contend2" />
                  </div>
                  <div className="DYBOXING_TRAINING">
                    <h3 className="DYBOXING_TRAINING_text">
                      BOXING TRAINING FOR&nbsp;MMA
                    </h3>
                    <div className="DYBOXING_TRAINING_contend1">
                      <div className="videos1">
                        {" "}
                        <img
                          src="https://www.mvpboxing.com//uploads/training/1741208929img6.jpg"
                          className="videos1img"
                        />{" "}
                        <a href="Manny-Massons-Boxing-Training-for-MMA-15.html">
                          {" "}
                          <img
                            data-toggle="modal"
                            src="https://www.mvpboxing.com//assets/img/play.png"
                            className="play_icon"
                          />{" "}
                        </a>
                        <div className="videos_text">
                          <div className="time">
                            <p className="time_text">00:26</p>
                          </div>
                          <p className="video_text">Videos</p>
                          <p className="Fighting_off">Stiff Arm Execution</p>
                        </div>
                      </div>
                      <div className="videos1">
                        {" "}
                        <img
                          src="https://www.mvpboxing.com//uploads/training/1741425792img9.jpg"
                          className="videos1img"
                        />{" "}
                        <a href="Manny-Massons-Boxing-Training-for-MMA-15.html">
                          {" "}
                          <img
                            data-toggle="modal"
                            src="https://www.mvpboxing.com//assets/img/play.png"
                            className="play_icon"
                          />{" "}
                        </a>
                        <div className="videos_text">
                          <div className="time">
                            <p className="time_text">00:15</p>
                          </div>
                          <p className="video_text">Videos</p>
                          <p className="Fighting_off">Boxing For MMA</p>
                        </div>
                      </div>
                      <div className="videos1">
                        {" "}
                        <img
                          src="https://www.mvpboxing.com//uploads/training/1741425427img5.jpg"
                          className="videos1img"
                        />{" "}
                        <a href="Manny-Massons-Boxing-Training-for-MMA-15.html">
                          {" "}
                          <img
                            data-toggle="modal"
                            src="https://www.mvpboxing.com//assets/img/play.png"
                            className="play_icon"
                          />{" "}
                        </a>
                        <div className="videos_text">
                          <div className="time">
                            <p className="time_text">00:21</p>
                          </div>
                          <p className="video_text">Videos</p>
                          <p className="Fighting_off">
                            Setting Up The Leg Kick
                          </p>
                        </div>
                      </div>
                      <div className="videos1">
                        {" "}
                        <img
                          src="https://www.mvpboxing.com//uploads/training/1741425594img6.jpg"
                          className="videos1img"
                        />{" "}
                        <a href="Manny-Massons-Boxing-Training-for-MMA-15.html">
                          {" "}
                          <img
                            data-toggle="modal"
                            src="https://www.mvpboxing.com//assets/img/play.png"
                            className="play_icon"
                          />{" "}
                        </a>
                        <div className="videos_text">
                          <div className="time">
                            <p className="time_text">01:01</p>
                          </div>
                          <p className="video_text">Videos</p>
                          <p className="Fighting_off">
                            Cutting Off An Opponent
                          </p>
                        </div>
                      </div>
                      <div className="videos1">
                        {" "}
                        <img
                          src="https://www.mvpboxing.com//uploads/training/1741425514img6.jpg"
                          className="videos1img"
                        />{" "}
                        <a href="Manny-Massons-Boxing-Training-for-MMA-15.html">
                          {" "}
                          <img
                            data-toggle="modal"
                            src="https://www.mvpboxing.com//assets/img/play.png"
                            className="play_icon"
                          />{" "}
                        </a>
                        <div className="videos_text">
                          <div className="time">
                            <p className="time_text">01:01</p>
                          </div>
                          <p className="video_text">Videos</p>
                          <p className="Fighting_off">
                            Breaking Down An Opponent{" "}
                          </p>
                        </div>
                      </div>
                      <div className="videos1">
                        {" "}
                        <img
                          src="https://www.mvpboxing.com//uploads/training/1741425552img6.jpg"
                          className="videos1img"
                        />{" "}
                        <a href="Manny-Massons-Boxing-Training-for-MMA-15.html">
                          {" "}
                          <img
                            data-toggle="modal"
                            src="https://www.mvpboxing.com//assets/img/play.png"
                            className="play_icon"
                          />{" "}
                        </a>
                        <div className="videos_text">
                          <div className="time">
                            <p className="time_text">01:01</p>
                          </div>
                          <p className="video_text">Videos</p>
                          <p className="Fighting_off">
                            Controlling The Center Of The Cage
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="DYBOXING_TRAINING_contend2" />
                  </div>
                </div>
                {/* <footer class="bg-button">        <div class="row nomargin">          <div class="col-12 nopadding">            <div class="text-right">              <a href="https://www.mvpboxing.com/news-boxing" class="btn btn-grey vm">View More</a>            </div>          </div>        </div>      </footer> */}
              </section>
            </div>
          </div>
          <section className="bgwhite" id="fight-polls">
            <header>
              <div className="header-text">
                <a href="https://www.mvpboxing.com/body-scan-break-down-injuries">
                  BODY SCAN
                </a>
              </div>
            </header>
            <div
              className="row nomargin bg-grey0 p-3 position-relative"
              style={{ marginLeft: "-30px" }}
            >
              <div
                className="fw_content_area "
                style={{ width: "auto", border: "none", background: "none" }}
              >
                <div className="forums_misc left position-relative">
                  <div
                    style={{ height: 210, width: 275, position: "relative" }}
                  >
                    <div id="middle_inner_wraper">
                      <div
                        id="body-scan-content"
                        style={{ marginLeft: "-60px" }}
                      >
                        <div id="male-body-cont">
                          <div className="scan" id="scan">
                            <img
                              data-src="https://www.mvpboxing.com/assets/images/body_scan_male001.png"
                              alt="Body Scan Breaks Down Injuries"
                              width={112}
                              height={213}
                              className="scan01 lazyload"
                            />
                          </div>{" "}
                          <a
                            target="_blank"
                            href="https://www.mvpboxing.com/body-injury/male-head-injury"
                            className="bodyscans-item item1"
                          >
                            <img
                              data-src="https://www.mvpboxing.com/assets/images/item1.png"
                              alt="Head Injury"
                              className="img lazyload"
                            />
                          </a>{" "}
                          <a
                            target="_blank"
                            href="https://www.mvpboxing.com/body-injury/male-facial-injury"
                            className="bodyscans-item item2"
                          >
                            <img
                              data-src="https://www.mvpboxing.com/assets/images/item2.png"
                              alt="Facial Injury"
                              className="img lazyload"
                            />
                          </a>{" "}
                          <a
                            target="_blank"
                            href="https://www.mvpboxing.com/body-injury/male-shoulder-injury"
                            className="bodyscans-item item3"
                          >
                            <img
                              data-src="https://www.mvpboxing.com/assets/images/item3.png"
                              alt="Shoulder Injury"
                              className="img lazyload"
                            />
                          </a>{" "}
                          <a
                            target="_blank"
                            href="https://www.mvpboxing.com/body-injury/male-wrist-injury"
                            className="bodyscans-item item4"
                          >
                            <img
                              data-src="https://www.mvpboxing.com/assets/images/item4.png"
                              alt="Wrist Hand Injury"
                              className="img lazyload"
                            />
                          </a>{" "}
                          <a
                            target="_blank"
                            href="https://www.mvpboxing.com/body-injury/male-lowback-injury"
                            className="bodyscans-item item5"
                          >
                            <img
                              data-src="https://www.mvpboxing.com/assets/images/item6.png"
                              alt="Low Back Pain Injury"
                              className="img lazyload"
                            />
                          </a>{" "}
                          <a
                            target="_blank"
                            href="https://www.mvpboxing.com/body-injury/male-elbow-injury"
                            className="bodyscans-item item6"
                          >
                            <img
                              data-src="https://www.mvpboxing.com/assets/images/item5.png"
                              alt="Elbow Injury"
                              className="img lazyload"
                            />
                          </a>{" "}
                          <a
                            target="_blank"
                            href="https://www.mvpboxing.com/body-injury/male-hip-injury"
                            className="bodyscans-item item7"
                          >
                            <img
                              data-src="https://www.mvpboxing.com/assets/images/item7.png"
                              alt="HIP Injury"
                              className="img lazyload"
                            />
                          </a>{" "}
                          <a
                            target="_blank"
                            href="https://www.mvpboxing.com/body-injury/male-knee-injury"
                            className="bodyscans-item item8"
                          >
                            <img
                              data-src="https://www.mvpboxing.com/assets/images/item8.png"
                              alt="Knee Injury"
                              className="img lazyload"
                            />
                          </a>{" "}
                          <a
                            target="_blank"
                            href="https://www.mvpboxing.com/body-injury/male-lowerleg-injury"
                            className="bodyscans-item item9"
                          >
                            <img
                              data-src="https://www.mvpboxing.com/assets/images/item9.png"
                              alt="Lower Leg Injury"
                              className="img lazyload"
                            />
                          </a>{" "}
                          <a
                            target="_blank"
                            href="https://www.mvpboxing.com/body-injury/male-foot-injury"
                            className="bodyscans-item item10"
                          >
                            <img
                              data-src="https://www.mvpboxing.com/assets/images/item10.png"
                              alt="Foot Injury"
                              className="img lazyload"
                            />
                          </a>{" "}
                          <a
                            target="_blank"
                            href="https://www.mvpboxing.com/body-injury/male-ankle-injury"
                            className="bodyscans-item item11"
                          >
                            <img
                              data-src="https://www.mvpboxing.com/assets/images/item11.png"
                              alt="Ankle Injury"
                              className="img lazyload"
                            />
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ textAlign: "right", marginTop: "-10px" }}>
                    <HoverPrefetchLink
                      href="/Injuries"
                      className="vote_buton"
                      style={{
                        fontSize: 15,
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        right: "unset",
                        left: 20,
                      }}
                    >
                      More »
                    </HoverPrefetchLink>
                  </div>
                  <div className="clear" />
                </div>
                {/* ends (.fw_content_area) */}
              </div>
            </div>
          </section>
          <section className="bgwhite" id="fight-polls">
            <header>
              <div className="header-text">
                <a href="javascript:void(0);">FIGHT POLL</a>
              </div>
            </header>
            <div className="row nomargin bg-grey0 p-3 position-relative">
              {/*Code for Map Start */}
              {/*<form action="https://www.mvpboxing.com//poll/saveOp" method="post">*/}
              <form
                className="voteform"
                id="voteformmsite"
                action="#"
                method="post"
              >
                <input type="hidden" name="qus_id" defaultValue={25} />
                <table
                  width="100%"
                  border={0}
                  cellPadding={0}
                  cellSpacing={0}
                  className="polling_table"
                >
                  <tbody>
                    <tr>
                      <td>
                        <h3 className="subheads">
                          {" "}
                          RYAN GARCIA VS. ROLANDO ROMERO…WHO’LL WIN?
                        </h3>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <ul className="work_datas">
                          <li>
                            <input
                              type="radio"
                              name="poll_options"
                              className="poll_options_chk"
                              defaultValue={1011}
                            />{" "}
                            GARCIA: DECISION
                          </li>
                          <li>
                            <input
                              type="radio"
                              name="poll_options"
                              className="poll_options_chk"
                              defaultValue={1012}
                            />{" "}
                            GARCIA: K.O.{" "}
                          </li>
                          <li>
                            <input
                              type="radio"
                              name="poll_options"
                              className="poll_options_chk"
                              defaultValue={1013}
                            />{" "}
                            ROMERO:DECISION{" "}
                          </li>
                          <li>
                            <input
                              type="radio"
                              name="poll_options"
                              className="poll_options_chk"
                              defaultValue={1014}
                            />{" "}
                            ROMERO: K.O.
                          </li>
                          <li>
                            <input
                              type="radio"
                              name="poll_options"
                              className="poll_options_chk"
                              defaultValue={1015}
                            />{" "}
                            DRAW{" "}
                          </li>
                          <li>
                            <input
                              type="radio"
                              name="poll_options"
                              className="poll_options_chk"
                              defaultValue={1016}
                            />{" "}
                            SUBMISSION
                          </li>
                        </ul>
                        {/* &nbsp;&nbsp; */}
                        <span className="vote-error">
                          Please select any one option first
                        </span>
                        <div className="clear" />
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/*    <a href="*/}
                {/*poll/saveOp" vote="no" class="vote_buton" style="font-size:15px;font-weight:bold;text-transform:uppercase;right: unset;left: 20px;" >VOTE</a>*/}
                {/*    <a href="javascript:void()" onclick="document.getElementById('submit_button').click()" vote="no" class="vote_buton" style="font-size:15px;font-weight:bold;text-transform:uppercase;right: unset;left: 20px;" >VOTE</a>*/}
                <input
                  type="button"
                  id="submit_button"
                  className="vote_buton"
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    right: "unset",
                    left: 20,
                    border: "none",
                  }}
                  defaultValue="vote"
                />
              </form>
              {/*Code for Map End */}
            </div>
            {/* <footer class="bg-button">      <div class="row nomargin">        <div class="col-12 nopadding">          <div class="text-right">            <!-- <a href="https://www.mvpboxing.com/videos" class="btn btn-grey videos-btn vm">View More</a> --          </div>        </div>      </div>    </footer> */}
          </section>
        </div>
      </div>
      <div className="d-none d-md-block" id="desktop-devie">
        <link
          rel="stylesheet"
          href="https://www.mvpboxing.com/assets/css/style-trainning.css"
        />
        <div className="container-fluid nopadding" style={{ padding: 1 }}>
          <section className="headlines">
            <Sliders />
          </section>
          <section className="bgwhite" id="boxing-news">
            <BoxingNews />
          </section>
          <section className="bgwhite" id="mma-news">
            <MmaNews />
          </section>
          <section className="bgwhite" id="podcast">
            <Podcast />
          </section>
          <div className="d-md-none d-block" id="mobile-device">
            <div className="container-fluid nopadding" style={{ padding: 1 }}>
              <section className="bgwhite" id="boxing-news">
                <div className="row nomargin bg-grey0 news_data">
                  <div className="main_contend">
                    <div className="DYBOXING_TRAINING">
                      <h3 className="DYBOXING_TRAINING_text">
                        DYNAMIC BOXING TRAINING
                      </h3>
                      <div className="DYBOXING_TRAINING_contend1">
                        <div className="videos1">
                          {" "}
                          <img
                            src="https://www.mvpboxing.com//uploads/training/1741207552img2.jpg"
                            className="videos1img"
                          />{" "}
                          <a href="Manny-Massons-Boxing-Training-for-MMA-15.html">
                            {" "}
                            <img
                              src="https://www.mvpboxing.com//assets/img/play.png"
                              className="play_icon"
                            />{" "}
                          </a>
                          <div className="videos_text">
                            <div className="time">
                              <p className="time_text">00:18</p>
                            </div>
                            <p className="video_text">Videos</p>
                            <p className="Fighting_off">Defensive Fighting</p>
                          </div>
                        </div>
                        <div className="videos1">
                          {" "}
                          <img
                            src="https://www.mvpboxing.com//uploads/training/1741425755img1.jpg"
                            className="videos1img"
                          />{" "}
                          <a href="Manny-Massons-Boxing-Training-for-MMA-15.html">
                            {" "}
                            <img
                              src="https://www.mvpboxing.com//assets/img/play.png"
                              className="play_icon"
                            />{" "}
                          </a>
                          <div className="videos_text">
                            <div className="time">
                              <p className="time_text">00:20</p>
                            </div>
                            <p className="video_text">Videos</p>
                            <p className="Fighting_off">
                              Fighting Off The Ropes
                            </p>
                          </div>
                        </div>
                        <div className="videos1">
                          {" "}
                          <img
                            src="https://www.mvpboxing.com//uploads/training/1741207782img3.jpg"
                            className="videos1img"
                          />{" "}
                          <a href="Manny-Massons-Boxing-Training-for-MMA-15.html">
                            {" "}
                            <img
                              src="https://www.mvpboxing.com//assets/img/play.png"
                              className="play_icon"
                            />{" "}
                          </a>
                          <div className="videos_text">
                            <div className="time">
                              <p className="time_text">00:21</p>
                            </div>
                            <p className="video_text">Videos</p>
                            <p className="Fighting_off">
                              Applying Intelligent Pressure
                            </p>
                          </div>
                        </div>
                        <div className="videos1">
                          {" "}
                          <img
                            src="https://www.mvpboxing.com//uploads/training/1741208086img7.jpg"
                            className="videos1img"
                          />{" "}
                          <a href="Manny-Massons-Boxing-Training-for-MMA-15.html">
                            {" "}
                            <img
                              src="https://www.mvpboxing.com//assets/img/play.png"
                              className="play_icon"
                            />{" "}
                          </a>
                          <div className="videos_text">
                            <div className="time">
                              <p className="time_text">04:33</p>
                            </div>
                            <p className="video_text">Videos</p>
                            <p className="Fighting_off">
                              Technical Boxing Training
                            </p>
                          </div>
                        </div>
                        <div className="videos1">
                          {" "}
                          <img
                            src="https://www.mvpboxing.com//uploads/training/1741532567img4.jpg"
                            className="videos1img"
                          />{" "}
                          <a href="Manny-Massons-Boxing-Training-for-MMA-15.html">
                            {" "}
                            <img
                              src="https://www.mvpboxing.com//assets/img/play.png"
                              className="play_icon"
                            />{" "}
                          </a>
                          <div className="videos_text">
                            <div className="time">
                              <p className="time_text">00:12</p>
                            </div>
                            <p className="video_text">Videos</p>
                            <p className="Fighting_off">Dynamic Sprint Drill</p>
                          </div>
                        </div>
                        <div className="videos1">
                          {" "}
                          <img
                            src="https://www.mvpboxing.com//uploads/training/1741208320img8.jpg"
                            className="videos1img"
                          />{" "}
                          <a href="Manny-Massons-Boxing-Training-for-MMA-15.html">
                            {" "}
                            <img
                              src="https://www.mvpboxing.com//assets/img/play.png"
                              className="play_icon"
                            />{" "}
                          </a>
                          <div className="videos_text">
                            <div className="time">
                              <p className="time_text">00:28</p>
                            </div>
                            <p className="video_text">Videos</p>
                            <p className="Fighting_off">
                              Dynamic Boxing Training
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="DYBOXING_TRAINING_contend2" />
                    </div>
                    <div className="DYBOXING_TRAINING">
                      <h3 className="DYBOXING_TRAINING_text">
                        BOXING TRAINING FOR&nbsp;MMA
                      </h3>
                      <div className="DYBOXING_TRAINING_contend1">
                        <div className="videos1">
                          {" "}
                          <img
                            src="https://www.mvpboxing.com//uploads/training/1741208929img6.jpg"
                            className="videos1img"
                          />{" "}
                          <a href="Manny-Massons-Boxing-Training-for-MMA-15.html">
                            {" "}
                            <img
                              src="https://www.mvpboxing.com//assets/img/play.png"
                              className="play_icon"
                            />{" "}
                          </a>
                          <div className="videos_text">
                            <div className="time">
                              <p className="time_text">00:26</p>
                            </div>
                            <p className="video_text">Videos</p>
                            <p className="Fighting_off">Stiff Arm Execution</p>
                          </div>
                        </div>
                        <div className="videos1">
                          {" "}
                          <img
                            src="https://www.mvpboxing.com//uploads/training/1741425792img9.jpg"
                            className="videos1img"
                          />{" "}
                          <a href="Manny-Massons-Boxing-Training-for-MMA-15.html">
                            {" "}
                            <img
                              src="https://www.mvpboxing.com//assets/img/play.png"
                              className="play_icon"
                            />{" "}
                          </a>
                          <div className="videos_text">
                            <div className="time">
                              <p className="time_text">00:15</p>
                            </div>
                            <p className="video_text">Videos</p>
                            <p className="Fighting_off">Boxing For MMA</p>
                          </div>
                        </div>
                        <div className="videos1">
                          {" "}
                          <img
                            src="https://www.mvpboxing.com//uploads/training/1741425427img5.jpg"
                            className="videos1img"
                          />{" "}
                          <a href="Manny-Massons-Boxing-Training-for-MMA-15.html">
                            {" "}
                            <img
                              src="https://www.mvpboxing.com//assets/img/play.png"
                              className="play_icon"
                            />{" "}
                          </a>
                          <div className="videos_text">
                            <div className="time">
                              <p className="time_text">00:21</p>
                            </div>
                            <p className="video_text">Videos</p>
                            <p className="Fighting_off">
                              Setting Up The Leg Kick
                            </p>
                          </div>
                        </div>
                        <div className="videos1">
                          {" "}
                          <img
                            src="https://www.mvpboxing.com//uploads/training/1741425594img6.jpg"
                            className="videos1img"
                          />{" "}
                          <a href="Manny-Massons-Boxing-Training-for-MMA-15.html">
                            {" "}
                            <img
                              src="https://www.mvpboxing.com//assets/img/play.png"
                              className="play_icon"
                            />{" "}
                          </a>
                          <div className="videos_text">
                            <div className="time">
                              <p className="time_text">01:01</p>
                            </div>
                            <p className="video_text">Videos</p>
                            <p className="Fighting_off">
                              Cutting Off An Opponent
                            </p>
                          </div>
                        </div>
                        <div className="videos1">
                          {" "}
                          <img
                            src="https://www.mvpboxing.com//uploads/training/1741425514img6.jpg"
                            className="videos1img"
                          />{" "}
                          <a href="Manny-Massons-Boxing-Training-for-MMA-15.html">
                            {" "}
                            <img
                              src="https://www.mvpboxing.com//assets/img/play.png"
                              className="play_icon"
                            />{" "}
                          </a>
                          <div className="videos_text">
                            <div className="time">
                              <p className="time_text">01:01</p>
                            </div>
                            <p className="video_text">Videos</p>
                            <p className="Fighting_off">
                              Breaking Down An Opponent{" "}
                            </p>
                          </div>
                        </div>
                        <div className="videos1">
                          {" "}
                          <img
                            src="https://www.mvpboxing.com//uploads/training/1741425552img6.jpg"
                            className="videos1img"
                          />{" "}
                          <a href="Manny-Massons-Boxing-Training-for-MMA-15.html">
                            {" "}
                            <img
                              src="https://www.mvpboxing.com//assets/img/play.png"
                              className="play_icon"
                            />{" "}
                          </a>
                          <div className="videos_text">
                            <div className="time">
                              <p className="time_text">01:01</p>
                            </div>
                            <p className="video_text">Videos</p>
                            <p className="Fighting_off">
                              Controlling The Center Of The Cage
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="DYBOXING_TRAINING_contend2" />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <section className="bgwhite" id="boxing-news">
            <div className="main_contend">
              <BoxingTraining />
              <BoxingTrainingMma />
            </div>
          </section>
          <section className="bgwhite" id="fight-polls">
            <header>
              <div className="header-text">
                <a href="https://www.mvpboxing.com/body-scan-break-down-injuries">
                  BODY SCAN
                </a>
              </div>
            </header>
            <div
              className="row nomargin bg-grey0 p-3 position-relative"
              style={{ marginLeft: "-30px" }}
            >
              <div
                className="fw_content_area "
                style={{ width: "auto", border: "none", background: "none" }}
              >
                <div className="forums_misc left position-relative">
                  <div
                    style={{ height: 210, width: 275, position: "relative" }}
                  >
                    <div id="middle_inner_wraper">
                      <div
                        id="body-scan-content"
                        style={{ marginLeft: "-60px" }}
                      >
                        <div id="male-body-cont">
                          <div className="scan" id="scan">
                            <img
                              data-src="https://www.mvpboxing.com/assets/images/body_scan_male001.png"
                              alt="Body Scan Breaks Down Injuries"
                              width={112}
                              height={213}
                              className="scan01 lazyload"
                            />
                          </div>{" "}
                          <a
                            target="_blank"
                            href="https://www.mvpboxing.com/body-injury/male-head-injury"
                            className="bodyscans-item item1"
                          >
                            <img
                              data-src="https://www.mvpboxing.com/assets/images/item1.png"
                              alt="Head Injury"
                              className="img lazyload"
                            />
                          </a>{" "}
                          <a
                            target="_blank"
                            href="https://www.mvpboxing.com/body-injury/male-facial-injury"
                            className="bodyscans-item item2"
                          >
                            <img
                              data-src="https://www.mvpboxing.com/assets/images/item2.png"
                              alt="Facial Injury"
                              className="img lazyload"
                            />
                          </a>{" "}
                          <a
                            target="_blank"
                            href="https://www.mvpboxing.com/body-injury/male-shoulder-injury"
                            className="bodyscans-item item3"
                          >
                            <img
                              data-src="https://www.mvpboxing.com/assets/images/item3.png"
                              alt="Shoulder Injury"
                              className="img lazyload"
                            />
                          </a>{" "}
                          <a
                            target="_blank"
                            href="https://www.mvpboxing.com/body-injury/male-wrist-injury"
                            className="bodyscans-item item4"
                          >
                            <img
                              data-src="https://www.mvpboxing.com/assets/images/item4.png"
                              alt="Wrist Hand Injury"
                              className="img lazyload"
                            />
                          </a>{" "}
                          <a
                            target="_blank"
                            href="https://www.mvpboxing.com/body-injury/male-lowback-injury"
                            className="bodyscans-item item5"
                          >
                            <img
                              data-src="https://www.mvpboxing.com/assets/images/item6.png"
                              alt="Low Back Pain Injury"
                              className="img lazyload"
                            />
                          </a>{" "}
                          <a
                            target="_blank"
                            href="https://www.mvpboxing.com/body-injury/male-elbow-injury"
                            className="bodyscans-item item6"
                          >
                            <img
                              data-src="https://www.mvpboxing.com/assets/images/item5.png"
                              alt="Elbow Injury"
                              className="img lazyload"
                            />
                          </a>{" "}
                          <a
                            target="_blank"
                            href="https://www.mvpboxing.com/body-injury/male-hip-injury"
                            className="bodyscans-item item7"
                          >
                            <img
                              data-src="https://www.mvpboxing.com/assets/images/item7.png"
                              alt="HIP Injury"
                              className="img lazyload"
                            />
                          </a>{" "}
                          <a
                            target="_blank"
                            href="https://www.mvpboxing.com/body-injury/male-knee-injury"
                            className="bodyscans-item item8"
                          >
                            <img
                              data-src="https://www.mvpboxing.com/assets/images/item8.png"
                              alt="Knee Injury"
                              className="img lazyload"
                            />
                          </a>{" "}
                          <a
                            target="_blank"
                            href="https://www.mvpboxing.com/body-injury/male-lowerleg-injury"
                            className="bodyscans-item item9"
                          >
                            <img
                              data-src="https://www.mvpboxing.com/assets/images/item9.png"
                              alt="Lower Leg Injury"
                              className="img lazyload"
                            />
                          </a>{" "}
                          <a
                            target="_blank"
                            href="https://www.mvpboxing.com/body-injury/male-foot-injury"
                            className="bodyscans-item item10"
                          >
                            <img
                              data-src="https://www.mvpboxing.com/assets/images/item10.png"
                              alt="Foot Injury"
                              className="img lazyload"
                            />
                          </a>{" "}
                          <a
                            target="_blank"
                            href="https://www.mvpboxing.com/body-injury/male-ankle-injury"
                            className="bodyscans-item item11"
                          >
                            <img
                              data-src="https://www.mvpboxing.com/assets/images/item11.png"
                              alt="Ankle Injury"
                              className="img lazyload"
                            />
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ textAlign: "right", marginTop: "-10px" }}>
                    <HoverPrefetchLink
                      href="/Injuries"
                      className="vote_buton"
                      style={{
                        fontSize: 15,
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        right: "unset",
                        left: 20,
                      }}
                    >
                      More »
                    </HoverPrefetchLink>
                  </div>
                  <div className="clear" />
                </div>
              </div>
            </div>
          </section>
          <section className="bgwhite" id="fight-polls">
            <header>
              <div className="header-text">
                <a href="javascript:void(0);">FIGHT POLL</a>
              </div>
            </header>
            <div className="row nomargin bg-grey0 p-3 position-relative">
              <form
                className="voteform"
                id="voteformmsite"
                action="#"
                method="get"
              >
                <input type="hidden" name="qus_id" defaultValue={25} />
                <table
                  width="100%"
                  border={0}
                  cellPadding={0}
                  cellSpacing={0}
                  className="polling_table"
                >
                  <tbody>
                    <tr>
                      <td>
                        <h3 className="subheads">
                          {" "}
                          RYAN GARCIA VS. ROLANDO ROMERO…WHO’LL WIN?
                        </h3>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <ul className="work_datas">
                          <li>
                            <input
                              type="radio"
                              name="poll_options"
                              className="poll_options_chk"
                              defaultValue={1011}
                            />{" "}
                            GARCIA: DECISION
                          </li>
                          <li>
                            <input
                              type="radio"
                              name="poll_options"
                              className="poll_options_chk"
                              defaultValue={1012}
                            />{" "}
                            GARCIA: K.O.{" "}
                          </li>
                          <li>
                            <input
                              type="radio"
                              name="poll_options"
                              className="poll_options_chk"
                              defaultValue={1013}
                            />{" "}
                            ROMERO:DECISION{" "}
                          </li>
                          <li>
                            <input
                              type="radio"
                              name="poll_options"
                              className="poll_options_chk"
                              defaultValue={1014}
                            />{" "}
                            ROMERO: K.O.
                          </li>
                          <li>
                            <input
                              type="radio"
                              name="poll_options"
                              className="poll_options_chk"
                              defaultValue={1015}
                            />{" "}
                            DRAW{" "}
                          </li>
                          <li>
                            <input
                              type="radio"
                              name="poll_options"
                              className="poll_options_chk"
                              defaultValue={1016}
                            />{" "}
                            SUBMISSION
                          </li>
                        </ul>
                        <span className="vote-error">
                          Please select any one option first
                        </span>
                        <div className="clear" />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <input
                  type="button"
                  id="submit_button"
                  className="vote_buton"
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    right: "unset",
                    left: 20,
                    border: "none",
                  }}
                  defaultValue="vote"
                />
              </form>
            </div>
          </section>
        </div>
      </div>
      <div className="sidebar_home">
        <div className="sidebar_home_one">
          <SidebarBottom />
        </div>

        <div className="sidebar_home_two">
          <SidebarBottomMma />
        </div>

        <div className="sidebar_home_three">
          <p className="follow_the">FOLLOW MVP BOXING</p>
          <div className="sidebar_home_social_icon">
            <a
              target="_blank"
              href="http://www.facebook.com/pages/MVP-Boxing/135461625286?ref=ts"
              title="Facebook"
            >
              <i
                className="fab fa-facebook-f"
                aria-hidden="true"
                style={{ border: "1px solid grey", color: "white" }}
              />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/manny_masson"
              title="Instagram"
            >
              <i
                className="fab fa-instagram"
                aria-hidden="true"
                style={{ border: "1px solid grey", color: "white" }}
              />
            </a>
            <a
              target="_blank"
              href="http://twitter.com/mvpboxing"
              title="Twitter"
            >
              <i
                className="fa-brands fa-x-twitter"
                style={{ border: "1px solid grey", color: "white" }}
              />
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/user/MassonLLC"
              title="Youtube"
            >
              <i
                className="fab fa-youtube"
                aria-hidden="true"
                style={{ border: "1px solid grey", color: "white" }}
              />
            </a>
            <a
              target="_blank"
              href="https://www.tiktok.com/@manny_masson"
              title="TikTok"
            >
              <i
                className="fa-brands fa-tiktok"
                aria-hidden="true"
                style={{ border: "1px solid grey", color: "white" }}
              />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/mvp-boxing-a03091254"
              title="linkedin"
            >
              <i className="fab fa-linkedin-in" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
