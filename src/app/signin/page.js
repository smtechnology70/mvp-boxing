// app/signin/page.js
"use client";

import React from "react";
import Link from "next/link";

export default function SignInPage() {
  return (
    <>
      <div className="sing_in_contend">
        <div className="BodyContainer-sc-4rz3ia-0 sing_in_box">
          <div data-testid="sign-in">
            <div className="styles__Container-sc-yjr19k-1 sing_in_box_contend">
              <div className="styles__ColumnContainer-sc-yjr19k-2 sign_in_top_contend">
                <div
                  data-testid="logo-container"
                  className="styles__LogoContainer-sc-11jlv0z-0 sign_in_top_contend_img_box"
                />
                <h1
                  role="header"
                  className="styles__HeaderText-sc-yjr19k-5 sign_in_top_contend_text"
                >
                  Sign in to your MVP BOXING Fight Club Account
                </h1>
              </div>

              <div className="styles__InputBoxWrapper-sc-yjr19k-3 sign_in_center_contend">
                <div className="styles__Container-sc-dzwwyq-0 sign_in_center_contend_box">
                  <label htmlFor="email-input-field" id="email-input-label">
                    Email
                  </label>
                  <div className="styles__Container-sc-dzwwyq-0 email_contend">
                    <input
                      autoCapitalize="none"
                      autoComplete="email"
                      maxLength={160}
                      placeholder="Enter email address"
                      autoCorrect="on"
                      dir="auto"
                      inputMode="email"
                      spellCheck="true"
                      type="email"
                      aria-describedby="email-input-label"
                      aria-label="Email"
                      className="css-11aywtz r-6taxm2 r-14lw9ot r-z2wwpe r-rs99b7 r-1khnkhu r-1b43r93 r-eu3ka r-nwxazl r-1mkv55d r-ubg91z"
                      id="email-input-field"
                      data-testid="email-input"
                    />
                  </div>
                </div>
              </div>

              <button
                aria-disabled="true"
                aria-label="Continue"
                disabled
                height={40}
                role="button"
                type="button"
                className="styles__StyledButton-sc-8qc5s2-0 sign_in_center_contend_box_button"
              >
                <div>
                  <span className="styles__StyledText-sc-8qc5s2-1 sign_in_center_contend_box_button_text">
                    Continue
                  </span>
                </div>
              </button>

              <div className="styles__NoAccountContainer-sc-yjr19k-4 sign_in_text_dont">
                <p className="styles__NoAccountText-sc-yjr19k-6 sign_in_text_dont_all">
                  Don’t have an MVP BOXING Fight Club account?
                </p>
              </div>

              <Link href="/registration">
                <button
                  aria-label="Sign Up"
                  height={40}
                  role="button"
                  type="button"
                  className="styles__StyledButton-sc-8qc5s2-0 sign_up_box"
                >
                  <div className="sing_up_box_text_contend">
                    <span className="styles__StyledText-sc-8qc5s2-1 sing_up_box_text">
                      Sign Up
                    </span>
                  </div>
                </button>
              </Link>

              <div className="sign_up_line" />

              <div className="styles__AccountSubWrapper-sc-q68thf-5 sign_up_languagn_box">
                <div
                  data-testid="language-selector"
                  className="styles__LangSelectorWrapper-sc-z69cid-0 sign_up_languagn_box_label"
                >
                  <label
                    htmlFor="language-selector-field"
                    id="language-selector-label"
                  >
                    Select a Language
                  </label>
                  <select
                    aria-label="Select a Language"
                    aria-labelledby="language-selector-label"
                    id="language-selector-field"
                  >
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="ja">Japanese</option>
                    <option value="de">German</option>
                    <option value="pt">Portuguese</option>
                    <option value="fr">French</option>
                  </select>
                </div>
                <button
                  aria-label="Need Help?"
                  role="button"
                  type="button"
                  className="styles__NeedHelpButton-sc-q68thf-6 sign_up_need"
                >
                  Need Help?
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
