"use client";

import React, { useState, useEffect } from "react";
import $ from "jquery";

const Location = (props) => {
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
    <div className="mvpBgContainer mvp_container" id="newsMainContents">
      <div className="service_content contentShadow" style={{ minHeight: 65 }}>
        <div id="chicago" className="mvps_location">
          <div className="row mx-0 px-2" id="location_information">
            <div className="location_tabs left col-12 col-md-2">
              <ul>
                <li>
                  <a href="https://www.mvpboxing.com/location/chicago">
                    Chicago
                  </a>
                </li>
                <li>
                  <a href="https://www.mvpboxing.com/location/new-york">
                    New York
                  </a>
                </li>
                <li>
                  <a href="https://www.mvpboxing.com/location/las-vegas">
                    Las Vegas
                  </a>
                </li>
                <li>
                  <a href="https://www.mvpboxing.com/location/los-angeles">
                    Los Angeles
                  </a>
                </li>
              </ul>
            </div>
            {/* ends (.location_tabs) */}
            <div className="location_details col-12 col-md-10">
              <div id="location_socials" className="row mx-0">
                <div className="left location_title col-12 col-md-5">
                  <span>Chicago</span> Club Location
                </div>
                <div className="right location_socio col-12 col-md-7">
                  <div className="text-center social-sharing-info bottom-social-share">
                    <p className="social-share-block">
                      <i
                        className="share-icon fas fa-share-alt"
                        aria-hidden="true"
                      />
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
                      </span>
                    </p>
                    <div style={{ clear: "both" }} />
                    {/* AddToAny END */} <p />
                  </div>
                </div>
                <div className="clear" />
              </div>
              {/* ends (#location_socials) */}
              <div id="location_address" className="row mx-0">
                <div className="left addr_detail px-1 col12 col-md-4">
                  <div className="row">
                    <div className="col-4 head_1 pr-0">
                      <b>MON-THU</b>
                    </div>
                    <div className="col-8 head_info_1">6:00AM TO 10:00PM</div>
                  </div>
                  <div className="row">
                    <div className="col-4 head_1">
                      <b>FRI</b>
                    </div>
                    <div className="col-8 head_info_1">6:00AM TO 9:00PM</div>
                  </div>
                  <div className="row">
                    <div className="col-4 head_1">
                      <b>SUN</b>
                    </div>
                    <div className="col-8 head_info_1">7:00AM TO 8:00PM</div>
                  </div>
                  <div className="row mx-0 mt-2">
                    <div className="head_1 head_2">
                      <b>PRIVATE LESSONS BY APPOINTMENT ONLY</b>
                    </div>
                  </div>
                  <div className="row mx-0 mt-2">
                    <div className="head_1">
                      <b>ADDRESS</b>
                    </div>
                  </div>
                  <div className="row mx-0">
                    <div className="head_info_1">
                      360 E. South Water St. <br />
                      Chicago, IL 60601
                    </div>
                  </div>
                  <div className="row mx-0 mt-2">
                    <div className="head_1">
                      <b>PHONE</b>
                    </div>
                  </div>
                  <div className="row mx-0">
                    <div className="head_info_1">
                      <a href="tel:312-399-5390" className="black">
                        <i className="fa fa-phone mr-3" aria-hidden="true" />
                        312-399-5390
                      </a>
                    </div>
                  </div>
                  <div className="row mx-0 mt-2">
                    <div className="head_1">
                      <b>GENERAL MANAGER</b>
                    </div>
                  </div>
                  <div className="row mx-0">
                    <div className="head_info_1">Manny Masson</div>
                  </div>
                </div>
                <div className="right location_on_google col-12 col-md-8">
                  <iframe
                    id="map_canvas"
                    frameBorder={0}
                    style={{ border: 0 }}
                    src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ9UgfJFPTD4gR6RBLKxyiSmE&key=AIzaSyDPJ387cWKeWvLZTO_6Oiuh7v_rJSGnhq8&zoom=17"
                    allowFullScreen
                  />
                </div>
              </div>
              {/* ends (#location_address) */}
            </div>
            {/* ends (.location_details) */}
            <div className="clear" />
          </div>
          {/* ends (#location_information) */}
          <div id="location_form">
            <div className="loc_form_title text-center w-100">
              You may send the message using the contact form below.
            </div>
            <div
              className="location_err_msg"
              style={{
                fontSize: 12,
                textTransform: "capitalize",
                textAlign: "center",
                fontWeight: "bold",
              }}
            />
            <div className="locat_contact_form">
              <form
                id="location-form"
                action="https://www.mvpboxing.com/mvp/sendLocationMail"
                method="post"
              >
                <div className="row">
                  <div className="form-group col-md-6 row mx-0 col-12">
                    <label
                      htmlFor="first_name"
                      className="label_name px-1 pb-0 mb-0 col-12"
                    >
                      first name<span>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control col-md-9  validation form_err"
                      name="first_name"
                      id="first_name"
                    />
                    <label
                      id="first_name-error"
                      className="error"
                      htmlFor="first_name"
                    />
                  </div>
                  <div className="form-group col-md-6 row mx-0 col-12">
                    <label
                      htmlFor="last_name"
                      className="label_name px-1 pb-0 mb-0 col-12"
                    >
                      last name<span>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control col-md-9  validation form_err"
                      name="last_name"
                      id="last_name"
                    />
                    <label
                      id="last_name-error"
                      className="error"
                      htmlFor="last_name"
                    />
                  </div>
                  <div className="form-group col-md-6 row mx-0 col-12">
                    <label
                      htmlFor="email"
                      className="label_name px-1 pb-0 mb-0 col-12"
                    >
                      email<span>*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control col-md-9  validation form_err"
                      name="email"
                      id="email"
                    />
                    <label id="email-error" className="error" htmlFor="email" />
                  </div>
                  <div className="form-group col-md-6 row mx-0 col-12">
                    <label
                      htmlFor="phone_number"
                      className="label_name px-1 pb-0 mb-0 col-12"
                    >
                      phone number
                    </label>
                    <input
                      type="text"
                      className="form-control col-md-9  validation form_err"
                      name="phone_number"
                      id="phone_number"
                    />
                    <label
                      id="phone_number-error"
                      className="error"
                      htmlFor="phone_number"
                    />
                  </div>
                  <div className="form-group col-md-6 row mx-0 col-12">
                    <label
                      htmlFor="city"
                      className="label_name px-1 pb-0 mb-0 col-12"
                    >
                      city<span>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control col-md-9  validation form_err"
                      name="city"
                      id="city"
                    />
                    <label id="city-error" className="error" htmlFor="city" />
                  </div>
                  <div className="form-group col-md-6 row mx-0 col-12">
                    <label
                      htmlFor="state_province"
                      className="label_name px-1 pb-0 mb-0 col-12"
                    >
                      state/province
                    </label>
                    <input
                      type="text"
                      className="form-control col-md-9  validation form_err"
                      name="state_province"
                      id="state_province"
                    />
                    <label
                      id="state_province-error"
                      className="error"
                      htmlFor="state_province"
                    />
                  </div>
                  <div className="form-group col-md-6 row mx-0 col-12">
                    <select
                      name="region"
                      className="form-control col-md-9  validation form_err"
                      id="region"
                    >
                      <option value> -- Select a region -- </option>
                      <option value="america">Americas</option>
                      <option value="emea">EMEA</option>
                      <option value="asia">Asia Pacific</option>
                    </select>
                    <label
                      id="region-error"
                      className="error"
                      htmlFor="region"
                    />
                  </div>
                </div>
                <div className="form-group row col-md-6 mx-0 px-0 col-12">
                  <label
                    htmlFor="state_province"
                    className="label_name px-1 pb-0 mb-0 col-12"
                  >
                    subject<span>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control col-md-9  validation form_err"
                    name="subject"
                    id="subject"
                  />
                  <label
                    id="subject-error"
                    className="error"
                    htmlFor="subject"
                  />
                </div>
                <div className="form-group row col-md-6 mx-0 px-0 col-12">
                  <label
                    htmlFor="state_province"
                    className="label_name px-1 pb-0 mb-0 col-12"
                  >
                    your comments<span>*</span>
                  </label>
                  <textarea
                    type="text"
                    rows={5}
                    cols={15}
                    className="form-control col-md-9 chkCharacters validation form_err"
                    name="query_msg"
                    id="query_msg"
                    defaultValue={""}
                  />
                  <label
                    id="query_msg-error"
                    className="error"
                    htmlFor="query_msg"
                  />
                  <div className="characters_left">
                    (<span id="chars">1000</span> characters left)
                  </div>
                </div>
                <div className="row col-md-6 mx-0 px-0 col-12">
                  <div
                    className="g-recaptcha w-100"
                    data-sitekey="6LcaChsUAAAAAHGA3btBzj_Bx2w-MMQbw53PwcRG"
                    data-callback="recaptchaCallback"
                  >
                    <div style={{ width: 304, height: 78 }}>
                      <div>
                        <iframe
                          title="reCAPTCHA"
                          width={304}
                          height={78}
                          role="presentation"
                          frameBorder={0}
                          scrolling="no"
                          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                          src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LcaChsUAAAAAHGA3btBzj_Bx2w-MMQbw53PwcRG&co=aHR0cHM6Ly93d3cubXZwYm94aW5nLmNvbTo0NDM.&hl=en&v=w0_qmZVSdobukXrBwYd9dTF7&size=normal&cb=ozkqvnlha9cp"
                        />
                      </div>
                      <textarea
                        id="g-recaptcha-response"
                        name="g-recaptcha-response"
                        className="g-recaptcha-response"
                        style={{
                          width: 250,
                          height: 40,
                          border: "1px solid rgb(193, 193, 193)",
                          margin: "10px 25px",
                          padding: 0,
                          resize: "none",
                          display: "none",
                        }}
                        defaultValue={""}
                      />
                    </div>
                    <iframe style={{ display: "none" }} />
                  </div>
                  {/* <div class="g-recaptcha w-100" data-sitekey="6Lcgpe4UAAAAABpiYg3wC0gm53wrjyE46SIUIK5P" data-callback="recaptchaCallback"></div> */}
                </div>
                <input
                  type="hidden"
                  name="location_code"
                  id="location_code"
                  defaultValue="chicago"
                />
                <input
                  type="hidden"
                  name="location_name"
                  id="location_name"
                  defaultValue="Chicago"
                />
                <div className="form-group">
                  <input
                    type="submit"
                    className="form-control mx-auto  validation form_err"
                    name="submit_info"
                    id="submit_info"
                    defaultValue="SUBMIT"
                  />
                  <div className="popup_box">
                    <p />
                  </div>
                </div>
              </form>
            </div>
            {/* ends (.locat_contact_form) */}
          </div>
          {/* ends (#location_form) */}
        </div>
        {/* ends (.mvps_location) */}
      </div>
    </div>
  );
};

export default Location;
