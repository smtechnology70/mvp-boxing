"use client";

import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

import GLOBALS from "@/server/Globals";
import Loader from "@/components/Loader";
export default function NewsDetailsPage() {
  const { id, p } = useParams();
  console.log(id,p);
  
  const [loading, setLoading] = useState(false);
  const [newsData, setNewsData] = useState([]);
  const [listData, setListData] = useState([]);
  const listVisited = useRef([]);
  const initialNews = useRef([]);

  useEffect(() => {
    async function load() {
      setLoading(true);

      // 1) Fetch the first article
      const res1 = await fetch(
        `${GLOBALS.API_BASE_URL}/boxingfightstremsdetails?id=${id}`
      );
      if (!res1.ok) throw new Error(res1.status);
      const { data: first } = await res1.json();
      initialNews.current = [first];
      setNewsData([first]);

      // 2) Fetch sidebar list
      const res2 = await fetch(`${GLOBALS.API_BASE_URL}/dropboxingnews?p=${p}`);
      if (!res2.ok) throw new Error(res2.status);
      const { data: list } = await res2.json();
      setListData(list);

      // mark current as visited
      listVisited.current = list.map((item) => ({
        id: item.id,
        selected: item.id.toString() === id,
      }));

      setLoading(false);
    }

    load();

    // infinite scroll
    const onScroll = () => {
      const el = document.getElementById("news-details");
      if (el?.getBoundingClientRect().bottom <= window.innerHeight) {
        fetchNext();
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [id, p]);

  const fetchNext = async () => {
    // find first un-visited
    const next = listVisited.current.find((m) => !m.selected);
    if (!next) return;

    // mark visited
    listVisited.current = listVisited.current.map((m) =>
      m.id === next.id ? { ...m, selected: true } : m
    );

    setLoading(true);
    const res = await fetch(
      `${GLOBALS.API_BASE_URL}/boxingfightstremsdetails?id=${next.id}`
    );
    if (!res.ok) {
      console.error(res.status);
      setLoading(false);
      return;
    }
    const { data } = await res.json();
    setNewsData((prev) => [...prev, data]);
    setLoading(false);
  };

  return (
    <div className="mvpBgContainer mvp_container" id="newsMainContent">
    
      <div className="row mx-0">
        {/* Sidebar */}
        <aside id="sidemenu" className="col-md-3 d-none d-md-block sticky-top">
          <ul className="list-group">
            {listData.map((item) => (
              <Link
                key={item.id}
                href={`/news/boxing/${item.id}/${p}`}
                className="list-group-item"
              >
                {item.title}
              </Link>
            ))}
          </ul>
        </aside>

        {/* Articles */}
        <div className="col" id="news-details">
          {newsData.map((article, idx) => (
            <section
              key={article.id}
              className={`card ${idx > 0 ? "mt-3" : ""}`}
            >
              <div className="card-body nopadding">
                <h1 className="titles_article">{article.title}</h1>
                <p className="fnt12 socialInfo">
                  {article.source} | <i className="fa fa-clock-o" />{" "}
                  {article.published_at}
                </p>
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              </div>
            </section>
          ))}
          <Loader loading={loading} />
        </div>
      </div>
    </div>
  );
}
