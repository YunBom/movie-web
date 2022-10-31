import React, { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";


function Detail() {
    const [loading, setLoading] = useState(true);
    const {movieCd} = useParams();
    const [nation, setNation] = useState([]);   // 국가
    const [actor, setActor] = useState([]);   // 배우
    const [genre, setGenre] = useState([]);   // 장르
    const [detail, setDetail] = useState([]);

    useEffect(() => {
        fetch(`https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=6a7550329ec87133cb0cc26146c50b7f&movieCd=${movieCd}`)
            .then((response)=>response.json())
            .then((json)=> {
                console.log(movieCd);
                console.log(json);
                setDetail(json.movieInfoResult.movieInfo);
                setNation(json.movieInfoResult.movieInfo.nations);  // 국가
                setActor(json.movieInfoResult.movieInfo.actors);    // 배우
                setGenre(json.movieInfoResult.movieInfo.genres);    // 장르
                setLoading(false);
            })
    }, []) 
``
    return (
        <div>
            {loading ? <h1>Loading...</h1> :
            <div>
                <h1> {detail.movieNm} </h1>
                <div>개봉일 : {detail.openDt}</div>
                <div>상영시간 : {detail.showTm}분</div>
                <div>국가 : {nation.map((nation) => <span>{nation.nationNm} </span>)} </div>
                <div>장르 : {genre.map((genres) => <span>{genres.genreNm} </span>)} </div>
                <div> 배우 : {actor.map((actors) => <li>{actors.peopleNm} </li>)}</div>
            </div>
        }
        </div>
    )
}

export default Detail;
