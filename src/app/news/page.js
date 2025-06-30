// app/news/page.js
"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

import GLOBALS from "@/server/Globals";
import Loader from "@/components/Loader";

function NewsPageContent() {
  const searchParams = useSearchParams();
  const p = searchParams.get("p") || "1";

  const [loading, setLoading] = useState(false);
  const [pagedata, setPagedata] = useState([]);

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const res = await fetch(
          `${GLOBALS.API_BASE_URL}/dropboxingnews?p=${p}`
        );
        if (!res.ok) throw new Error(res.statusText);
        const { data } = await res.json();
        setPagedata(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [p]);

  return (
    <div className="mvpBgContainer mvp_container" id="newsMainContent">
      <div className="news_articles_content">
        <div className="left_content_area odds_section">
          <h1 className="titles_article sch_title">BOXING NEWS</h1>

          {/* Tabs */}
          <ul className="sch_tabs">
            <li className="ative_tab p-1">
              <Link href="/news?p=1">Boxing</Link>
            </li>
            <li className="ml-3 p-1">
              <Link href="/news-mma?p=1">MMA</Link>
            </li>
          </ul>

          {/* Desktop Pager */}
          <div className="top_pager d-none d-md-block">
            <div className="left news_prev_post">
              {Number(p) > 1 && (
                <Link
                  href={`/news?p=${Number(p) - 1}`}
                  className="margin-left-0"
                >
                  <div className="odds_arrow_left left" /> Prev
                </Link>
              )}
              <Link href={`/news?p=${Number(p) + 1}`} className="margin-left-1">
                Next <div className="odds_arrow_right right" />
              </Link>
            </div>
          </div>
          <br />
          {/* Articles List */}
          <div className="news_data_container">
            {pagedata.map((item) => (
              <div
                key={item.id}
                className="row nomargin bg-white mt-3"
                itemScope
                itemType="https://schema.org/NewsArticle"
              >
                <div className="col-sm-12 flex-col nopadding feed">
                  <div className="row mx-1 clear-left mr15">
                    {item.image && (
                      <p className="box-img col-3 col-md-2 pl-1 pr-0">
                        <img
                          itemProp="image"
                          className="img-fluid"
                          width={100}
                          src={item.image}
                          alt={item.title}
                        />
                        <em itemProp="datePublished">{item.published_at}</em>
                      </p>
                    )}
                    <Link
                      href={`/news/boxing/${item.id}`} // defaults to p=1
                      className="list-item caption news-caption col-9 col-md-10 px-2 text-left txt-black"
                    >
                      <strong itemProp="headline" className="news-title">
                        {item.title}
                      </strong>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Loader */}
          <Loader loading={loading} />

          {/* Mobile Pager */}
          <div className="top_pager d-block d-md-none">
            <div className="right news_prev_post">
              {Number(p) > 1 && (
                <Link href={`/news?p=${Number(p) - 1}`}>
                  Prev <div className="odds_arrow_left left" />
                </Link>
              )}
              <Link href={`/news?p=${Number(p) + 1}`}>
                Next <div className="odds_arrow_right right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function NewsPage() {
  return (
    <Suspense fallback={<Loader loading={true} />}>
      <NewsPageContent />
    </Suspense>
  );
}
