import { notFound } from "next/navigation";
import { getNewsDetail } from "@/app/_libs/microcms";
import Article from "@/app/_components/Article";
import ButtonLink from "@/app/_components/ButtonLink";
import styles from "./page.module.css";

// 1. params を Promise 型にする
type Props = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: {
    dk?: string;
  };
};

// export const revalidate = 60;

export default async function Page({ params, searchParams }: Props) {
  // 2. params を await してから slug を取り出す
  const { slug } = await params;
  const data = await getNewsDetail(slug, {
    draftKey: searchParams.dk,
  }).catch(notFound);

  return (
    <>
      <Article data={data} />
      <div className={styles.footer}>
        <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
      </div>
    </>
  );
}
