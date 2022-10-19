// 깃허브 업로드 npm run deploy

import React, { useState, useEffect } from "react";
import Movie from "../components/Movie";
import styles from "../components/Movie.module.css";

// 영화 진흥위원회 API 주소 https://www.kobis.or.kr/kobisopenapi/homepg/apiservice/searchServiceInfo.do
function Home(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const url = `https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=6a7550329ec87133cb0cc26146c50b7f&openStartDt=2022&itemPerPage=100&curPage=1`
    useEffect(()=>{
        fetch(url)
        .then((response)=>response.json())
        .then((json)=> {
            setMovies(json.movieListResult.movieList);
            setLoading(false);
        });
    }, [])

    return (
        <div>
        {loading ? <h1>Loading...</h1> : 
        <div className={styles.body}>
            <h1>2022 영화목록</h1>
            <div className={styles.moviePart}>
                {movies.map((movie)=>
                <Movie
                    movieCd={movie.movieCd}
                    movieNm={movie.movieNm} 
                    openDt={movie.openDt} 
                    genreAlt={movie.genreAlt}/>
                )}
            </div>
        </div>
        }
        </div>
    )
}

export default Home;
