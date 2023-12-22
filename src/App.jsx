import "./App.css";
import movies from "./data/movies.jsx";
import MovieLists from "./MovieLists.jsx";

function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        <MovieLists />
      </section>
    </div>
  );
}

export default App;
