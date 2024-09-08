import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Welcome to my Blog</h1>
      <p>This is the best place to read interesting articles.</p>
      <Link to="/articles" className={styles.link}>
        Go to Articles
      </Link>
    </div>
  );
}

export default Home;
