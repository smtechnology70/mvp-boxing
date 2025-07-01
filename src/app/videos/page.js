import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Videos = () => {
  // Top video items data
  const topVideos = [
    { title: "Punch Speed", img: "fc6f190eefe424def7cdf436dda9eff12.jpg" },
    {
      title: "Heavy Bag Training",
      img: "fc6f190eefe424def7cdf436dda9eff8.jpg",
    },
    {
      title: "Correct Boxing Technique",
      img: "090949d28c50cc86e6c9ae3cce020670.jpg",
    },
    { title: "How to jump Rope", img: "ce9b4aa9c42797b7dc61911c0654a343.jpg" },
    { title: "Double End Bag", img: "873ffb78829fd5d1a6c97bdd95e1cee4.jpg" },
  ];

  // Training video items data
  const trainingVideos = [
    {
      title: "Art of the Jab",
      img: "d6fe2447e333e6b9ed34d6293c933a89.jpg",
      date: "2018-07-07 12:19:16",
    },
    {
      title: "Effective Boxing Stance",
      img: "f7655c029bf61c015b035d4f8642ff34.jpg",
      date: "2018-07-07 12:23:03",
    },
    {
      title: "Boxing Punches",
      img: "d162810e082f893211045d0fe8743d4d.jpg",
      date: "2018-07-07 12:25:19",
    },
    {
      title: "One, Two Combo",
      img: "170a0a4193cfb22cd99e34786f7936fb.jpg",
      date: "2018-07-07 12:27:09",
    },
    {
      title: "Punch Set ups",
      img: "f7f6c2d1685e63e3fb7b5190ddf7f8da.jpg",
      date: "2018-07-07 12:27:59",
    },
    {
      title: "Punch Speed",
      img: "fc6f190eefe424def7cdf436dda9eff12.jpg",
      date: "2018-07-07 12:29:01",
    },
    {
      title: "Heavy Bag Training",
      img: "fc6f190eefe424def7cdf436dda9eff8.jpg",
      date: "2018-07-07 12:30:29",
    },
    {
      title: "Correct Boxing Technique",
      img: "090949d28c50cc86e6c9ae3cce020670.jpg",
      date: "2018-07-07 12:35:26",
    },
    {
      title: "How to jump Rope",
      img: "ce9b4aa9c42797b7dc61911c0654a343.jpg",
      date: "2018-07-07 12:47:42",
    },
    {
      title: "Double End Bag",
      img: "873ffb78829fd5d1a6c97bdd95e1cee4.jpg",
      date: "2019-08-23 18:16:17",
    },
    {
      title: "Technical Training With Gamboa And Manny",
      img: "e5a15698cc35b3766857bd4ebfb12d44.jpg",
      date: "2018-07-07 12:23:03",
    },
    {
      title: "Training With Monica",
      img: "e5a15698cc35b3766857bd4ebfb12d45.jpg",
      date: "2018-07-07 12:23:03",
    },
    {
      title: "MVP BOXING",
      img: "z255g7b6cbe790ce987998875d5ee8b255.jpg",
      date: "2022-03-05 12:23:03",
    },
    {
      title: "MANNY",
      img: "z256g7b6cbe790ce987998875d5ee8b256.jpg",
      date: "2022-03-05 12:23:03",
    },
    {
      title: "MMA",
      img: "z257g7b6cbe790ce987998875d5ee8b257.jpg",
      date: "2022-03-05 12:23:03",
    },
    {
      title: "MMA",
      img: "z258g7b6cbe790ce987998875d5ee8b258.jpg",
      date: "2022-03-05 12:23:03",
    },
    {
      title: "MMA",
      img: "z259g7b6cbe790ce987998875d5ee8b259.jpg",
      date: "2022-03-05 12:23:03",
    },
    {
      title: "MMA",
      img: "z260g7b6cbe790ce987998875d5ee8b260.jpg",
      date: "2022-03-05 12:23:03",
    },
    {
      title: "MMA",
      img: "z261g7b6cbe790ce987998875d5ee8b261.jpg",
      date: "2022-03-05 12:23:03",
    },
    {
      title: "Training",
      img: "z262g7b6cbe790ce987998875d5ee8b262.jpg",
      date: "2022-03-05 12:23:03",
    },
    {
      title: "MMA",
      img: "z263g7b6cbe790ce987998875d5ee8b263.jpg",
      date: "2022-03-05 12:23:03",
    },
    {
      title: "Boxing",
      img: "z264g7b6cbe790ce987998875d5ee8b264.jpg",
      date: "2022-03-05 12:23:03",
    },
    {
      title: "Boxing",
      img: "z265g7b6cbe790ce987998875d5ee8b265.jpg",
      date: "2022-03-05 12:23:03",
    },
    {
      title: "Boxing",
      img: "z266g7b6cbe790ce987998875d5ee8b266.jpg",
      date: "2022-03-05 12:23:03",
    },
    {
      title: "Boxing",
      img: "z267g7b6cbe790ce987998875d5ee8b267.jpg",
      date: "2022-03-05 12:23:03",
    },
    {
      title: "Boxing",
      img: "z268g7b6cbe790ce987998875d5ee8b268.jpg",
      date: "2022-03-05 12:23:03",
    },
    {
      title: "Boxing",
      img: "z269g7b6cbe790ce987998875d5ee8b269.jpg",
      date: "2022-03-05 12:23:03",
    },
    {
      title: "Boxing",
      img: "z270g7b6cbe790ce987998875d5ee8b270.jpg",
      date: "2022-03-05 12:23:03",
    },
    {
      title: "Boxing",
      img: "z271g7b6cbe790ce987998875d5ee8b271.jpg",
      date: "2022-03-05 12:23:03",
    },
    {
      title: "Boxing",
      img: "z272g7b6cbe790ce987998875d5ee8b272.jpg",
      date: "2022-03-05 12:23:03",
    },
  ];

  // Video categories for navigation
  const categories = [
    { name: "all-access", label: "All Access" },
    { name: "boxing-training", label: "Boxing Training" },
    { name: "mma-training", label: "MMA Training" },
  ];

  return (
    <>
      <Head>
        <title>MVP Boxing - All Access Videos</title>
        <meta
          name="description"
          content="Professional boxing and MMA training videos from MVP Boxing"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>

      <div className="mvpBgContainer mvp_container" id="newsMainContent">
        <div className="content_section">
          <div id="wrapper" className="video-wrapper">
            <div className="videos-block">
              <div className="videos-title">ALL ACCESS VIDEOS</div>

              <div className="video-main">
                <div className="videoContainer">
                  <ul id="box1" className="box_images d-md-inline-block d-none">
                    {topVideos.map((video, index) => (
                      <li key={index}>
                        <Link
                          href={`/videos/boxing-training/${video.title
                            .toLowerCase()
                            .replace(/ /g, "-")}`}
                          passHref
                          legacyBehavior
                        >
                          <a title={video.title}>
                            <div className="training_pic relative aspect-video overflow-hidden">
                              <i className="fa fa-play-circle absolute z-10 text-white text-3xl inset-center" />
                              <Image
                                src={`https://www.mvpboxing.com/assets/menusImg/${video.img}`}
                                alt={video.title}
                                fill
                                className="object-cover"
                                loading="lazy"
                              />
                            </div>
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <div className="aspect-w-16 aspect-h-9 mt-4">
                    <iframe
                      src="https://youtube.com/embed/6_XupXmtymc?autoplay=1&mute=1"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                      title="Boxing Training Video"
                    />
                  </div>
                </div>
                <h1 className="video-title">Boxing</h1>
                <div className="video-desc"></div>
              </div>

              <div className="videos-alt">
                <div
                  className="videos-title"
                  style={{ textTransform: "unset" }}
                >
                  Boxing Training
                </div>

                <div className="arrows flex justify-center gap-4 my-2">
                  <Link href="/videos/all-access" passHref legacyBehavior>
                    <a className="text-2xl">
                      <i className="fa fa-caret-square-o-left" />
                    </a>
                  </Link>
                  <Link href="/videos/mma-training" passHref legacyBehavior>
                    <a className="text-2xl">
                      <i className="fa fa-caret-square-o-right" />
                    </a>
                  </Link>
                </div>

                <div
                  className="video-block"
                  itemScope
                  itemType="https://schema.org/ItemList"
                >
                  <ul className="box_images grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {trainingVideos.map((video, index) => (
                      <li
                        key={index}
                        className="item"
                        itemProp="itemListElement"
                        itemScope
                        itemType="https://schema.org/VideoObject"
                      >
                        <Link
                          href={`/videos/boxing-training/${video.title
                            .toLowerCase()
                            .replace(/ /g, "-")}`}
                          passHref
                          legacyBehavior
                        >
                          <a itemProp="url" title={video.title}>
                            <meta itemProp="uploadDate" content={video.date} />
                            <meta
                              itemProp="description"
                              content={video.title}
                            />
                            <meta
                              itemProp="thumbnailUrl"
                              content={`https://www.mvpboxing.com/assets/menusImg/${video.img}`}
                            />
                            <div className="training_pic relative aspect-video overflow-hidden">
                              <i className="fa fa-play-circle absolute z-10 text-white text-3xl inset-center" />
                              <Image
                                src={`https://www.mvpboxing.com/assets/menusImg/${video.img}`}
                                alt={video.title}
                                itemProp="thumbnail"
                                fill
                                className="object-cover"
                                loading={index < 12 ? "eager" : "lazy"}
                              />
                            </div>
                            <div className="video-title mt-2">
                              <span itemProp="name" className="font-bold">
                                {video.title}
                              </span>
                              <div className="video-span text-primary mt-1">
                                View &gt;&gt;
                              </div>
                            </div>
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="slick-dots flex justify-center gap-2 my-6">
                  {categories.map((category, index) => (
                    <Link
                      key={index}
                      href={`/videos/${category.name}`}
                      passHref
                      legacyBehavior
                    >
                      <a className="text-gray-400 hover:text-primary">
                        <i
                          className={`fa fa-circle ${
                            category.name === "boxing-training"
                              ? "text-primary"
                              : ""
                          }`}
                        />
                      </a>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="comments-block mt-5">
                <div
                  id="comment-policy"
                  className="comment-policy publisher-anchor-color"
                >
                  <div className="content text-center p-4 bg-gray-50 rounded-lg">
                    <h2 className="title text-xl font-bold mb-2">
                      MVPBOXING.COM Comment Policy
                      <i className="fa fa-comments-o ml-2" />
                    </h2>
                    <p>{"Hey, why isn't my comment displaying?!"}</p>
                    <p>
                      Please read our{" "}
                      <Link href="/comment_policy" passHref legacyBehavior>
                        <a
                          className="policy-link text-primary font-bold"
                          target="_blank"
                        >
                          Comment Policy
                        </a>
                      </Link>{" "}
                      before commenting.
                    </p>
                  </div>
                </div>

                <div className="comments mt-6">
                  <div className="main-title w-full flex justify-between items-center border-b pb-2">
                    <div className="text-lg">
                      <i className="fa fa-comments-o" />{" "}
                      <span id="total_comments">0</span> Comments
                    </div>
                    <div id="share-block" className="text-lg">
                      <i className="fa fa-share-alt" /> Share
                    </div>
                  </div>

                  <div className="comment-block mt-4">
                    <div className="social-share-block hidden">
                      {/* AddToAny would be implemented here */}
                    </div>
                    <div
                      className="comments-container bg-white border border-gray-300 rounded p-8 text-center italic font-bold"
                      style={{ minHeight: "120px" }}
                    >
                      MVPBoxing Commenting coming soon!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clear"></div>
        </div>
      </div>
    </>
  );
};

export default Videos;
