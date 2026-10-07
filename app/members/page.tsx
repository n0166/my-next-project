import Image from "next/image";
import { getMembersList } from "@/app/_libs/microcms";
import { MEMBERS_LIST_LIMIT } from "@/app/_constants";
import styles from "./page.module.css";

// const data = {
//   contents: [
//     {
//       id: "1",
//       image: {
//         url: "/img-member1.jpg",
//         width: 240,
//         height: 240,
//       },
//       name: "なまえ1",
//       position: "ポジション1",
//       profile: "プロフィール1",
//     },
//     {
//       id: "2",
//       image: {
//         url: "/img-member2.jpg",
//         width: 240,
//         height: 240,
//       },
//       name: "なまえ2",
//       position: "ポジション2",
//       profile: "プロフィール2",
//     },
//     {
//       id: "3",
//       image: {
//         url: "/img-member3.jpg",
//         width: 240,
//         height: 240,
//       },
//       name: "なまえ3",
//       position: "ポジション3",
//       profile: "プロフィール3",
//     },
//   ],
// };

export default async function Page() {
  const data = await getMembersList({ limit: MEMBERS_LIST_LIMIT });

  return (
    <div className={styles.container}>
      {data.contents.length === 0 ? (
        <p className={styles.empty}>メンバーが登録されていません。</p>
      ) : (
        <ul>
          {data.contents.map((member) => (
            <li key={member.id} className={styles.list}>
              <Image
                className={styles.image}
                src={member.image.url}
                alt=""
                width={member.image.width}
                height={member.image.height}
              />
              <dl>
                <dt className={styles.name}>{member.name}</dt>
                <dd className={styles.position}>{member.position}</dd>
                <dd className={styles.profile}>{member.profile}</dd>
              </dl>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
