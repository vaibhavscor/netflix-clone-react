const Api_key = "#api key";

// objects of api request
// note we are using ` insted of '

const requests = {
  fetchTrending: `/trending/all/week?api_key=${Api_key}&language=en-US `,
  fetchNetflixOriginals: `/discover/tv?api_key=${Api_key}&with_network=213`,
  fetchTopRated: `/movie/top_rated?api_key=${Api_key}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${Api_key}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${Api_key}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${Api_key}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${Api_key}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${Api_key}&with_genres=99`,
};

export default requests;
