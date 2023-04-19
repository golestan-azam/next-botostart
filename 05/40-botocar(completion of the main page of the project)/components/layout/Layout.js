import Link from "next/link";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h2>BOTOCAR</h2>
          <p>Choose and Buy car</p>
        </Link>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>Next.js Botocar Project &copy;</footer>
    </>
  );
}

export default Layout;
