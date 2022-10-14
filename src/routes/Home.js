import { useState, useEffect } from "react";
import Movie from "C:/Users/ahybi/movie-web/src/components/Movie";

function Home(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    // const API_KEY = "6a7550329ec87133cb0cc26146c50b7f"
    const url = `https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=6a7550329ec87133cb0cc26146c50b7f&openStartDt=2022&curPage=1`
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
            <h1>2022 영화목록</h1>
            {movies.map((movie)=>
            <Movie rank={movie.rank} movieNm={movie.movieNm} openDt={movie.openDt} genreAlt={movie.genreAlt}/>
            )}
        </div>
        }
        
        </div>
    )
}

export default Home;
