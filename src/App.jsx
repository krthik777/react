import React, { useState } from "react";
import AnimeList from "./components/AnimeList";
import AnimeDetails from "./components/AnimeDetails";
import "./App.css";

const App = () => {
  const [selectedAnimeId, setSelectedAnimeId] = useState(null);

  return (
    <div className="app-container">
      <div className="title-holder">
       <h1 className="app-title">AniList Explorer</h1>
      </div>
      <br></br>
      <div className="content">
      <AnimeDetails animeId={selectedAnimeId} />
        <AnimeList onSelectAnime={setSelectedAnimeId} />
       
      </div>
    </div>
  );
};

export default App;
