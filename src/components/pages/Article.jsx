import { Link, useParams } from "react-router-dom";
import styles from "./Article.module.css";

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

function Article() {
  const { id } = useParams();
  const article = articles.find((article) => article.id.toString() === id);

  if (!article) {
    return <h2>Article not found</h2>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{article.title}</h1>
      <p className={styles.content}>{article.content}</p>
      <p className={styles.path}>Current Path: /articles/{id}</p>
      <Link to="/articles" className={styles.backButton}>
        Back
      </Link>
    </div>
  );
}

export default Article;
