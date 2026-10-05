import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <dl>
        <dt className={styles.title}>ページが見つかりませんでした</dt>
        <dd className={styles.text}>
          お探しのページは存在しないか、移動した可能性があります。
          <br />
          URLが正しいかどうかご確認ください。
        </dd>
      </dl>
    </div>
  );
}
