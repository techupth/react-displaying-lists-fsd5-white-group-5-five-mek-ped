import movies from "./data/movies";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "./App.css";

function App() {
  return (
    <div
      css={css`
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
      className="App"
    >
      <h1
        css={css`
          margin-top: 69px;
          color: black;
        `}
      >
        Movie list
      </h1>
      <section className="movie-list-section">
        {movies.map((item, index) => {
          return (
            <div
              css={css`
                display: flex;
                gap: 19px;
                background: #ffffff;
                border-radius: 10px;
                box-shadow: 0px 4px 40px 0px rgba(145, 124, 124, 0.25);
                padding: 18px;
                margin: 80px;
              `}
              key={index}
            >
              <img
                css={css`
                  width: 103px;
                  height: 100px;
                  border-radius: 10px;
                `}
                src={item.image}
              />
              <div
                css={css`
                  display: flex;
                  flex-direction: column;
                  gap: 17px;
                  color: #181818;
                  font-size:20px
                  font-weight: 400;
                  line-height: 18px;
                  font-family: Kanit;
                `}
              >
                <span>Title: {item.title}</span>
                <span>Year: {item.year}</span>
                <span>Runtime: {item.runtime}</span>
                <span
                  css={css`
                    display: flex;
                    gap: 9px;
                  `}
                >
                  Genres:{" "}
                  {item.genres.map((item, index) => {
                    return (
                      <div
                        css={css`
                          border-radius: 10px;
                          background: #eaac99;
                          text-align: center;
                          padding: 4px 13px;
                        `}
                        key={index}
                      >
                        {item}
                      </div>
                    );
                  })}
                </span>
                <span>IMDB Ratings: {item.imdbRating}</span>
                <span>IMDB Votes: {item.imdbVotes}</span>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;
