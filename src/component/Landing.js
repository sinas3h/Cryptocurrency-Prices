import React, { useEffect, useState } from 'react';
import { getCoin } from '../service/Api';
import Coin from './Coin';
import style from './Landing.module.css'

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
                <input className={style.input} placeholder='search' type='text' value={input} onChange={(e) => {setInput(e.target.value)}}></input>
            </div>

            <div className={style.coinsDiv}>
                {coinFilter.map(coin => <Coin key={coin.id} data={coin} />)}    
            </div>
        </div>
    );
};

export default Landing;