import React, { useState } from "react";
import AnimeList from "./components/AnimeList";
import AnimeDetails from "./components/AnimeDetails";
import "./App.css";

const App = () => {
  const [selectedAnimeId, setSelectedAnimeId] = useState(null);

  return (
    <div className="app-container">
      <h1 className="app-title">AniList Explorer</h1>
      <div className="content">
        <AnimeList onSelectAnime={setSelectedAnimeId} />
        <AnimeDetails animeId={selectedAnimeId} />
      </div>
    </div>
  );
};

export default App;
