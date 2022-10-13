

function Movie({ rank, movieNm, openDt, genreAlt }) {   // 이 prop들은 부모 컴포넌트들로부터 받아옴.
    return(
        <div>
            <hr />
            <h3>{rank} {movieNm}</h3>
            <img style={{width:100, height:100}}src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fmedia.istockphoto.com%2Fvectors%2Fblank-cinema-production-black-clapper-board-vector-id641333522%3Fk%3D6%26m%3D641333522%26s%3D612x612%26w%3D0%26h%3Db_gCXHcNJdiT6taH59d7kja8poZ-fxt-IjQF8qzPnlI%3D&type=sc960_832" />
            <div>개봉일 : {!openDt ? "No data" : openDt}</div>
            <div>장르 : {genreAlt}</div>
        </div>
    )
}


export default Movie;