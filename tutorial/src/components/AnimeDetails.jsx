import React, { useState, useEffect } from "react";
import { fetchAnimeDetails } from "../api";
import "./AnimeDetails.css";

const AnimeDetails = ({ animeId }) => {
  const [anime, setAnime] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAnimeDetails = async () => {
      try {
        const data = await fetchAnimeDetails(animeId);
        setAnime(data);
      } catch (err) {
        setError(err.message);
      }
    };

    if (animeId) getAnimeDetails();
  }, [animeId]);

  if (error) return <p className="error-message">Error: {error}</p>;
  if (!anime) return <p className="placeholder-message">Select an anime to view details.</p>;

  return (
    <div className="anime-details">
      <h2>{anime.title.romaji}</h2>
      <div className="details-container">
        <img
          src={anime.coverImage.large}
          alt={anime.title.romaji}
          className="details-image"
        />
        <div className="details-info">
          <p><strong>Episodes:</strong> {anime.episodes}</p>
          <p
            className="details-description"
            dangerouslySetInnerHTML={{ __html: anime.description }}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetails;
