import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Navbar from "./Navbar";
import Banner from "./Banner";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row
        title="TRENDING NOW"
        fetchUrl={requests.fetchTrending}
        isLargeRow={true}
      />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />

      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance MOVIES" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
