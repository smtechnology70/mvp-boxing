// app/espanol-amm/page.js
"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

import GLOBALS from "@/server/Globals";
import Loader from "@/components/Loader";

export default function EspanolMmaPage() {
  // Read ?p= from URL, default to 1
  const searchParams = useSearchParams();
  const pParam = searchParams.get("p");
  const [page, setPage] = useState(Number(pParam) || 1);

  const [loading, setLoading] = useState(false);
  const [espmma, setEspmma] = useState([]);

  // Fetch data whenever page changes
  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        const res = await fetch(`${GLOBALS.API_BASE_URL}/espanolmma?p=${page}`);
        if (!res.ok) throw new Error(res.statusText);
        const { data } = await res.json();
        setEspmma(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [page]);

  // Handlers to update page state—and push the new ?p= into the URL
  const prevPage = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };
  const nextPage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className="mvpBgContainer mvp_container" id="newsMainContent">
      <div className="news_articles_content">
        <div className="left_content_area odds_section">
          <h1 className="titles_article sch_title">TODAS LAS NOTICIAS</h1>

          {/* Tabs */}
          <ul className="sch_tabs">
            <li className="ml-3 p-1">
              <Link href="/espanol-boxeo?p=1">Boxeo</Link>
            </li>
            <li className="ative_tab p-1">
              <Link href="/espanol-amm?p=1">AMM</Link>
            </li>
          </ul>

          {/* Desktop Pager */}
          <div className="top_pager d-none d-md-block">
            <div className="left news_prev_post">
              {page > 1 && (
                <Link
                  href={`/espanol-amm?p=${page - 1}`}
                  className="margin-left-0 previousPage"
                  onClick={prevPage}
                >
                  <div className="odds_arrow_left left" /> Previo
                </Link>
              )}
              <Link
                href={`/espanol-amm?p=${page + 1}`}
                className="margin-left-1 nextPage"
                onClick={nextPage}
              >
                Próximo <div className="odds_arrow_right right" />
              </Link>
            </div>
            <div className="clear" />
          </div>

          {/* Articles List */}
          <div className="news_data_container">
            <Loader loading={loading} />

            <div
              className="news_data"
              itemScope
              itemType="https://schema.org/ItemList"
            >
              {espmma.map((item) => (
                <div
                  key={item.id}
                  className="col-sm-12 mt15 flex-col nopadding feed"
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/NewsArticle"
                >
                  <div className="clear-left mr15 row mx-1">
                    <p className="box-img col-3 col-md-2 pl-1 pr-0">
                      <em itemProp="datePublished">{item.datecreated}</em>
                      <em className="comment-count-block">
                        <i className="fa fa-comment" />
                        &nbsp;&nbsp;
                        <span className="comment-count">0</span>
                      </em>
                    </p>
                    <Link
                      href={`${item.url}/${page}`}
                      className="list-item caption news-caption col-9 col-md-10 px-2 text-left txt-black"
                    >
                      <strong itemProp="headline" className="news-title">
                        {item.title}
                      </strong>
                      <span
                        dangerouslySetInnerHTML={{ __html: item.content }}
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Pager */}
          <div className="top_pager d-block d-md-none">
            <div className="right news_prev_post">
              {page > 1 && (
                <Link
                  href={`/espanol-amm?p=${page - 1}`}
                  className="margin-left-0 previousPage"
                  onClick={prevPage}
                >
                  <div className="odds_arrow_left left" /> Previo
                </Link>
              )}
              <Link
                href={`/espanol-amm?p=${page + 1}`}
                className="nextPage"
                onClick={nextPage}
                style={{ display: "flex" }}
              >
                Próximo <div className="odds_arrow_right right" />
              </Link>
            </div>
            <div className="clear" />
          </div>

          <div className="bottom_pager" />
        </div>
      </div>
    </div>
  );
}
