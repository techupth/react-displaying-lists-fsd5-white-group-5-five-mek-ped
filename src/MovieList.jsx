/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { movies } from "../data/movies";

function MovieList() {
  return (
    <div>
      {movies.map((value, index) => {
        return (
          <div
            key={index}
            css={css`
              width: 400px;
              height: 250px;
              flex-shrink: 0;
              border-radius: 10px;
              background: #fff;
              box-shadow: 0px 4px 40px 0px rgba(145, 124, 124, 0.25);
            `}
          >
            <div>
              <img
                src={value.image}
                css={css`
                  width: 102px;
                  height: 100px;
                  flex-shrink: 0;
                  border-radius: 10px;
                `}
              />
            </div>
            <div>
              <div>Title: {value.title}</div>
              <div>Year: {value.year}</div>
              <div>Runtime: {value.runtime}</div>
              <div
                css={css`
                  display: flex;
                `}
              >
                Genre:
                {value.genre.map((value, index) => {
                  return (
                    <div
                      key={index}
                      css={css`
                        width: 68px;
                        height: 27px;
                        flex-shrink: 0;
                        border-radius: 10px;
                        background: #eaac99;
                      `}
                    >
                      {value}
                    </div>
                  );
                })}
              </div>
              <div>IMDB Ratings: {value.imdbRating}</div>
              <div>IMDB Votes: {value.imdbVotes}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MovieList;
