/* Project name : movie-web */
/* #7.2 Coin Tracker */
 
import { useState, useEffect } from "react";

function CoinTracker() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    })
  },[])


  return(
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`} </h1>
      {loading ? <strong>Loading...</strong> : 
        <div>
          <select>
            {coins.map((coin)=> 
              <option>{coin.rank} {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD </option>)}
          </select>
        </div>
      }
    </div>
  )
}

export default CoinTracker;
