import { Link } from "react-router-dom";
import styles from "./ArticleList.module.css";

const articles = [
  {
    id: 1,
    title: "Understanding React",
    content:
      "React is a JavaScript library for building user interfaces. It lets you create reusable UI components.",
  },
  {
    id: 2,
    title: "JavaScript ES6 Features",
    content:
      "ES6 introduced many new features to JavaScript, including arrow functions, classes, and modules.",
  },
  {
    id: 3,
    title: "How to Use React Router",
    content:
      "React Router is a library for managing routing in React applications. It allows you to create single-page applications with navigation.",
  },
];

function ArticleList() {
  return (
    <div className={styles.container}>
      <h1>Articles</h1>
      <ul className={styles.list}>
        {articles.map((article) => (
          <li key={article.id} className={styles.item}>
            <Link to={`/articles/${article.id}`} className={styles.link}>
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArticleList;
