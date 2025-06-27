"use client";

import React, { useState, useEffect } from "react";
import GLOBALS from "@/server/Globals";
import Loader from "@/components/Loader";

const createMarkup = (html) => ({ __html: html });

export default function PartnershipInquiriesPage() {
  const [loading, setLoading] = useState(true);
  const [pagedata, setPagedata] = useState("");

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch(
          `${GLOBALS.API_BASE_URL}/cmspage?page_id=partnership-inquiries`
        );
        if (!res.ok) throw new Error(`Status ${res.status}`);
        const json = await res.json();
        setPagedata(json.data.content);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="mvpBgContainer mvp_container" id="newsMainContent">
      <div className="workout_content article_area_content text-justify">
        <Loader loading={loading} />
        {!loading && (
          <div
            className="page-content"
            dangerouslySetInnerHTML={createMarkup(pagedata)}
          />
        )}

        <div className="text-left">
          <p className="w-100 text-center py-0 mb-0">
            <strong className="csr-about">MVP BOXING</strong>
          </p>
          <h1 className="csr-head w-100 text-center">PARTNERSHIP INQUIRIES</h1>

          <form id="partnership-form" method="post">
            <div className="contact-info">
              <address className="w-100 mx-auto text-center">
                <strong>
                  <a href="tel:312-399-5390">
                    <i className="fa fa-phone mr-3" />
                    312-399-5390
                  </a>
                </strong>
                <a href="mailto:info@mvpboxing.com" className="text-lowercase">
                  <i className="fa fa-envelope mr-3" />
                  info@mvpboxing.com
                </a>
                <div>
                  360 East South Water St.
                  <br />
                  Chicago, IL 60601
                </div>
              </address>
            </div>

            <div className="form-group row mx-3">
              <input
                type="text"
                name="fname"
                id="fname"
                className="form-control offset-md-4 col-md-4 col-12"
                placeholder="FIRST NAME"
              />
              <label id="fname-error" className="offset-md-4 error col-md-4" />
            </div>

            <div className="form-group row mx-3">
              <input
                type="text"
                name="lname"
                id="lname"
                className="form-control offset-md-4 col-md-4 col-12"
                placeholder="LAST NAME"
              />
              <label id="lname-error" className="offset-md-4 error col-md-4" />
            </div>

            <div className="form-group row mx-3">
              <input
                type="text"
                name="cname"
                id="cname"
                className="form-control offset-md-4 col-md-4 col-12"
                placeholder="COMPANY NAME"
              />
              <label id="cname-error" className="offset-md-4 error col-md-4" />
            </div>

            <div className="form-group row mx-3">
              <input
                type="email"
                name="c_email"
                id="c_email"
                className="form-control offset-md-4 col-md-4 col-12"
                placeholder="COMPANY EMAIL"
              />
              <label
                id="c_email-error"
                className="offset-md-4 error col-md-4"
              />
            </div>

            <div className="form-group row mx-3">
              <select
                name="region"
                id="region"
                className="form-control offset-md-4 col-md-4 col-12"
                defaultValue=""
              >
                <option disabled value="">
                  REGION
                </option>
                <option value="Americas">AMERICAS</option>
                <option value="Europe">EUROPE</option>
                <option value="Middle East, Africa and India">
                  MIDDLE EAST, AFRICA & INDIA
                </option>
                <option value="Asia Pacific">ASIA PACIFIC</option>
              </select>
              <label id="region-error" className="offset-md-4 error col-md-4" />
            </div>

            <div className="form-group row mx-3">
              <div className="col-md-4 offset-md-4 col-12 px-0">
                <textarea
                  name="comment"
                  id="comment"
                  rows={5}
                  maxLength={2000}
                  className="form-control chkCharacters"
                  placeholder="HOW MAY WE HELP YOU?"
                />
                <label id="comment-error" className="error" />
                <div className="remChar">
                  You have <span>2000</span> characters remaining for your
                  comment.
                </div>
              </div>
            </div>

            <div className="fcf formCaptcha form-group row mx-3">
              <div className="col-md-4" />
              <div className="col-md-4 col-12 px-0">
                <div
                  className="g-recaptcha"
                  data-sitekey="6LcaChsUAAAAAHGA3btBzj_Bx2w-MMQbw53PwcRG"
                  style={{ marginTop: "3rem" }}
                />
                <input
                  id="hidden-grecaptcha"
                  name="hidden-grecaptcha"
                  type="text"
                  style={{
                    opacity: 0,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: 1,
                    width: 1,
                  }}
                />
                <label
                  id="g-recaptcha-response-error"
                  className="offset-md-4 col-md-4 col-12"
                />
              </div>
            </div>

            <input
              type="hidden"
              name="type"
              defaultValue="partnership-inquiry"
            />

            <div className="contactFormErr">
              <p />
            </div>

            <div
              className="page__links d-md-none d-block"
              style={{ marginBottom: 10 }}
            >
              <button
                type="submit"
                name="fcf_form_submit"
                id="fcf_form_submit"
                className="page__links__link btn feat-link"
              >
                <strong>Submit</strong>
                <i className="fa fa-chevron-right" />
              </button>
            </div>

            <div className="fcf formSubmit d-none d-md-block row mx-3 text-center">
              <div className="col-12 px-0">
                <button type="submit" id="fcf_form_submit">
                  <strong>SUBMIT</strong>
                </button>
              </div>
              <div className="clear" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
