import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/pages/Home";
import ArticleList from "./components/pages/ArticleList";
import Article from "./components/pages/Article";
import Confirmation from "./components/Confirmation";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              end
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/articles"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              Articles
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/articles/:id" element={<Article />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </>
  );
}

export default App;
