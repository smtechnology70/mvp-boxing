"use client";

import React, { useEffect, useState } from "react";
import HoverPrefetchLink from "@/components/HoverPrefetchLink";
// import Image from 'next/image'; // Uncomment if you want to use next/image for local images
import img2 from "@/assets/img/gold_crown.png";
import img3 from "@/assets/img/white-arrow-down.png";

const LANGUAGES = [
  { value: "en_lt", text: "LATIN AMERICA", img: "/assets/img/wold.jpg" },
  { value: "es", text: "España", img: "/assets/img/España.jpg" },
  { value: "en", text: "UNITED STATES", img: "/assets/img/Latin America.jpg" },
  { value: "au", text: "BRASIL", img: "/assets/img/Brazil.jpg" },
  { value: "uk", text: "RUSSIA", img: "/assets/img/Russia.jpg" },
  { value: "cn", text: "POLAND", img: "/assets/img/Poland.jpg" },
  { value: "de", text: "GERMANY", img: "/assets/img/Germany.jpg" },
  { value: "dk", text: "CHINA", img: "/assets/img/China.jpg" },
  { value: "fr", text: "JAPAN", img: "/assets/img/Japan.jpg" },
  { value: "gr", text: "SOUTH KOREA", img: "/assets/img/Korea.jpg" },
];

export default function Footer() {
  // State for language pickers
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [selectedLangMobile, setSelectedLangMobile] = useState(LANGUAGES[0]);
  const [showLangDropdownMobile, setShowLangDropdownMobile] = useState(false);

  // Scroll to top handler
  const handleScrollTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Language picker handlers
  const handleLangSelect = (lang) => {
    setSelectedLang(lang);
    setShowLangDropdown(false);
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", lang.value);
    }
  };
  const handleLangSelectMobile = (lang) => {
    setSelectedLangMobile(lang);
    setShowLangDropdownMobile(false);
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", lang.value);
    }
  };

  useEffect(() => {
    // On mount, check localStorage for language
    if (typeof window !== "undefined") {
      const sessionLang = localStorage.getItem("lang");
      if (sessionLang) {
        const found = LANGUAGES.find((l) => l.value === sessionLang);
        if (found) {
          setSelectedLang(found);
          setSelectedLangMobile(found);
        }
      }
    }
  }, []);

  return (
    <footer id="service_footer" className="mvpBgContainer mvp_container">
      <section className="d-none d-md-block d-md-block" id="footer-id">
        <div
          id="bottom_footer"
          className="d-table mx-auto text-center"
          style={{ backgroundColor: "black" }}
        >
          <div className="row nomargin brdr-red">
            <div className="dropdown col-12 text-center">
              <div className="header-country-selector">
                <div className="lang-select">
                  <div className="country-manu">
                    <button
                      className="btn-select-footer"
                      value={selectedLang.value}
                      onClick={() => setShowLangDropdown((v) => !v)}
                      type="button"
                    >
                      <span>{selectedLang.text}</span>
                      {/* {selectedLang.img && (
                        <img
                          src={selectedLang.img}
                          alt={selectedLang.text}
                          style={{ marginLeft: 8, width: 24, height: 16 }}
                        />
                      )} */}
                    </button>
                    <img
                      className="down-arrow-footer"
                      src={img3.src}
                      alt="down arrow"
                      style={{ cursor: "pointer" }}
                      onClick={() => setShowLangDropdown((v) => !v)}
                    />
                  </div>
                  {showLangDropdown && (
                    <div
                      // className="b-footer"
                      style={{
                        position: "absolute",
                        background: "#fff",
                        zIndex: 10,
                      }}
                    >
                      <ul
                        id="footer_country_selector"
                        style={{ listStyle: "none", margin: 0, padding: 0 }}
                      >
                        {LANGUAGES.map((lang) => (
                          <li
                            key={lang.value}
                            style={{ cursor: "pointer", padding: 4 }}
                            onClick={() => handleLangSelect(lang)}
                          >
                            <span>{lang.text}</span>
                            {lang.img && (
                              <img
                                src={lang.img}
                                alt={lang.text}
                                style={{ marginLeft: 8, width: 24, height: 16 }}
                              />
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="footer_contend">
            <div className="footer_item">
              <ul className="footer_item_ul">
                <li className="MVP_BOXING">MVP BOXING</li>
                <li className="footer_item_li" onClick={handleScrollTop}>
                  <HoverPrefetchLink href="/about">About</HoverPrefetchLink>
                </li>
                <li className="footer_item_li" onClick={handleScrollTop}>
                  <HoverPrefetchLink href="/community">
                    Community
                  </HoverPrefetchLink>
                </li>
                <li className="footer_item_li" onClick={handleScrollTop}>
                  <HoverPrefetchLink href="/launchingsoon">
                    Shop
                  </HoverPrefetchLink>
                </li>
              </ul>
            </div>
            <div className="footer_item">
              <ul className="footer_item_ul">
                <li className="MVP_BOXING">HELP</li>
                <li className="footer_item_li" onClick={handleScrollTop}>
                  <HoverPrefetchLink href="/Partnership">
                    Partnership
                  </HoverPrefetchLink>
                </li>
                <li className="footer_item_li" onClick={handleScrollTop}>
                  <HoverPrefetchLink href="/Inquiries">
                    Inquiries
                  </HoverPrefetchLink>
                </li>
                <li className="footer_item_li" onClick={handleScrollTop}>
                  <HoverPrefetchLink href="/Support">Support</HoverPrefetchLink>
                </li>
                <li className="footer_item_li" onClick={handleScrollTop}>
                  <HoverPrefetchLink href="/Sitemap">Sitemap</HoverPrefetchLink>
                </li>
                <li className="footer_item_li" onClick={handleScrollTop}>
                  <HoverPrefetchLink href="/contact">Contact</HoverPrefetchLink>
                </li>
              </ul>
            </div>
            <div className="footer_item">
              <ul className="footer_item_ul">
                <li className="MVP_BOXING">LEGAL</li>
                <li className="footer_item_li" onClick={handleScrollTop}>
                  <HoverPrefetchLink href="/Privacy_Policy">
                    Privacy Policy
                  </HoverPrefetchLink>
                </li>
                <li className="footer_item_li" onClick={handleScrollTop}>
                  <HoverPrefetchLink href="/Terms_of_use">
                    Terms of Use
                  </HoverPrefetchLink>
                </li>
                <li className="footer_item_li" onClick={handleScrollTop}>
                  <HoverPrefetchLink href="/Advertise_With_Us">
                    Advertise With Us
                  </HoverPrefetchLink>
                </li>
                <li className="footer_item_li" onClick={handleScrollTop}>
                  <HoverPrefetchLink href="/Cookie_Policy">
                    Cookie Policy
                  </HoverPrefetchLink>
                </li>
              </ul>
            </div>
            <div className="footer_item">
              <ul className="footer_item_ul">
                <li className="MVP_BOXING">INITIATIVES</li>
                <li className="footer_item_li" onClick={handleScrollTop}>
                  <a
                    target="_blank"
                    className="footer_item_a"
                    href="https://massonfoundation.com"
                    rel="noopener noreferrer"
                  >
                    Masson Foundation
                  </a>
                </li>
              </ul>
            </div>

            <ul className="footer_item_fight">
              <li
                className="hdr-social-icons"
                style={{ float: "none", fontSize: 40 }}
              >
                <a
                  target="_blank"
                  href="http://www.facebook.com/pages/MVP-Boxing/135461625286?ref=ts"
                  title="Facebook"
                  rel="noopener noreferrer"
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
                  rel="noopener noreferrer"
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
                  rel="noopener noreferrer"
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
                  rel="noopener noreferrer"
                >
                  <i
                    className="fab fa-youtube"
                    aria-hidden="true"
                    style={{ border: "1px solid grey", color: "white" }}
                  />
                </a>
                <a
                  target="_blank"
                  href="https://www.tiktok.com/@mvpboxing"
                  title="TikTok"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fa-brands fa-tiktok"
                    aria-hidden="true"
                    style={{ border: "1px solid grey", color: "white" }}
                  />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav"
                  title="linkedin"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fab fa-linkedin-in"
                    aria-hidden="true"
                    style={{ border: "1px solid grey", color: "white" }}
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="row_line_line">
            <div className="row_line" />
          </div>
          <div className="footer_contend_socialicon">
            <div className="footer_text">
              <p className="footer_text_top">
                <HoverPrefetchLink href="/" className="footer-home-link">
                  MVPBOXING.COM
                </HoverPrefetchLink>{" "}
                Masson Media Ventures, LLC. ©2025 All Rights Reserved.
              </p>
              <p className="footer_text_button">
                Use of This Site Constitutes Acceptance of Our Terms of Use and
                Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="footer-section" className="d-block d-md-none d-md-none">
        <div id="footer-button" className="bg-black">
          <div className="row nomargin brdr-red">
            <div className="dropdown col-12 text-center">
              <div className="header-country-selector">
                <div className="lang-select">
                  <div className="country-manu">
                    <button
                      className="btn-select-footer_1"
                      value={selectedLangMobile.value}
                      onClick={() => setShowLangDropdownMobile((v) => !v)}
                      type="button"
                    >
                      <span>{selectedLangMobile.text}</span>
                      {/* {selectedLangMobile.img && (
                        <img
                          src={selectedLangMobile.img}
                          alt={selectedLangMobile.text}
                          style={{ marginLeft: 8, width: 24, height: 16 }}
                        />
                      )} */}
                    </button>
                    <img
                      className="down-arrow-footer_1"
                      src={img3.src}
                      alt="down arrow"
                      style={{ cursor: "pointer" }}
                      onClick={() => setShowLangDropdownMobile((v) => !v)}
                    />
                  </div>
                  {showLangDropdownMobile && (
                    <div
                      // className="b-footer_1"
                      style={{
                        position: "absolute",
                        background: "#fff",
                        zIndex: 10,
                      }}
                    >
                      <ul
                        id="footer_country_selector_1"
                        style={{ listStyle: "none", margin: 0, padding: 0 }}
                      >
                        {LANGUAGES.map((lang) => (
                          <li
                            key={lang.value}
                            style={{ cursor: "pointer", padding: 4 }}
                            onClick={() => handleLangSelectMobile(lang)}
                          >
                            <span>{lang.text}</span>
                            {lang.img && (
                              <img
                                src={lang.img}
                                alt={lang.text}
                                style={{ marginLeft: 8, width: 24, height: 16 }}
                              />
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_contend">
          <div className="footer_item">
            <ul className="footer_item_ul">
              <li className="MVP_BOXING">MVP BOXING</li>
              <li className="footer_item_li" onClick={handleScrollTop}>
                <HoverPrefetchLink href="/about" className="footer_item_a">
                  About
                </HoverPrefetchLink>
              </li>
              <li className="footer_item_li" onClick={handleScrollTop}>
                <HoverPrefetchLink href="/community" className="footer_item_a">
                  Community
                </HoverPrefetchLink>
              </li>
              <li className="footer_item_li" onClick={handleScrollTop}>
                <HoverPrefetchLink
                  href="/launchingsoons"
                  className="footer_item_a"
                >
                  Shop
                </HoverPrefetchLink>
              </li>
            </ul>
          </div>
          <div className="footer_item">
            <ul className="footer_item_ul">
              <li className="MVP_BOXING">HELP</li>
              <li className="footer_item_li" onClick={handleScrollTop}>
                <HoverPrefetchLink
                  href="/Partnership"
                  className="footer_item_a"
                >
                  Partnership
                </HoverPrefetchLink>
              </li>
              <li className="footer_item_li" onClick={handleScrollTop}>
                <HoverPrefetchLink href="/Inquiries" className="footer_item_a">
                  Inquiries
                </HoverPrefetchLink>
              </li>
              <li className="footer_item_li" onClick={handleScrollTop}>
                <HoverPrefetchLink href="/Sitemap" className="footer_item_a">
                  Sitemap
                </HoverPrefetchLink>
              </li>
              <li className="footer_item_li" onClick={handleScrollTop}>
                <HoverPrefetchLink href="/contact-us" className="footer_item_a">
                  Contact
                </HoverPrefetchLink>
              </li>
            </ul>
          </div>
          <div className="footer_item">
            <ul className="footer_item_ul">
              <li className="MVP_BOXING">LEGAL</li>
              <li className="footer_item_li" onClick={handleScrollTop}>
                <HoverPrefetchLink
                  href="/Privacy_Policy"
                  className="footer_item_a"
                >
                  Privacy Policy
                </HoverPrefetchLink>
              </li>
              <li className="footer_item_li" onClick={handleScrollTop}>
                <HoverPrefetchLink
                  href="/Terms_of_use"
                  className="footer_item_a"
                >
                  Terms of Use
                </HoverPrefetchLink>
              </li>
              <li className="footer_item_li" onClick={handleScrollTop}>
                <HoverPrefetchLink
                  href="/Advertise_With_Us"
                  className="footer_item_a"
                >
                  Advertise With Us
                </HoverPrefetchLink>
              </li>
              <li className="footer_item_li" onClick={handleScrollTop}>
                <HoverPrefetchLink
                  href="/Cookie_Policy"
                  className="footer_item_a"
                >
                  Cookie Policy
                </HoverPrefetchLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="row_line_line">
          <div className="row_line" />
        </div>
        <div className="footer_text">
          <p className="footer_text_top">
            {" "}
            © 2025 Masson Media Ventures, LLC. All Rights Reserved.
          </p>
        </div>
        <div className="hdr-social-icons">
          <a
            target="_blank"
            href="http://www.facebook.com/pages/MVP-Boxing/135461625286?ref=ts"
            title="Facebook"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f mvpicon" aria-hidden="true" />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/manny_masson/"
            title="Instagram"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram mvpicon" aria-hidden="true" />
          </a>
          <a
            target="_blank"
            href="http://twitter.com/mvpboxing"
            title="Twitter"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-x-twitter mvpicon" />
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/user/MassonLLC"
            title="Youtube"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube mvpicon" aria-hidden="true" />
          </a>
          <a
            target="_blank"
            href="https://www.tiktok.com/@mvpboxing"
            title="TikTok"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-tiktok mvpicon" aria-hidden="true" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav"
            title="TikTok"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in mvpicon" />
          </a>
        </div>
      </section>
    </footer>
  );
}
