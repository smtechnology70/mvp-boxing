"use client";

import { Suspense, useEffect, useState } from "react";

import $ from "jquery";
import GLOBALS from "@/server/Globals";
import Loader from "@/components/Loader";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

const createMarkup = (htmlString) => {
  return { __html: htmlString };
};

const Search = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchheadline, setSearchheadline] = useState([]);
  const [searchheadlineData, setSearchheadlineData] = useState([]);
  const [pages, setPages] = useState([]);
  let searchParams = useSearchParams();
  let keyword = searchParams.get("keyword");
  let p = searchParams.get("p");
  let [currentPage, setCurrentPage] = useState(1);
  const router = useRouter(); // Use Next.js router

  useEffect(() => {
    setLoading(true);

    async function getDataBoxingNews() {
      let apiUrl = "search?title=" + keyword + "&p=" + p;
      const url = GLOBALS.API_BASE_URL + apiUrl;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        setSearchheadline(json);
        setSearchheadlineData(json.data);
        setPages(json.pages);
        setLoading(false);
        setCurrentPage(json.currentPage);
      } catch (error) {
        console.error(error.message);
      }
    }
    getDataBoxingNews();

    return () => {
      // Cleanup logic here
    };
  }, [keyword, p]);

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push("/search?keyword=" + event.target.keyword.value + "&p=1");
    $("#mySidenav").hide();
    $("body").css("overflow", "auto");
    // Handle form data and navigation here
  };

  return (
    <div className="mvpBgContainer mvp_container" id="newsMainContent">
      <div
        className="service_content contentShadow searchResultContainer"
        style={{ minHeight: 219 }}
      >
        <div
          className="search_page_form container-fluid px-3"
          itemScope
          itemType="https://schema.org/WebSite"
        >
          <meta itemProp="url" content="https://www.mvpboxing.com/" />
          <div className="left srchForm">
            <form
              onSubmit={handleSubmit}
              method="get"
              id="mainsearch_page_form"
              style={{ position: "relative" }}
              itemProp="potentialAction"
              itemScope
              itemType="https://schema.org/SearchAction"
            >
              <meta itemProp="target" />
              <div className="input-group search-div">
                <input
                  type="text"
                  className="form-control search-input cis"
                  placeholder="Search"
                  id="keyword"
                  name="keyword"
                  itemProp="query-input"
                  defaultValue={searchheadline.searhTerm}
                />
                <div className="input-group-append">
                  <button
                    className="btn search-btn"
                    name="search_submit"
                    type="submit"
                  >
                    <svg className="search-svg" viewBox="0 0 24 24">
                      <title>Search</title>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11C18 12.8859 17.2542 14.5977 16.0414 15.8563C16.0072 15.8827 15.9743 15.9115 15.9429 15.9429C15.9115 15.9743 15.8827 16.0072 15.8563 16.0414C14.5977 17.2542 12.8859 18 11 18C7.13401 18 4 14.866 4 11ZM16.6177 18.0319C15.078 19.2635 13.125 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 13.125 19.2635 15.078 18.0319 16.6177L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L16.6177 18.0319Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="clear" />
            </form>
          </div>
          <div className="clear" />
        </div>
        <div className="pagination_options container-fluid pt-3 px-3">
          <div className="left srch_pagination">
            <div className="searchLabel" style={{ fontSize: "1.3em" }}>
              Results for {`'${searchheadline.searhTerm}'`}
            </div>
            <div className="srchResInfo">
              Results &nbsp;
              <label> {searchheadline.current_interval}</label> of &nbsp;
              <label> {searchheadline.totalCnt}</label>
            </div>
            <p>
              {p > 1 ? (
                <span>
                  <Link
                    href={
                      "/search?keyword=" + keyword + "&p=" + (parseInt(p) - 1)
                    }
                    data-ci-pagination-page="4"
                    rel="prev"
                  >
                    &lt;
                  </Link>
                </span>
              ) : (
                ""
              )}

              {pages.map((item, i) => {
                return (
                  <Link
                    key={i}
                    href={
                      "/search?keyword=" +
                      keyword +
                      "&p=" +
                      parseInt(item.number)
                    }
                    className={item.active == 1 ? "page-active" : ""}
                    id="home_1"
                  >
                    {item.number}
                  </Link>
                );
              })}

              {parseInt(searchheadline.totalPageCnt) ==
              parseInt(searchheadline.totalPageCnt) ? (
                <span>
                  <Link
                    href={
                      "/search?keyword=" + keyword + "&p=" + (parseInt(p) + 1)
                    }
                    data-ci-pagination-page={2}
                    rel="next"
                  >
                    &gt;
                  </Link>
                </span>
              ) : (
                ""
              )}
            </p>
          </div>
          <div className="clear" />
        </div>
        <Loader loading={loading} />
        <div id="searchListings">
          {searchheadlineData.map((item, i) => {
            return (
              <div key={i} className="srch_list">
                <div className="left listContent">
                  <div className="listContentTitle">
                    <Link href={item.id} title="podcasts mma">
                      {item.title}
                    </Link>
                  </div>
                  <div className="listContentTime" />
                  <div className="listShortText"></div>
                </div>
                <div className="clear" />
                <div className="listSeparator" />
              </div>
            );
          })}
        </div>
        <div className="pagination_options container-fluid px-3">
          <div className="left srch_pagination">
            <div className="srchResInfo">
              <span>“{searchheadline.searhTerm}”</span> Results
              <label>{searchheadline.current_interval}</label> of
              <label>{searchheadline.totalCnt}</label>
            </div>
            <p>
              {p > 1 ? (
                <span>
                  <Link
                    href={
                      "/search?keyword=" + keyword + "&p=" + (parseInt(p) - 1)
                    }
                    data-ci-pagination-page="4"
                    rel="prev"
                  >
                    &lt;
                  </Link>
                </span>
              ) : (
                ""
              )}

              {pages.map((item, i) => {
                return (
                  <Link
                    key={i}
                    href={
                      "/search?keyword=" +
                      keyword +
                      "&p=" +
                      parseInt(item.number)
                    }
                    className={item.active == 1 ? "page-active" : ""}
                    id="home_1"
                  >
                    {item.number}
                  </Link>
                );
              })}

              {parseInt(searchheadline.totalPageCnt) ==
              parseInt(searchheadline.totalPageCnt) ? (
                <span>
                  <Link
                    href={
                      "/search?keyword=" + keyword + "&p=" + (parseInt(p) + 1)
                    }
                    data-ci-pagination-page={2}
                    rel="next"
                  >
                    &gt;
                  </Link>
                </span>
              ) : (
                ""
              )}
            </p>
          </div>
          <div className="clear" />
        </div>
      </div>
    </div>
  );
};

export default function SearchPage(props) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Search {...props} />
    </Suspense>
  );
}
