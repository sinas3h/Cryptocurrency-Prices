import React from "react";

//style
import style from "./Coin.module.css";

const Coin = (props) => {
  const {
    id,
    name,
    image,
    market_cap_rank,
    price_change_percentage_24h,
    symbol,
    current_price,
    market_cap,
  } = props.data;
  return (
    <div className={style.container}>
      <p className={style.rank}>{market_cap_rank}</p>
      <img className={style.image} src={image} alt={id}></img>
      <p className={style.name}>{name}</p>
      <p className={style.symbol}>{symbol.toUpperCase()}</p>
      <p className={style.price}>
        $ {current_price.toFixed(2).toLocaleString()}
      </p>
      <p
        className={
          price_change_percentage_24h > 0 ? style.changeG : style.changeR
        }
      >
        {price_change_percentage_24h.toFixed(2)}
      </p>
      <p className={style.cap}>$ {market_cap.toLocaleString()}</p>
    </div>
  );
};

export default Coin;
