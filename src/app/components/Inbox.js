import styles from '../styles/Inbox.module.css';

export default function Inbox() {
  return (
    <div className={styles.inbox}>
      <h2>Inbox</h2>
      <ul className={styles.issueList}>
        <li>
          <strong>ENG-135 Refactor sonic crawler</strong>
          <p>Assigned to you</p>
        </li>
        <li>
          <strong>LLM Chatbot</strong>
          <p>New project update</p>
        </li>
        {/* More issues here */}
      </ul>
    </div>
  );
}
