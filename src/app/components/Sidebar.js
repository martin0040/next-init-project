import styles from '../styles/Sidebar.module.css';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>Linear</div>
      <ul className={styles.menu}>
        <li>Inbox</li>
        <li>My Issues</li>
        <li>Initiatives</li>
        <li>Projects</li>
        <li>Views</li>
        <li>Teams</li>
      </ul>
      <div className={styles.favorites}>
        <h3>Favorites</h3>
        <p>Mobile App</p>
        <p>3Q24 Roadmap</p>
        <p>Projects</p>
        <p>Docs</p>
      </div>
    </div>
  );
}
