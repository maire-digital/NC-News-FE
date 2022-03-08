import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContext } from "./components/UserContext";
import { useState } from "react";
import HomeArticles from "./components/HomeArticles";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    username: "DEFAULT USER",
    avatar_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Tomb_of_Nakht_%287%29.jpg/220px-Tomb_of_Nakht_%287%29.jpg",
  });

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
        <div className="App">
          <Nav />
          <Header />
          <HomeArticles />
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
