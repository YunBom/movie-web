import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


function Detail() {
    const {movieCd} = useParams();
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        fetch(`https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=6a7550329ec87133cb0cc26146c50b7f&movieCd=20217126`)
            .then((response)=>response.json())
            .then((json)=> {
                setDetail(json.movieInfoResult.movieInfo);
                console.log(detail);
            })
    }, [])
    return (
        <div>
            <h1> {detail.movieNm} </h1>
            <div>개봉일 : {detail.openDt} ({detail.prdtStatNm})</div>
            <div>상영시간 : {detail.showTm}분</div>
        </div>

    )
}

export default Detail;
