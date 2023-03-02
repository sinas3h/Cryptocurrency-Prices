import React, { useEffect, useState } from 'react';
import { getCoin } from '../service/Api';
import Coin from './Coin';
import style from './Landing.module.css'
import Loading from './Loading';



const Landing = () => {

const [coins , setCoins] = useState([])
const [input , setInput] = useState('')

useEffect(() => {
    const fetchData = async () => {
        const data = await getCoin()
        setCoins(data)
    }
    fetchData()
},[])
console.log(coins)

const coinFilter = coins.filter(coin => coin.name.toLowerCase().includes(input.toLowerCase()))

    return (
        <div className={style.container}>
            <div className={style.inputDiv}>
                <h1 className={style.header}><span>Cryptocurrency</span> Prices by Market Cap</h1>
                <input className={style.input} placeholder='search' type='text' value={input} onChange={(e) => {setInput(e.target.value)}}></input>
            </div>

            <div className={style.table}>
                <p className={style.tableHashtag}>#</p>
                <p className={style.tableName}>Name</p>
                <p className={style.tablePrice}>Price</p>
                <p className={style.table24}>24 %</p>
                <p className={style.tableMktcap}>Market Cap</p>
            </div>

            <div className={style.coinsDiv}>
                {coins == false ? <Loading />
                : coinFilter.map(coin => <Coin key={coin.id} data={coin} />)}
                {/* {coins ? coinFilter.map(coin => <Coin key={coin.id} data={coin} />)
                :<h2 className={style.loading}>Loading...</h2> } */}
            </div>
        </div>
    );
};

export default Landing;