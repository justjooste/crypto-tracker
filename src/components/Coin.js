import React from "react";
import "./Coin.css";

function moneyFormat(num) {
    num = Math.abs(Number(num))
    const billions = num/1.0e+9
    const millions = num/1.0e+6
    const thousands = num/1.0e+3
    return num >= 1.0e+9 && billions >= 100  ? Math.round(billions)  + "B"
         : num >= 1.0e+9 && billions >= 10   ? billions.toFixed(1)   + "B"
         : num >= 1.0e+9                     ? billions.toFixed(2)   + "B"
         : num >= 1.0e+6 && millions >= 100  ? Math.round(millions)  + "M"
         : num >= 1.0e+6 && millions >= 10   ? millions.toFixed(1)   + "M"
         : num >= 1.0e+6                     ? millions.toFixed(2)   + "M"
         : num >= 1.0e+3 && thousands >= 100 ? Math.round(thousands) + "K"
         : num >= 1.0e+3 && thousands >= 10  ? thousands.toFixed(1)  + "K"
         : num >= 1.0e+3                     ? thousands.toFixed(2)  + "K"
         : num.toFixed()
  }

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  return (
    <div className="cryptoCoin">
      <img src={image} alt={`${name}`} className="coinLogo" />
      <div className="coinNameWrap">
        <h1 className="coinName">{name}</h1>
        <p className="coinSymbol">{symbol}</p>
      </div>

      
      <div className='coinPriceInfo'>
        <p className="coinPrice">${price.toLocaleString()}</p>
        {priceChange < 0 ? (
            <p className="priceChange redText">{priceChange.toFixed(2)}%</p>
        ) :
        (
            <p className="priceChange greenText">{priceChange.toFixed(2)}%</p>
        )}
        
      </div>

      <p className="coinMarketcap">Market Cap: ${moneyFormat(marketcap)}</p>
      <p className="coinVolume">Volume (24H): ${moneyFormat(volume)}</p>
    </div>
  );
};

export default Coin;