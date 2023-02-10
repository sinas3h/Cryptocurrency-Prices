import React, { Suspense, useEffect, useState } from 'react';
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

const Coin = React.lazy(() => import('./Coin'))

const coinFilter = coins.filter(coin => coin.name.toLowerCase().includes(input.toLowerCase()))

    return (
        <div className={style.container}>
            <div className={style.inputDiv}>
                <h1 className={style.header}><span>Cryptocurrency</span> Prices by Market Cap</h1>
                <input className={style.input} placeholder='search' type='text' value={input} onChange={(e) => {setInput(e.target.value)}}></input>
            </div>

            <div className={style.coinsDiv}>
                <Suspense fallback={<h2 className={style.loading}>Loading...</h2>}>
                    {coinFilter.map(coin => <Coin key={coin.id} data={coin} />)}   
                </Suspense> 
            </div>
        </div>
    );
};

export default Landing;