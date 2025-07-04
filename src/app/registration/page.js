// app/registration/page.js
"use client";

import React from "react";
import Link from "next/link";

export default function RegistrationPage() {
  return (
    <div className="sing_in_contend">
      <div className="BodyContainer-sc-4rz3ia-0 sing_in_box">
        <Link href="/signin">
          <div className="styles__TopNavBodyWrapper-sc-1858ovt-0 fBXGQW">
            <button
              aria-label="Back Button"
              role="button"
              type="button"
              className="styles__BackButtonWrapper-sc-f5wfdc-0 kBlYfW"
            >
              <svg
                className="svg_registration"
                color="#000"
                viewBox="0 0 1024 1024"
              >
                <path d="M669.387 819.803l11.08-11.11c12.186-11.52 13.21-24.719 0.666-37.263l-260.004-259.686 260.004-259.338c12.175-12.175 11.52-25.733-0.666-37.253l-11.09-11.09c-12.175-11.52-25.733-11.52-37.253 0l-289.075 289.065c-12.175 12.175-12.175 25.078 0 37.253l289.075 289.423c11.52 11.52 24.719 11.878 37.263 0z" />
              </svg>
            </button>
          </div>
        </Link>

        <div className="styles__BodyWrapper-sc-1858ovt-1 dbHsLn">
          <div
            data-testid="sign-up"
            className="styles__Container-sc-xxfswo-1 iWBcxu"
          >
            <div className="styles__TextWrapper-sc-xxfswo-2 hGTQoy">
              <div
                data-testid="logo-container"
                className="styles__LogoContainer-sc-11jlv0z-0 jduJqv"
              ></div>
              <h1
                role="header"
                className="styles__HeaderText-sc-xxfswo-5 firAP"
              >
                One Account is All You Need
              </h1>
              <p className="styles__DescriptionText-sc-xxfswo-6 boYUgX">
                Get the latest news on your team, follow your favorite players,
                and manage your subscriptions
              </p>
            </div>
            <div className="line_line"></div>

            {/* Email */}
            <div className="styles__InputBoxWrapper-sc-xxfswo-3 jXBVrB">
              <label htmlFor="email-field" className="input-label">
                Email
              </label>
              <input
                id="email-field"
                type="email"
                placeholder="Enter email address"
                className="input-field"
              />
            </div>

            {/* Password */}
            <div className="styles__InputBoxWrapper-sc-xxfswo-3 jXBVrB">
              <label htmlFor="password-field" className="input-label">
                Password
              </label>
              <input
                id="password-field"
                type="password"
                placeholder="Enter password"
                className="input-field ownid-skip-password"
              />
            </div>

            {/* First / Last Name */}
            <div className="styles__InputBoxWrapper-sc-xxfswo-3 jXBVrB">
              <label htmlFor="firstName-field" className="input-label">
                First Name
              </label>
              <input
                id="firstName-field"
                type="text"
                placeholder="Enter first name"
                className="input-field"
              />
            </div>
            <div className="styles__InputBoxWrapper-sc-xxfswo-3 jXBVrB">
              <label htmlFor="lastName-field" className="input-label">
                Last Name
              </label>
              <input
                id="lastName-field"
                type="text"
                placeholder="Enter last name"
                className="input-field"
              />
            </div>

            {/* DOB */}
            <div className="styles__InputBoxWrapper-sc-xxfswo-3 jXBVrB">
              <label htmlFor="dob-field" className="input-label">
                Date of Birth
              </label>
              <input
                id="dob-field"
                type="tel"
                placeholder="MM/DD/YYYY"
                className="input-field"
              />
            </div>

            {/* Country */}
            <div className="styles__InputBoxWrapper-sc-xxfswo-3 jXBVrB">
              <label htmlFor="country-field" className="input-label">
                Country
              </label>
              <select id="country-field" className="input-field">
                {/* …all your <option> entries… */}
              </select>
            </div>

            {/* Postal Code */}
            <div className="styles__InputBoxWrapper-sc-xxfswo-3 jXBVrB">
              <label htmlFor="zip-field" className="input-label">
                Postal Code (Optional)
              </label>
              <input
                id="zip-field"
                type="text"
                placeholder="Enter postal code"
                className="input-field"
              />
            </div>

            {/* Marketing Opt-In */}
            <div className="checkbox_reg">
              <input
                id="marketingOptIn"
                type="checkbox"
                className="checkbox-input"
              />
              <label htmlFor="marketingOptIn" className="checkbox-label">
                I agree that the MVP may send me content, offers and more.
              </label>
            </div>

            {/* Terms & Privacy */}
            <div className="styles__WarningText-sc-9xi3v2-0 jpLSyP">
              By clicking “Create Account“, I agree to the MVP’s{" "}
              <Link
                href="/terms_of_use"
                className="styles__HighlightedLink-sc-9xi3v2-1 fqGjgu"
              >
                Terms of Service
              </Link>{" "}
              and understand that personal information will be used as described
              in the MVP’s{" "}
              <Link
                href="/privacy_policy"
                className="styles__HighlightedLink-sc-9xi3v2-1 fqGjgu"
              >
                Privacy Policy
              </Link>
              .
            </div>

            {/* Create Account button */}
            <button
              type="button"
              className="styles__StyledButton-sc-8qc5s2-0 hqtidt"
            >
              <span className="styles__StyledText-sc-8qc5s2-1 dECuhf">
                Create Account
              </span>
            </button>

            {/* Already have an account */}
            <p className="styles__WarningText-sc-xxfswo-9 cnkjlK">
              Already have an account?{" "}
              <Link
                href="/signin"
                className="styles__HighlightedLink-sc-xxfswo-10 eamvOU"
              >
                Sign In
              </Link>
            </p>

            {/* Language selector */}
            <div className="styles__LangSelectorWrapper-sc-z69cid-0 huoexK">
              <label htmlFor="language-selector" className="input-label">
                Select a Language
              </label>
              <select id="language-selector" className="input-field">
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="ja">Japanese</option>
                <option value="de">German</option>
                <option value="pt">Portuguese</option>
                <option value="fr">French</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
