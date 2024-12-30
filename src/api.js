const ANILIST_API_URL = "https://graphql.anilist.co";

export const fetchAnimeList = async () => {
  const query = `
    query {
      Page(page: 1, perPage: 24) {
        media(type: ANIME, sort: POPULARITY_DESC) {
          id
          title {
            romaji
          }
          coverImage {
            medium
          }
          episodes
        }
      }
    }
  `;

  const response = await fetch(ANILIST_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch anime list");
  }

  const data = await response.json();
  return data.data.Page.media;
};

export const fetchAnimeDetails = async (id) => {
  const query = `
    query ($id: Int) {
      Media(id: $id, type: ANIME) {
        title {
          romaji
        }
        description
        episodes
        coverImage {
          large
        }
      }
    }
  `;

  const response = await fetch(ANILIST_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables: { id } }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch anime details");
  }

  const data = await response.json();
  return data.data.Media;
};
