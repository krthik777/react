import React, { useState, useEffect } from "react";
import { fetchAnimeList } from "../api";
import "./AnimeList.css";

const AnimeList = ({ onSelectAnime }) => {
  const [animeList, setAnimeList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAnimeList = async () => {
      try {
        const data = await fetchAnimeList();
        setAnimeList(data);
      } catch (err) {
        setError(err.message);
      }
    };

    getAnimeList();
  }, []);

  if (error) return <p className="error-message">Error: {error}</p>;

  return (
    <div className="anime-list">
      <h2>Popular Anime</h2>
      <div className="anime-grid">
        {animeList.map((anime) => (
          <div
            key={anime.id}
            className="anime-card"
            onClick={() => onSelectAnime(anime.id)}
          >
            <img
              src={anime.coverImage.medium}
              alt={anime.title.romaji}
              className="anime-image"
            />
            <p className="anime-title">{anime.title.romaji}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimeList;
