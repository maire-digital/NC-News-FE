import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContext } from "./contexts/UserContext";
import { useState, useContext } from "react";
import HomeArticles from "./components/HomeArticles";
import SingleArticle from "./components/SingleArticle";
import ErrorPage from "./components/ErrorPage";
import { ThemeContext } from "./contexts/Theme";


function App() {
  const [error, setError] = useState(null);
  const { toggle } = useContext(ThemeContext);
  const [loggedInUser, setLoggedInUser] = useState({
    username: "grumpy19",
    avatar_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Tomb_of_Nakht_%287%29.jpg/220px-Tomb_of_Nakht_%287%29.jpg",
  });

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
        <div className={`App ${toggle ? "dark" : "light"}`}>
          <Nav />
          <Header />
          <Routes>
            <Route
              path="/"
              element={<HomeArticles error={error} setError={setError} />}
            />
            <Route path="/articles/show/:topic" element={<HomeArticles />} />
            <Route
              path="/articles/:article_id"
              element={<SingleArticle error={error} setError={setError} />}
            />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
