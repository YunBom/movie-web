(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(32)},32:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(13),l=n.n(o),r=n(8),i=n(0),m=n(6);var u=function(e){var t=e.movieNm,n=e.openDt,a=e.genreAlt,o=e.movieCd;return a.includes("\uc131\uc778")?null:c.a.createElement("div",null,c.a.createElement("hr",null),c.a.createElement("h3",null," ",c.a.createElement(r.b,{to:"/movie/:".concat(o)},t)," "),c.a.createElement("img",{style:{width:100,height:100},src:"https://search.pstatic.net/sunny/?src=https%3A%2F%2Fmedia.istockphoto.com%2Fvectors%2Fblank-cinema-production-black-clapper-board-vector-id641333522%3Fk%3D6%26m%3D641333522%26s%3D612x612%26w%3D0%26h%3Db_gCXHcNJdiT6taH59d7kja8poZ-fxt-IjQF8qzPnlI%3D&type=sc960_832"}),c.a.createElement("div",null,"\uac1c\ubd09\uc77c : ",n),c.a.createElement("div",null,"\uc7a5\ub974 : ",a))};var s=function(){var e=Object(a.useState)(!0),t=Object(m.a)(e,2),n=t[0],o=t[1],l=Object(a.useState)([]),r=Object(m.a)(l,2),i=r[0],s=r[1];return Object(a.useEffect)(function(){fetch("https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=6a7550329ec87133cb0cc26146c50b7f&openStartDt=2022&itemPerPage=100&curPage=1").then(function(e){return e.json()}).then(function(e){console.log(e),s(e.movieListResult.movieList),o(!1)})},[]),c.a.createElement("div",null,n?c.a.createElement("h1",null,"Loading..."):c.a.createElement("div",null,c.a.createElement("h1",null,"2022 \uc601\ud654\ubaa9\ub85d"),i.map(function(e){return c.a.createElement(u,{movieCd:e.movieCd,movieNm:e.movieNm,openDt:e.openDt,genreAlt:e.genreAlt})})))};var v=function(){var e=Object(i.f)().movieCd,t=Object(a.useState)([]),n=Object(m.a)(t,2),o=n[0],l=n[1],r=Object(a.useState)([]),u=Object(m.a)(r,2),s=u[0],v=u[1],p=Object(a.useState)([]),f=Object(m.a)(p,2),b=f[0],d=f[1],E=Object(a.useState)([]),h=Object(m.a)(E,2),j=h[0],w=h[1];return Object(a.useEffect)(function(){fetch("https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=6a7550329ec87133cb0cc26146c50b7f&movieCd=20201875").then(function(e){return e.json()}).then(function(t){console.log(t),console.log(e),w(t.movieInfoResult.movieInfo),l(t.movieInfoResult.movieInfo.nations),v(t.movieInfoResult.movieInfo.actors),d(t.movieInfoResult.movieInfo.genres)})},[]),c.a.createElement("div",null,c.a.createElement("h1",null," ",j.movieNm," "),c.a.createElement("div",null,"\uac1c\ubd09\uc77c : ",j.openDt," (",j.prdtStatNm,")"),c.a.createElement("div",null,"\uc0c1\uc601\uc2dc\uac04 : ",j.showTm,"\ubd84"),c.a.createElement("div",null,"\uad6d\uac00 : ",o.map(function(e){return c.a.createElement("span",null,e.nationNm," ")})," "),c.a.createElement("div",null,"\uc7a5\ub974 : ",b.map(function(e){return c.a.createElement("span",null,e.genreNm," ")})," "),c.a.createElement("div",null," \ubc30\uc6b0 : ",s.map(function(e){return c.a.createElement("li",null,e.peopleNm," ")})))};var p=function(){return c.a.createElement(r.a,null,c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/movie/:id"},"  ",c.a.createElement(v,null)),c.a.createElement(i.a,{path:"/"},c.a.createElement(s,null))))};l.a.createRoot(document.getElementById("root")).render(c.a.createElement(p,null))}},[[16,2,1]]]);
//# sourceMappingURL=main.958a5bfb.chunk.js.map