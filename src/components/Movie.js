import React from "react";
import {
    Link
  } from "react-router-dom";
import "./Movie.css";


function Movie({ movieNm, openDt, genreAlt, movieCd }) {   // 이 prop들은 부모 컴포넌트들로부터 받아옴.
    if(genreAlt.includes("성인")) {     // 성인물 제외
        return(null);
    }
    else {
    return(
        <div className="movieComponent arrayCenter">
            <img style={{width:100, height:100}}src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fmedia.istockphoto.com%2Fvectors%2Fblank-cinema-production-black-clapper-board-vector-id641333522%3Fk%3D6%26m%3D641333522%26s%3D612x612%26w%3D0%26h%3Db_gCXHcNJdiT6taH59d7kja8poZ-fxt-IjQF8qzPnlI%3D&type=sc960_832" />
            <h3> <Link to ={`/movie/${movieCd}`} className="movieTitle">{movieNm}</Link> </h3> 
            <div className="movieOpenDt">개봉일 : {openDt.substring(2,4)}.{openDt.substring(4,6)}.{openDt.substring(6,8)}</div>
            <div className="movieGenre">장르 : {genreAlt}</div>
        </div>
    )
}}


export default Movie;
