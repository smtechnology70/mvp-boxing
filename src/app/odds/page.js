"use client";

import { useEffect, useState } from "react";

import GLOBALS from "@/server/Globals";

import $ from "jquery";

const BoxingOdds = (props) => {
  const [loading, setLoading] = useState(false);
  const [newsdata, setNewsdata] = useState([]);

  let currentPage = 1;

  useEffect(() => {
    async function getData(currentPage) {
      setLoading(true);
      let apiUrl = "dropboxingnews?p=" + currentPage;
      const url = GLOBALS.API_BASE_URL + apiUrl;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        setNewsdata(json.data);
        setLoading(false);
      } catch (error) {
        console.error(error.message);
      }
    }
    getData(currentPage);

    $(".nextPage").on("click", function () {
      currentPage++;
      getData(currentPage);
    });

    $(".previousPage").on("click", function () {
      currentPage--;
      if (currentPage > 0) {
        getData(currentPage);
      } else {
        currentPage++;
      }
    });

    return () => {
      // Cleanup logic here
    };
  }, []);

  return (
    <div className="mvpBgContainer mvp_container" id="newsMainContent">
      <div className="news_articles_content" style={{ width: "100%" }}>
        <div
          className="left_content_area odds_section"
          style={{ margin: 0, minHeight: 65 }}
        >
          <h1 className="titles_article sch_title">Boxing Odds - 2025</h1>
          {/* ends (.sch_title) */}
          <ul className="sch_tabs">
            <li className="ative_tab sch_tab">
              <a href="https://www.mvpboxing.com/odds/boxing">Boxing</a>
            </li>
            <li className=" sch_tab">
              <a href="https://www.mvpboxing.com/odds/ufc-mma">MMA</a>
            </li>
            <li className=" sch_tab">
              <a href="https://www.mvpboxing.com/odds/boxing/preview">
                Boxing Preview
              </a>
            </li>
            <li className=" sch_tab">
              <a href="https://www.mvpboxing.com/odds/mma/preview">
                MMA Preview
              </a>
            </li>
            <li className="odds_powered_by d-none d-md-block">
              powered by<span>mvpboxing.com</span>
            </li>
          </ul>
          {/* ends (.sch_tabs) */}
          <div className="odds-div">
            <div
              id="odds_wrapper"
              className="dataTables_wrapper dt-bootstrap4 no-footer"
            >
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <div className="dataTables_length" id="odds_length">
                    <label>
                      Show{" "}
                      <select
                        name="odds_length"
                        aria-controls="odds"
                        className="custom-select custom-select-sm form-control form-control-sm"
                      >
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                      </select>{" "}
                      entries
                    </label>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <div id="odds_filter" className="dataTables_filter">
                    <label>
                      Search:
                      <input
                        type="search"
                        className="form-control form-control-sm"
                        placeholder
                        aria-controls="odds"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <table
                    id="odds"
                    data-oddstype="boxing"
                    className="display odds-dataTable dataTable no-footer"
                    style={{ width: "100%" }}
                    role="grid"
                    aria-describedby="odds_info"
                  >
                    <thead>
                      <tr role="row">
                        <th
                          className="oddsText sorting"
                          tabIndex={0}
                          aria-controls="odds"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Upcoming Fight Odds: activate to sort column ascending"
                          style={{ width: 893 }}
                        >
                          <h2
                            style={{
                              fontSize: 20,
                              fontWeight: "700 !important",
                            }}
                          >
                            Upcoming Fight Odds
                          </h2>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="odd">
                        <td
                          valign="top"
                          colSpan={1}
                          className="dataTables_empty"
                        >
                          No Upcoming Fight Odds currently
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-5">
                  <div
                    className="dataTables_info"
                    id="odds_info"
                    role="status"
                    aria-live="polite"
                  >
                    Showing 0 to 0 of 0 entries
                  </div>
                </div>
                <div className="col-sm-12 col-md-7">
                  <div
                    className="dataTables_paginate paging_simple_numbers"
                    id="odds_paginate"
                  >
                    <ul className="pagination">
                      <li
                        className="paginate_button page-item previous disabled"
                        id="odds_previous"
                      >
                        <a
                          href="#"
                          aria-controls="odds"
                          data-dt-idx={0}
                          tabIndex={0}
                          className="page-link"
                        >
                          Previous
                        </a>
                      </li>
                      <li
                        className="paginate_button page-item next disabled"
                        id="odds_next"
                      >
                        <a
                          href="#"
                          aria-controls="odds"
                          data-dt-idx={1}
                          tabIndex={0}
                          className="page-link"
                        >
                          Next
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="odds-div odds-old">
            <div
              id="odds-old_wrapper"
              className="dataTables_wrapper dt-bootstrap4 no-footer"
            >
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <div className="dataTables_length" id="odds-old_length">
                    <label>
                      Show{" "}
                      <select
                        name="odds-old_length"
                        aria-controls="odds-old"
                        className="custom-select custom-select-sm form-control form-control-sm"
                      >
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                      </select>{" "}
                      entries
                    </label>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <div id="odds-old_filter" className="dataTables_filter">
                    <label>
                      Search:
                      <input
                        type="search"
                        className="form-control form-control-sm"
                        placeholder
                        aria-controls="odds-old"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <table
                    id="odds-old"
                    data-oddstype="boxing"
                    className="display odds-dataTable dataTable no-footer"
                    style={{ width: "100%" }}
                    role="grid"
                    aria-describedby="odds-old_info"
                  >
                    <thead>
                      <tr role="row">
                        <th
                          className="oddsText sorting"
                          tabIndex={0}
                          aria-controls="odds-old"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Previous Fight Odds: activate to sort column ascending"
                          style={{ width: 893 }}
                        >
                          <h2
                            style={{
                              fontSize: 20,
                              fontWeight: "700 !important",
                            }}
                          >
                            Previous Fight Odds
                          </h2>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr role="row" className="odd">
                        <td>
                          <div className="event_date">Sat. August 20</div>
                          {/* ends (.event_date) */}
                          <div className="odds_info px-1">
                            <div className="fights_bet firstBet">
                              <div className="left">
                                <div>Lightweight</div>
                              </div>
                              <div className="clear" />
                            </div>
                            <div className="fights_bet_label">
                              <div className="left">participant</div>
                              <div className="right">odds</div>
                              <div className="clear" />
                            </div>
                            <div className="fights_bet ">
                              <div className="left">
                                <div className="player-name">Eduardo Baez</div>
                                <div className="player-name">
                                  Emanuel Navarrete
                                </div>
                              </div>
                              <div className="right">
                                <div>+650</div>
                                <div>-1200</div>
                              </div>
                              <div className="clear" />
                            </div>
                          </div>
                          {/* class (.odds_info) */}
                        </td>
                      </tr>
                      <tr role="row" className="even">
                        <td>
                          <div className="event_date">Sat. July 09</div>
                          {/* ends (.event_date) */}
                          <div className="odds_info px-1">
                            <div className="fights_bet firstBet">
                              <div className="left">
                                <div>Middleweight</div>
                              </div>
                              <div className="clear" />
                            </div>
                            <div className="fights_bet_label">
                              <div className="left">participant</div>
                              <div className="right">odds</div>
                              <div className="clear" />
                            </div>
                            <div className="fights_bet ">
                              <div className="left">
                                <div className="player-name">
                                  Vaughn Alexander{" "}
                                </div>
                                <div className="player-name">Feliz Cash</div>
                              </div>
                              <div className="right">
                                <div>+850</div>
                                <div>-1600</div>
                              </div>
                              <div className="clear" />
                            </div>
                          </div>
                          {/* class (.odds_info) */}
                        </td>
                      </tr>
                      <tr role="row" className="odd">
                        <td>
                          <div className="event_date">Sat. July 09</div>
                          {/* ends (.event_date) */}
                          <div className="odds_info px-1">
                            <div className="fights_bet firstBet">
                              <div className="left">
                                <div>Super Featherweight</div>
                              </div>
                              <div className="clear" />
                            </div>
                            <div className="fights_bet_label">
                              <div className="left">participant</div>
                              <div className="right">odds</div>
                              <div className="clear" />
                            </div>
                            <div className="fights_bet ">
                              <div className="left">
                                <div className="player-name">Rey Vargas </div>
                                <div className="player-name">Mark Magsayo</div>
                              </div>
                              <div className="right">
                                <div>-115</div>
                                <div>-115</div>
                              </div>
                              <div className="clear" />
                            </div>
                          </div>
                          {/* class (.odds_info) */}
                        </td>
                      </tr>
                      <tr role="row" className="even">
                        <td>
                          <div className="event_date">Sat. July 09</div>
                          {/* ends (.event_date) */}
                          <div className="odds_info px-1">
                            <div className="fights_bet firstBet">
                              <div className="left">
                                <div>Super Welterweight</div>
                              </div>
                              <div className="clear" />
                            </div>
                            <div className="fights_bet_label">
                              <div className="left">participant</div>
                              <div className="right">odds</div>
                              <div className="clear" />
                            </div>
                            <div className="fights_bet ">
                              <div className="left">
                                <div className="player-name">
                                  Magomed Kurbanov
                                </div>
                                <div className="player-name">
                                  Patrick Teixeira
                                </div>
                              </div>
                              <div className="right">
                                <div>-700</div>
                                <div>+425</div>
                              </div>
                              <div className="clear" />
                            </div>
                          </div>
                          {/* class (.odds_info) */}
                        </td>
                      </tr>
                      <tr role="row" className="odd">
                        <td>
                          <div className="event_date">Sat. July 09</div>
                          {/* ends (.event_date) */}
                          <div className="odds_info px-1">
                            <div className="fights_bet firstBet">
                              <div className="left">
                                <div>Featherweight</div>
                              </div>
                              <div className="clear" />
                            </div>
                            <div className="fights_bet_label">
                              <div className="left">participant</div>
                              <div className="right">odds</div>
                              <div className="clear" />
                            </div>
                            <div className="fights_bet ">
                              <div className="left">
                                <div className="player-name">
                                  Augustin’s Rojas{" "}
                                </div>
                                <div className="player-name">Ramla Ali </div>
                              </div>
                              <div className="right">
                                <div>+1700</div>
                                <div>-10000</div>
                              </div>
                              <div className="clear" />
                            </div>
                          </div>
                          {/* class (.odds_info) */}
                        </td>
                      </tr>
                      <tr role="row" className="even">
                        <td>
                          <div className="event_date">Sat. July 09</div>
                          {/* ends (.event_date) */}
                          <div className="odds_info px-1">
                            <div className="fights_bet firstBet">
                              <div className="left">
                                <div>Heavyweight</div>
                              </div>
                              <div className="clear" />
                            </div>
                            <div className="fights_bet_label">
                              <div className="left">participant</div>
                              <div className="right">odds</div>
                              <div className="clear" />
                            </div>
                            <div className="fights_bet ">
                              <div className="left">
                                <div className="player-name">
                                  Solomon Dacres
                                </div>
                                <div className="player-name">
                                  Kevin Nicolas Espind…
                                </div>
                              </div>
                              <div className="right">
                                <div>-3300</div>
                                <div>+1400</div>
                              </div>
                              <div className="clear" />
                            </div>
                          </div>
                          {/* class (.odds_info) */}
                        </td>
                      </tr>
                      <tr role="row" className="odd">
                        <td>
                          <div className="event_date">Sat. July 09</div>
                          {/* ends (.event_date) */}
                          <div className="odds_info px-1">
                            <div className="fights_bet firstBet">
                              <div className="left">
                                <div>Welterweight</div>
                              </div>
                              <div className="clear" />
                            </div>
                            <div className="fights_bet_label">
                              <div className="left">participant</div>
                              <div className="right">odds</div>
                              <div className="clear" />
                            </div>
                            <div className="fights_bet ">
                              <div className="left">
                                <div className="player-name">Lukasz Maciec</div>
                                <div className="player-name">
                                  Caoimhin Agyarco
                                </div>
                              </div>
                              <div className="right">
                                <div>+875</div>
                                <div>-2000</div>
                              </div>
                              <div className="clear" />
                            </div>
                          </div>
                          {/* class (.odds_info) */}
                        </td>
                      </tr>
                      <tr role="row" className="even">
                        <td>
                          <div className="event_date">Sat. July 09</div>
                          {/* ends (.event_date) */}
                          <div className="odds_info px-1">
                            <div className="fights_bet firstBet">
                              <div className="left">
                                <div>Heavyweight</div>
                              </div>
                              <div className="clear" />
                            </div>
                            <div className="fights_bet_label">
                              <div className="left">participant</div>
                              <div className="right">odds</div>
                              <div className="clear" />
                            </div>
                            <div className="fights_bet ">
                              <div className="left">
                                <div className="player-name">
                                  Fabio Wardley{" "}
                                </div>
                                <div className="player-name">Kingsley Ibeh</div>
                              </div>
                              <div className="right">
                                <div>-650</div>
                                <div>+475</div>
                              </div>
                              <div className="clear" />
                            </div>
                          </div>
                          {/* class (.odds_info) */}
                        </td>
                      </tr>
                      <tr role="row" className="odd">
                        <td>
                          <div className="event_date">Sat. July 09</div>
                          {/* ends (.event_date) */}
                          <div className="odds_info px-1">
                            <div className="fights_bet firstBet">
                              <div className="left">
                                <div>Super Welterweight</div>
                              </div>
                              <div className="clear" />
                            </div>
                            <div className="fights_bet_label">
                              <div className="left">participant</div>
                              <div className="right">odds</div>
                              <div className="clear" />
                            </div>
                            <div className="fights_bet ">
                              <div className="left">
                                <div className="player-name">Michel Soro</div>
                                <div className="player-name">Israil </div>
                              </div>
                              <div className="right">
                                <div>+525</div>
                                <div>-900</div>
                              </div>
                              <div className="clear" />
                            </div>
                          </div>
                          {/* class (.odds_info) */}
                        </td>
                      </tr>
                      <tr role="row" className="even">
                        <td>
                          <div className="event_date">Sat. July 09</div>
                          {/* ends (.event_date) */}
                          <div className="odds_info px-1">
                            <div className="fights_bet firstBet">
                              <div className="left">
                                <div>Heavyweight</div>
                              </div>
                              <div className="clear" />
                            </div>
                            <div className="fights_bet_label">
                              <div className="left">participant</div>
                              <div className="right">odds</div>
                              <div className="clear" />
                            </div>
                            <div className="fights_bet ">
                              <div className="left">
                                <div className="player-name">Kibrat Pulev</div>
                                <div className="player-name">Derek Chisora</div>
                              </div>
                              <div className="right">
                                <div>-275</div>
                                <div>+205</div>
                              </div>
                              <div className="clear" />
                            </div>
                          </div>
                          {/* class (.odds_info) */}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-5">
                  <div
                    className="dataTables_info"
                    id="odds-old_info"
                    role="status"
                    aria-live="polite"
                  >
                    Showing 1 to 10 of 257 entries
                  </div>
                </div>
                <div className="col-sm-12 col-md-7">
                  <div
                    className="dataTables_paginate paging_simple_numbers"
                    id="odds-old_paginate"
                  >
                    <ul className="pagination">
                      <li
                        className="paginate_button page-item previous disabled"
                        id="odds-old_previous"
                      >
                        <a
                          href="#"
                          aria-controls="odds-old"
                          data-dt-idx={0}
                          tabIndex={0}
                          className="page-link"
                        >
                          Previous
                        </a>
                      </li>
                      <li className="paginate_button page-item active">
                        <a
                          href="#"
                          aria-controls="odds-old"
                          data-dt-idx={1}
                          tabIndex={0}
                          className="page-link"
                        >
                          1
                        </a>
                      </li>
                      <li className="paginate_button page-item ">
                        <a
                          href="#"
                          aria-controls="odds-old"
                          data-dt-idx={2}
                          tabIndex={0}
                          className="page-link"
                        >
                          2
                        </a>
                      </li>
                      <li className="paginate_button page-item ">
                        <a
                          href="#"
                          aria-controls="odds-old"
                          data-dt-idx={3}
                          tabIndex={0}
                          className="page-link"
                        >
                          3
                        </a>
                      </li>
                      <li className="paginate_button page-item ">
                        <a
                          href="#"
                          aria-controls="odds-old"
                          data-dt-idx={4}
                          tabIndex={0}
                          className="page-link"
                        >
                          4
                        </a>
                      </li>
                      <li className="paginate_button page-item ">
                        <a
                          href="#"
                          aria-controls="odds-old"
                          data-dt-idx={5}
                          tabIndex={0}
                          className="page-link"
                        >
                          5
                        </a>
                      </li>
                      <li
                        className="paginate_button page-item disabled"
                        id="odds-old_ellipsis"
                      >
                        <a
                          href="#"
                          aria-controls="odds-old"
                          data-dt-idx={6}
                          tabIndex={0}
                          className="page-link"
                        >
                          …
                        </a>
                      </li>
                      <li className="paginate_button page-item ">
                        <a
                          href="#"
                          aria-controls="odds-old"
                          data-dt-idx={7}
                          tabIndex={0}
                          className="page-link"
                        >
                          26
                        </a>
                      </li>
                      <li
                        className="paginate_button page-item next"
                        id="odds-old_next"
                      >
                        <a
                          href="#"
                          aria-controls="odds-old"
                          data-dt-idx={8}
                          tabIndex={0}
                          className="page-link"
                        >
                          Next
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="odds_pager">
            <ul className="sch_tabs">
              <li className="odds_powered_by d-block d-md-none">
                powered by{" "}
                <span style={{ display: "inline-block" }}>mvpboxing.com</span>
              </li>
            </ul>
            <div className="clear" />
          </div>
          {/* ends (.odds_pager) */}
          <div className="oddsText px-1">
            <p>What is point spread, moneyline and future? click here</p>
            <div>
              <strong>MONEY -</strong> without a point spread to pick ina
              one-on-one battle, wagering typically involves moneylines(much
              like hockey or basketball) where you pick one fighter{" "}
              <u>to win</u>. The boxer or MMA artist you choose only has to win
              the fight. The negative value indicates the favourite (-150) and
              the positive value indicates the underdog (+130). It&apos;s
              easiest to picture the number 100 sitting in the middle of these
              two values. For example, if you want to bet a - 150 MMA favourite,
              you would wager $150 in order to win $100. On a boxing underdog,
              you would risk $100 and win $130 if the underdog wins. It&apos;s a
              simple way to have the risk-reward scenario. Other forms of odds
              such as over-under rounds (will a boxing match last longer than
              6.5 rounds or over before then) are often available close to{" "}
              <u>fight night</u>
              <div className="citation">
                Odds aggregated and delivered by MVPBOXING.COM
              </div>
            </div>
          </div>
          {/* ends (.oddsText) */}
          <div className="content-separator">&nbsp;</div>
          {/* ends (.content-separator) */}
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
                <i className="fa fa-comments-o" aria-hidden="true" />{" "}
                <span id="total_comments">0</span> <span>Comments</span>
              </div>
              <div id="share-block" className="col-5 text-right pr-1">
                <i className="fa fa-share-alt" aria-hidden="true" /> Share
              </div>
            </div>
            <div className="comment-block">
              <div className="social-share-block" style={{ display: "none" }}>
                {/* AddToAny BEGIN */}
                <span
                  className="social-icons a2a_kit a2a_kit_size_32 a2a_default_style"
                  style={{ lineHeight: 32 }}
                >
                  <a
                    className="a2a_button_facebook"
                    href="/#facebook"
                    title="Facebook"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    <span
                      className="a2a_svg a2a_s__default a2a_s_facebook"
                      style={{ backgroundColor: "rgb(8, 102, 255)" }}
                    >
                      <svg
                        focusable="false"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                      >
                        <path
                          fill="#fff"
                          d="M28 16c0-6.627-5.373-12-12-12S4 9.373 4 16c0 5.628 3.875 10.35 9.101 11.647v-7.98h-2.474V16H13.1v-1.58c0-4.085 1.849-5.978 5.859-5.978.76 0 2.072.15 2.608.298v3.325c-.283-.03-.775-.045-1.386-.045-1.967 0-2.728.745-2.728 2.683V16h3.92l-.673 3.667h-3.247v8.245C23.395 27.195 28 22.135 28 16"
                        />
                      </svg>
                    </span>
                    <span className="a2a_label">Facebook</span>
                  </a>
                  <a
                    className="a2a_button_twitter"
                    href="/#twitter"
                    title="Twitter"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    <span
                      className="a2a_svg a2a_s__default a2a_s_twitter"
                      style={{ backgroundColor: "rgb(29, 155, 240)" }}
                    >
                      <svg
                        focusable="false"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                      >
                        <path
                          fill="#FFF"
                          d="M28 8.557a10 10 0 0 1-2.828.775 4.93 4.93 0 0 0 2.166-2.725 9.7 9.7 0 0 1-3.13 1.194 4.92 4.92 0 0 0-3.593-1.55 4.924 4.924 0 0 0-4.794 6.049c-4.09-.21-7.72-2.17-10.15-5.15a4.94 4.94 0 0 0-.665 2.477c0 1.71.87 3.214 2.19 4.1a5 5 0 0 1-2.23-.616v.06c0 2.39 1.7 4.38 3.952 4.83-.414.115-.85.174-1.297.174q-.476-.001-.928-.086a4.935 4.935 0 0 0 4.6 3.42 9.9 9.9 0 0 1-6.114 2.107q-.597 0-1.175-.068a13.95 13.95 0 0 0 7.55 2.213c9.056 0 14.01-7.507 14.01-14.013q0-.32-.015-.637c.96-.695 1.795-1.56 2.455-2.55z"
                        />
                      </svg>
                    </span>
                    <span className="a2a_label">Twitter</span>
                  </a>
                  <a
                    className="a2a_button_whatsapp"
                    href="/#whatsapp"
                    title="WhatsApp"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    <span
                      className="a2a_svg a2a_s__default a2a_s_whatsapp"
                      style={{ backgroundColor: "rgb(18, 175, 10)" }}
                    >
                      <svg
                        focusable="false"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                      >
                        <path
                          fill="#FFF"
                          fillRule="evenodd"
                          d="M16.21 4.41C9.973 4.41 4.917 9.465 4.917 15.7c0 2.134.592 4.13 1.62 5.832L4.5 27.59l6.25-2.002a11.24 11.24 0 0 0 5.46 1.404c6.234 0 11.29-5.055 11.29-11.29 0-6.237-5.056-11.292-11.29-11.292m0 20.69c-1.91 0-3.69-.57-5.173-1.553l-3.61 1.156 1.173-3.49a9.35 9.35 0 0 1-1.79-5.512c0-5.18 4.217-9.4 9.4-9.4s9.397 4.22 9.397 9.4c0 5.188-4.214 9.4-9.398 9.4zm5.293-6.832c-.284-.155-1.673-.906-1.934-1.012-.265-.106-.455-.16-.658.12s-.78.91-.954 1.096c-.176.186-.345.203-.628.048-.282-.154-1.2-.494-2.264-1.517-.83-.795-1.373-1.76-1.53-2.055s0-.445.15-.584c.134-.124.3-.326.45-.488.15-.163.203-.28.306-.47.104-.19.06-.36-.005-.506-.066-.147-.59-1.587-.81-2.173-.218-.586-.46-.498-.63-.505-.168-.007-.358-.038-.55-.045-.19-.007-.51.054-.78.332-.277.274-1.05.943-1.1 2.362-.055 1.418.926 2.826 1.064 3.023.137.2 1.874 3.272 4.76 4.537 2.888 1.264 2.9.878 3.43.85.53-.027 1.734-.633 2-1.297s.287-1.24.22-1.363c-.07-.123-.26-.203-.54-.357z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="a2a_label">WhatsApp</span>
                  </a>
                  <a
                    className="a2a_button_facebook_messenger"
                    href="/#facebook_messenger"
                    title="Facebook Messenger"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    <span
                      className="a2a_svg a2a_s__default a2a_s_facebook_messenger"
                      style={{ backgroundColor: "rgb(0, 132, 255)" }}
                    >
                      <svg
                        focusable="false"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                      >
                        <path
                          fill="#FFF"
                          d="M16 5C9.986 5 5.11 9.56 5.11 15.182c0 3.2 1.58 6.054 4.046 7.92V27l3.716-2.06c.99.276 2.04.425 3.128.425 6.014 0 10.89-4.56 10.89-10.183S22.013 5 16 5m1.147 13.655L14.33 15.73l-5.423 3 5.946-6.31 2.816 2.925 5.42-3-5.946 6.31z"
                        />
                      </svg>
                    </span>
                    <span className="a2a_label">Messenger</span>
                  </a>
                  <a
                    className="a2a_button_reddit"
                    href="/#reddit"
                    title="Reddit"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    <span
                      className="a2a_svg a2a_s__default a2a_s_reddit"
                      style={{ backgroundColor: "rgb(255, 69, 0)" }}
                    >
                      <svg
                        focusable="false"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                      >
                        <path
                          fill="#fff"
                          d="M28.543 15.774a2.953 2.953 0 0 0-2.951-2.949 2.88 2.88 0 0 0-1.9.713 14.1 14.1 0 0 0-6.85-2.044l1.38-4.349 3.768.884a2.452 2.452 0 1 0 .24-1.176l-4.274-1a.6.6 0 0 0-.709.4l-1.659 5.224a14.3 14.3 0 0 0-7.316 2.029 2.9 2.9 0 0 0-1.872-.681 2.942 2.942 0 0 0-1.618 5.4 5 5 0 0 0-.062.765c0 4.158 5.037 7.541 11.229 7.541s11.22-3.383 11.22-7.541a5 5 0 0 0-.053-.706 2.96 2.96 0 0 0 1.427-2.51m-18.008 1.88a1.753 1.753 0 0 1 1.73-1.74 1.73 1.73 0 0 1 1.709 1.74 1.71 1.71 0 0 1-1.709 1.711 1.733 1.733 0 0 1-1.73-1.711m9.565 4.968a5.57 5.57 0 0 1-4.081 1.272h-.032a5.58 5.58 0 0 1-4.087-1.272.6.6 0 0 1 .844-.854 4.5 4.5 0 0 0 3.238.927h.032a4.5 4.5 0 0 0 3.237-.927.6.6 0 1 1 .844.854zm-.331-3.256a1.726 1.726 0 1 1 1.709-1.712 1.717 1.717 0 0 1-1.712 1.712z"
                        />
                      </svg>
                    </span>
                    <span className="a2a_label">Reddit</span>
                  </a>
                  <a
                    className="a2a_button_pinterest"
                    href="/#pinterest"
                    title="Pinterest"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    <span
                      className="a2a_svg a2a_s__default a2a_s_pinterest"
                      style={{ backgroundColor: "rgb(230, 0, 35)" }}
                    >
                      <svg
                        focusable="false"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                      >
                        <path
                          fill="#fff"
                          d="M15.995 4C9.361 4 4 9.37 4 15.995c0 5.084 3.16 9.428 7.622 11.176-.109-.948-.198-2.41.039-3.446.217-.938 1.402-5.963 1.402-5.963s-.356-.72-.356-1.777c0-1.668.968-2.912 2.172-2.912 1.027 0 1.52.77 1.52 1.688 0 1.027-.65 2.567-.996 3.998-.287 1.195.602 2.172 1.777 2.172 2.132 0 3.771-2.25 3.771-5.489 0-2.873-2.063-4.877-5.015-4.877-3.416 0-5.42 2.557-5.42 5.203 0 1.027.395 2.132.888 2.735a.36.36 0 0 1 .08.345c-.09.375-.297 1.195-.336 1.363-.05.217-.178.266-.405.158-1.481-.711-2.409-2.903-2.409-4.66 0-3.781 2.745-7.257 7.928-7.257 4.156 0 7.394 2.962 7.394 6.931 0 4.137-2.606 7.464-6.22 7.464-1.214 0-2.36-.632-2.744-1.383l-.75 2.854c-.267 1.046-.998 2.35-1.491 3.149a12 12 0 0 0 3.554.533C22.629 28 28 22.63 28 16.005 27.99 9.37 22.62 4 15.995 4"
                        />
                      </svg>
                    </span>
                    <span className="a2a_label">Pinterest</span>
                  </a>
                  <a
                    className="a2a_button_email"
                    href="/#email"
                    title="Email"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    <span
                      className="a2a_svg a2a_s__default a2a_s_email"
                      style={{ backgroundColor: "rgb(136, 137, 144)" }}
                    >
                      <svg
                        focusable="false"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                      >
                        <path
                          fill="#fff"
                          d="M27 21.775v-9.9s-10.01 6.985-10.982 7.348C15.058 18.878 5 11.875 5 11.875v9.9c0 1.375.293 1.65 1.65 1.65h18.7c1.393 0 1.65-.242 1.65-1.65m-.017-11.841c0-1.002-.291-1.359-1.633-1.359H6.65c-1.38 0-1.65.429-1.65 1.43l.016.154s9.939 6.842 11 7.216C17.14 16.941 27 10.005 27 10.005z"
                        />
                      </svg>
                    </span>
                    <span className="a2a_label">Email</span>
                  </a>
                  <div style={{ clear: "both" }} />
                </span>
                {/* AddToAny END */}{" "}
              </div>
              <div
                className="mvp-comment-box comments-container jquery-comments mobile responsive rendered"
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
                    <div className="control-row" style={{ display: "none" }}>
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
                    <li data-sort-key="newest" data-container-name="comments">
                      New
                    </li>
                    <li data-sort-key="oldest" data-container-name="comments">
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
                      <li data-sort-key="newest" data-container-name="comments">
                        New
                      </li>
                      <li data-sort-key="oldest" data-container-name="comments">
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
                  <ul id="comment-list" className="main">
                    <li data-id={57} className="comment by-admin">
                      <div className="comment-wrapper">
                        <div className="collapse-block">
                          <button
                            title="Collapse"
                            className="action collapseElem"
                            style={{ cursor: "not-allowed" }}
                          >
                            <i
                              className="fas fa-minus collapseElement"
                              aria-hidden="true"
                            />
                          </button>
                          <button
                            title="Login to Flag as inappropriate"
                            className="action flag"
                            style={{ cursor: "not-allowed" }}
                          >
                            <span className="flag-count">0</span>
                            <i className="fa fa-flag" aria-hidden="true" />
                          </button>
                        </div>
                        <div
                          className="profile-picture round"
                          data-user-id={1}
                          style={{
                            backgroundImage:
                              'url("https://graph.facebook.com/2704411542926789/picture?type=normal")',
                          }}
                        />
                        <div className="name highlight-font-bold">
                          <span data-user-id={1}>Victor M. Masson</span>
                        </div>
                        <time data-original="2020-08-07 19:29:00 +00:00">
                          5 years ago
                        </time>
                        <div className="wrapper">
                          <div className="content">
                            Chris Billam-Smith vs Nathan Thorley seems to an
                            interesting fight
                          </div>
                          <span className="actions">
                            <button
                              title="Login to reply"
                              className="action reply"
                              type="button"
                              style={{ cursor: "not-allowed" }}
                            >
                              <span className="reply-text">Reply</span>
                              <i className="fa fa-reply" aria-hidden="true" />
                            </button>
                            <span
                              className="separator"
                              style={{ cursor: "not-allowed" }}
                            >
                              ·
                            </span>
                            <button
                              title="Login to Like Comment"
                              className="action upvote"
                              style={{ cursor: "not-allowed" }}
                            >
                              <span className="upvote-count">0</span>
                              <i
                                className="fa fa-thumbs-up"
                                aria-hidden="true"
                              />
                            </button>
                            <span
                              className="separator"
                              style={{ cursor: "not-allowed" }}
                            >
                              ·
                            </span>
                            <button
                              title="Login to Dislike Comment"
                              className="action downvote"
                              style={{ cursor: "not-allowed" }}
                            >
                              <span className="downvote-count">0</span>
                              <i
                                className="fa fa-thumbs-down"
                                aria-hidden="true"
                              />
                            </button>
                          </span>
                        </div>
                      </div>
                      <ul className="child-comments" />
                    </li>
                  </ul>
                </div>
              </div>
              {/* ends (.content-separator2) */}
            </div>
          </div>
          {/* <div class="noDataInfo">No Odds recently.</div> */}
        </div>
        {/* ends (.left_content_area) */}
      </div>
    </div>
  );
};

export default BoxingOdds;
