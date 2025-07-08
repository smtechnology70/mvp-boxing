"use client";

import { useEffect, useState } from "react";

import GLOBALS from "@/server/Globals";

import $ from "jquery";

const PhysicalMentalBenefits = (props) => {
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
      <div className="article_area_content">
        <h1 className="titles_article border_titles_article">
          PHYSICAL &amp; MENTAL BENEFITS
        </h1>
        <div
          className="workout_content borderNone text-left size-n-col11 margin-bottom-0"
          style={{ textAlign: "justify" }}
        >
          <div className="mainContentBlock section sectionMain">
            <div id="accordion" className="accordion">
              <div className="card mb-1">
                <a
                  className="text-left header"
                  data-toggle="collapse"
                  data-target="#collapse0"
                  aria-expanded="true"
                  aria-controls="collapse0"
                >
                  <div className="card-header" id="heading0">
                    <h5 className="mb-0 question">
                      <strong>Introduction</strong>
                      <span className="right">
                        <i
                          className="arrow fa fa-arrow-right"
                          aria-hidden="true"
                        />
                      </span>
                    </h5>
                  </div>
                </a>
                <div
                  id="collapse0"
                  className="collapse show"
                  aria-labelledby="heading0"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <strong>
                      Sharing knowledge and helping others reach the full extent
                      of their potential is what we do best.
                    </strong>
                    <br />
                    <br />
                    This is why Manny Masson has developed proven teaching
                    methods that will not only help you learn quickly and easily
                    but also provide a wide range of benefits for students of
                    all ages.
                  </div>
                </div>
              </div>
              <div className="card mb-1">
                <a
                  className="text-left header"
                  data-toggle="collapse"
                  data-target="#collapse1"
                  aria-expanded="true"
                  aria-controls="collapse1"
                >
                  <div className="card-header" id="heading1">
                    <h5 className="mb-0 question">
                      <strong>Physical benefits</strong>
                      <span className="right">
                        <i
                          className="arrow fa fa-arrow-right"
                          aria-hidden="true"
                        />
                      </span>
                    </h5>
                  </div>
                </a>
                <div
                  id="collapse1"
                  className="collapse"
                  aria-labelledby="heading1"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <ul className="pl-1">
                      <li>
                        <i
                          className="fa fa-check-square-o"
                          aria-hidden="true"
                        />
                        &nbsp;Improved reflexes and coordination
                      </li>
                      <li>
                        <i
                          className="fa fa-check-square-o"
                          aria-hidden="true"
                        />
                        &nbsp;Increased speed and power
                      </li>
                      <li>
                        <i
                          className="fa fa-check-square-o"
                          aria-hidden="true"
                        />
                        &nbsp;Increased energy level
                      </li>
                      <li>
                        <i
                          className="fa fa-check-square-o"
                          aria-hidden="true"
                        />
                        &nbsp;Improved appearance and muscle tone
                      </li>
                      <li>
                        <i
                          className="fa fa-check-square-o"
                          aria-hidden="true"
                        />
                        &nbsp;Increased strength and stamina
                      </li>
                      <li>
                        <i
                          className="fa fa-check-square-o"
                          aria-hidden="true"
                        />
                        &nbsp;Better balance and body awareness
                      </li>
                      <li>
                        <i
                          className="fa fa-check-square-o"
                          aria-hidden="true"
                        />
                        &nbsp;Improved flexibility
                      </li>
                      <li>
                        <i
                          className="fa fa-check-square-o"
                          aria-hidden="true"
                        />
                        &nbsp;Weight loss and control
                      </li>
                      <li>
                        <i
                          className="fa fa-check-square-o"
                          aria-hidden="true"
                        />
                        &nbsp;Better health and longevity
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card mb-1">
                <a
                  className="text-left header"
                  data-toggle="collapse"
                  data-target="#collapse2"
                  aria-expanded="true"
                  aria-controls="collapse2"
                >
                  <div className="card-header" id="heading2">
                    <h5 className="mb-0 question">
                      <strong>Mental benefits</strong>
                      <span className="right">
                        <i
                          className="arrow fa fa-arrow-right"
                          aria-hidden="true"
                        />
                      </span>
                    </h5>
                  </div>
                </a>
                <div
                  id="collapse2"
                  className="collapse"
                  aria-labelledby="heading2"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <ul className="pl-1">
                      <li>
                        <i
                          className="fa fa-check-square-o"
                          aria-hidden="true"
                        />
                        &nbsp;Improved self-image and self-esteem
                      </li>
                      <li>
                        <i
                          className="fa fa-check-square-o"
                          aria-hidden="true"
                        />
                        &nbsp;Increased self-confidence and positive attitude
                      </li>
                      <li>
                        <i
                          className="fa fa-check-square-o"
                          aria-hidden="true"
                        />
                        &nbsp;
                        {`Greater self-discipline and a "can do" attitude`}
                      </li>
                      <li>
                        <i
                          className="fa fa-check-square-o"
                          aria-hidden="true"
                        />
                        &nbsp;Improved concentration, work and study habits
                      </li>
                      <li>
                        <i
                          className="fa fa-check-square-o"
                          aria-hidden="true"
                        />
                        &nbsp;Stress reduction and increased levels of
                        relaxation
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card mb-1">
                <a
                  className="text-left header"
                  data-toggle="collapse"
                  data-target="#collapse3"
                  aria-expanded="true"
                  aria-controls="collapse3"
                >
                  <div className="card-header" id="heading3">
                    <h5 className="mb-0 question">
                      <strong>Self Confidence</strong>
                      <span className="right">
                        <i
                          className="arrow fa fa-arrow-right"
                          aria-hidden="true"
                        />
                      </span>
                    </h5>
                  </div>
                </a>
                <div
                  id="collapse3"
                  className="collapse"
                  aria-labelledby="heading3"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Know that you possess the knowledge that you are able to
                    protect yourself and your loved ones should a life
                    threatening situation arise.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-separator">&nbsp;</div>
          {/* ends (.content-separator) */}
          <div className="socialInfo">
            {/* <div class="left back-to-info">
          <a href="#" id="goTop" title="Back To Top"><i class="fa fa-arrow-circle-up" aria-hidden="true"></i></a>
      </div> */}
            <div className="text-center social-sharing-info bottom-social-share">
              <p className="social-share-block">
                <i className="share-icon fas fa-share-alt" aria-hidden="true" />
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
                    {/* <span className="a2a_label">Facebook</span> */}
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
                    {/* <span className="a2a_label">Twitter</span> */}
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
                    {/* <span className="a2a_label">WhatsApp</span> */}
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
                    {/* <span className="a2a_label">Messenger</span> */}
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
                    {/* <span className="a2a_label">Reddit</span> */}
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
                    {/* <span className="a2a_label">Pinterest</span> */}
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
                    {/* <span className="a2a_label">Email</span> */}
                  </a>
                </span>
              </p>
              <div style={{ clear: "both" }} />
              {/* AddToAny END */} <p />
            </div>
          </div>
          {/* ends (.social-sharing-info) */}
          <div className="clear" />
        </div>
        {/* ends (.socialInfo) */}
      </div>
    </div>
  );
};

export default PhysicalMentalBenefits;
