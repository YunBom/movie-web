(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports={body:"Movie_body__1Gdd0",moviePart:"Movie_moviePart__3Wn5v",eachMovie:"Movie_eachMovie__1okQg"}},17:function(e,t,n){e.exports=n(34)},34:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(14),l=n.n(c),r=n(8),i=n(0),m=n(6),u=n(10),s=n.n(u);var v=function(e){var t=e.movieNm,n=e.openDt,a=e.genreAlt,c=e.movieCd;return a.includes("\uc131\uc778")?null:o.a.createElement("div",{className:s.a.eachMovie},o.a.createElement("h3",null," ",o.a.createElement(r.b,{to:"/movie/".concat(c)},t)," "),o.a.createElement("img",{style:{width:100,height:100},src:"https://search.pstatic.net/sunny/?src=https%3A%2F%2Fmedia.istockphoto.com%2Fvectors%2Fblank-cinema-production-black-clapper-board-vector-id641333522%3Fk%3D6%26m%3D641333522%26s%3D612x612%26w%3D0%26h%3Db_gCXHcNJdiT6taH59d7kja8poZ-fxt-IjQF8qzPnlI%3D&type=sc960_832"}),o.a.createElement("div",null,"\uac1c\ubd09\uc77c : ",n.substring(2,4),".",n.substring(4,6),".",n.substring(6,8)),o.a.createElement("div",null,"\uc7a5\ub974 : ",a))};var b=function(){var e=Object(a.useState)(!0),t=Object(m.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)([]),r=Object(m.a)(l,2),i=r[0],u=r[1];return Object(a.useEffect)(function(){fetch("https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=6a7550329ec87133cb0cc26146c50b7f&openStartDt=2022&itemPerPage=100&curPage=1").then(function(e){return e.json()}).then(function(e){u(e.movieListResult.movieList),c(!1)})},[]),o.a.createElement("div",null,n?o.a.createElement("h1",null,"Loading..."):o.a.createElement("div",{className:s.a.body},o.a.createElement("h1",null,"2022 \uc601\ud654\ubaa9\ub85d"),o.a.createElement("div",{className:s.a.moviePart},i.map(function(e){return o.a.createElement(v,{movieCd:e.movieCd,movieNm:e.movieNm,openDt:e.openDt,genreAlt:e.genreAlt})}))))};var d=function(){var e=Object(a.useState)(!0),t=Object(m.a)(e,2),n=t[0],c=t[1],l=Object(i.f)().movieCd,r=Object(a.useState)([]),u=Object(m.a)(r,2),s=u[0],v=u[1],b=Object(a.useState)([]),d=Object(m.a)(b,2),p=d[0],f=d[1],E=Object(a.useState)([]),h=Object(m.a)(E,2),j=h[0],g=h[1],w=Object(a.useState)([]),O=Object(m.a)(w,2),k=O[0],I=O[1];return Object(a.useEffect)(function(){fetch("https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=6a7550329ec87133cb0cc26146c50b7f&movieCd=".concat(l)).then(function(e){return e.json()}).then(function(e){console.log(l),console.log(e),I(e.movieInfoResult.movieInfo),v(e.movieInfoResult.movieInfo.nations),f(e.movieInfoResult.movieInfo.actors),g(e.movieInfoResult.movieInfo.genres),c(!1)})},[]),o.a.createElement("div",null,n?o.a.createElement("h1",null,"Loading..."):o.a.createElement("div",null,o.a.createElement("h1",null," ",k.movieNm," "),o.a.createElement("div",null,"\uac1c\ubd09\uc77c : ",k.openDt),o.a.createElement("div",null,"\uc0c1\uc601\uc2dc\uac04 : ",k.showTm,"\ubd84"),o.a.createElement("div",null,"\uad6d\uac00 : ",s.map(function(e){return o.a.createElement("span",null,e.nationNm," ")})," "),o.a.createElement("div",null,"\uc7a5\ub974 : ",j.map(function(e){return o.a.createElement("span",null,e.genreNm," ")})," "),o.a.createElement("div",null," \ubc30\uc6b0 : ",p.map(function(e){return o.a.createElement("li",null,e.peopleNm," ")}))))};var p=function(){return o.a.createElement(r.a,null,o.a.createElement(i.c,null,o.a.createElement(i.a,{path:"/movie/:movieCd"},o.a.createElement(d,null)),o.a.createElement(i.a,{path:"/"},o.a.createElement(b,null))))};l.a.createRoot(document.getElementById("root")).render(o.a.createElement(p,null))}},[[17,2,1]]]);
//# sourceMappingURL=main.b3a8dbd1.chunk.js.map