import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Home from "./component/Home";
import AboutView from "./component/About";
import SearchView from "./component/SearchView";
import { Routes, Route } from "react-router-dom";
import MovieView from "./component/MovieView";

function App() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [foundResult, setFoundResult] = useState(true);

  useEffect(() => {
    if (searchText) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=76748b69ff6dbc6105a40c0721341b0f&language=en-US&query=${searchText}&page=1&include_adult=false
`)
        .then((response) => response.json())
        .then((data) => {
          setSearchResult(data.results);
          if (data.results.length === 0) {
            setFoundResult(false);
          } else {
            setFoundResult(true);
          }
        });
    }
  }, [searchText]);

  return (
    <div>
      <Navbar
        searchText={searchText}
        setSearchText={setSearchText}
        setIsSubmit={setIsSubmit}
        isSubmit={isSubmit}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about/*" element={<AboutView />} />
        <Route
          path="search/*"
          element={
            isSubmit ? (
              <SearchView
                keyWords={searchText}
                searchResults={searchResult}
                dataFound={foundResult}
              />
            ) : (
              <Hero text="you are searching...." />
            )
          }
        />
        <Route path="movies/:id" element={<MovieView />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
