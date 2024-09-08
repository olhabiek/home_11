import { createContext, useContext, useState } from "react";

const ArticleContext = createContext();

export const ArticleProvider = ({ children }) => {
  const [articles] = useState([
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
  ]);

  return (
    <ArticleContext.Provider value={articles}>
      {children}
    </ArticleContext.Provider>
  );
};

export const useArticles = () => {
  return useContext(ArticleContext);
};
