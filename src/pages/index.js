import styles from './index.css';


export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>We use Umijs + ReactHooks to demo antd ! </li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            Umijs Getting Started
          </a>
        </li>
      </ul>
    </div>
  );
}
