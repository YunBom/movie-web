/* Project name : movie-web */
/* #7.3 Movie app */
 
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  // const API_KEY = "6a7550329ec87133cb0cc26146c50b7f"
  const url = `https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=6a7550329ec87133cb0cc26146c50b7f&curPage=1`
  useEffect(()=>{
    fetch(url)
    .then((response)=>response.json())
    .then((json)=> {
      console.log(json)
      setMovies(json.movieListResult.movieList);
      setLoading(false);
    });
  }, [])
  console.log(movies)
  return (
    <div>
      {loading ? <h1>Loading...</h1> : 
      <div>
        <h1>영화목록</h1>
        {movies.map((movie)=>
          <div key={movie.movieCd}>
            <hr />
            <h3>{movie.rank} {movie.movieNm}</h3>
            <img style={{width:100, height:100}}src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fmedia.istockphoto.com%2Fvectors%2Fblank-cinema-production-black-clapper-board-vector-id641333522%3Fk%3D6%26m%3D641333522%26s%3D612x612%26w%3D0%26h%3Db_gCXHcNJdiT6taH59d7kja8poZ-fxt-IjQF8qzPnlI%3D&type=sc960_832" />
            <div>개봉일 : {movie.openDt}</div>
            <div>장르 : {movie.genreAlt}</div>
          </div>
        )}
      </div>
      }
      
    </div>
  )
}

export default App;
