import React, { useState, useEffect } from "react";

import "./App.css";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Search from "./components/Search";
import Menu from "./components/Menu";
import Axios from "axios";

function App() {
  const [search, setSearch] = useState("chicken");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "836dd980";
  const APP_KEY = "4e45c4c1b46f6e06f9ebd011196a6713";

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const res = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );

    setRecipes(res.data.hits);
  };

  const onInputChange = (e) => {
    setSearch(e.target.value);
  };

  const onSearchClick = () => {
    getRecipes();
  };
  return (
    <div className="App">
      <Header />
      <br />
      <Search
        search={search}
        onInputChange={onInputChange}
        onSearchClick={onSearchClick}
      />
      <div className="container">
        <br />
        <br />
        <Recipes recipes={recipes} />
      </div>
      <Menu />
    </div>
  );
}

export default App;
