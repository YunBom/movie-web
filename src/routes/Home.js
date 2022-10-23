// 깃허브 업로드 npm run deploy

import React, { useState, useEffect } from "react";
import Movie from "../components/Movie";
import "../components/Movie.css";
import styles from "../App.module.css";

// 영화 진흥위원회 API 주소 https://www.kobis.or.kr/kobisopenapi/homepg/apiservice/searchServiceInfo.do
function Home(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const url = `https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=6a7550329ec87133cb0cc26146c50b7f&openStartDt=2022&itemPerPage=50&curPage=${page}`
    const submitEvent = (event) => {
        event.preventDefault();
        setPage(event.target[0].value);
        console.log(event.target[0].value);
        fetch(url)              // 페이지 입력시 페이지 전환
        .then((response)=>response.json())
        .then((json)=> {
            setMovies(json.movieListResult.movieList);
            setLoading(false);
        });
    }

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
            {loading ? <h1 className="loading">Loading...</h1> : 
            <div className="container arrayCenter">
                <h1 className="header">2022 영화목록</h1>
                <form onSubmit={submitEvent}>
                    <input type="number" min="1" placeholder="페이지를 입력해주세요"/>
                    <span className={styles.pageText}> {page} 페이지 </span>
                </form>
                <div className="movies">
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
