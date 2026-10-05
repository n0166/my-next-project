import styles from "./page.module.css";
import Image from "next/image";
import Newslist from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";
import { News } from "@/app/_libs/microcms";

// type News = {
//   id: string;
//   title: string;
//   category: {
//     name: string;
//   };
//   publishedAt: string;
//   createdAt: string;
// };

const data: {
  contents: News[];
} = {
  contents: [
    {
      id: "1",
      title: "ニュースタイトル1",
      category: {
        name: "カテゴリ1",
      },
      publishedAt: "2026/01/01",
      createdAt: "2026/01/01",
    },
    {
      id: "2",
      title: "ニュースタイトル2",
      category: {
        name: "カテゴリ1",
      },
      publishedAt: "2026/01/01",
      createdAt: "2026/01/01",
    },
    {
      id: "3",
      title: "ニュースタイトル3",
      category: {
        name: "カテゴリ1",
      },
      publishedAt: "2026/01/01",
      createdAt: "2026/01/01",
    },
  ],
};

export default function Home() {
  // const name = "A";
  const sliceData = data.contents.slice(0, 2);
  // const sliceData: News = [];

  return (
    <>
      <section className={styles.top}>
        <div>
          {/* <h1>テクノロジーの力で{name}を変える</h1> */}
          <h1 className={styles.title}>テクノロジーの力で世界を変える</h1>
          <p className={styles.description}>
            私たちは市場をリードしているグローバルテックカンパニーです。
          </p>
          {/* <img className={styles.bgimg} src="/img-mv.jpg" alt="" /> */}
          <Image
            className={styles.bgimg}
            src="/img-mv.jpg"
            alt=""
            width={4000}
            height={1200}
          />
        </div>
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        {/* <ul className={styles.newsList}>
          {sliceData.map((article) => (
            <li key={article.id} className={styles.list}>
              <div className={styles.link}>
                <Image
                  className={styles.image}
                  src="/no-image.png"
                  alt="No Image"
                  width={1200}
                  height={630}
                />
                <dl className={styles.content}>
                  <dt className={styles.newsItemTitle}>{article.title}</dt>
                  <dd className={styles.meta}>
                    <span className={styles.tag}>{article.category.name}</span>
                    <span className={styles.date}>
                      <Image
                        src="/clock.svg"
                        alt=""
                        width={16}
                        height={16}
                        priority
                      />
                      {article.publishedAt}
                    </span>
                  </dd>
                </dl>
              </div>
            </li>
          ))}
        </ul> */}
        <Newslist news={sliceData} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}
