import movies from "/src/data/movies";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function MovieLists() {
  return (
    <>
      <div
        className="movie-list-container"
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <h1
          css={css`
            margin-top: 70px;
            font-size: 40px;
            font-style: normal;
            font-weight: 400;
            line-height: 18px;
          `}
        >
          Movie List Section
        </h1>
        {movies.map((item, index) => {
          return (
            <div
              className="card-container"
              key={index}
              css={css`
                margin-top: 80px;
                display: flex;
                align-items: center;
                height: 280px;
                width: 520px;
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 0px 4px 40px 0px rgba(145, 124, 124, 0.25);
                position: relative;
              `}
            >
              <div className="content-left">
                <img
                  css={css`
                    margin-left: 14px;
                    top: 18px;
                    width: 102px;
                    height: 100px;
                    border-radius: 10px;
                    position: absolute;
                    object-fit: cover;
                  `}
                  src={item.image}
                />
              </div>

              <div
                className="content-right"
                css={css`
                  position: absolute;
                  margin-left: 135px;
                  display: flex;
                  flex-direction: column;
                  gap: 18px;
                  color: #181818;
                  font-size: 20px;
                  font-style: normal;
                  font-weight: 400;
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
                  {item.genres.map((genre, index) => (
                    <div
                      css={css`
                        border-radius: 10px;
                        background: #eaac99;
                        padding: 4px 13px;
                        font-size: 16px;
                      `}
                      key={index}
                    >
                      {genre}
                    </div>
                  ))}
                </span>
                <span>IMDB Ratings: {item.imdbRating}</span>
                <span>IMDB Votes: {item.imdbVotes}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default MovieLists;
