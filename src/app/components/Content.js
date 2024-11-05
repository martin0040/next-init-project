// import styles from '../styles/Content.module.css';
import styles from '../styles/Content.module.css';
export default function Content() {
  return (
    <div className={styles.content}>
      <h2>Refactor sonic crawler</h2>
      <div className={styles.issueContent}>
        <p>Comment documentContent is defined wrongly. It should be a LazyManyToOne relation.</p>
        <pre>
          {`/** The document content that this comment is associated with. */
          @ManyToOne(() => DocumentContent, "comments", { optional: true, nullable: false })
          public documentContent: DocumentContent;`}
        </pre>
      </div>
    </div>
  );
}
