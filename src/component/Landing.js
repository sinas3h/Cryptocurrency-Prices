import React, { useEffect, useState } from 'react';
import { getCoin } from '../service/Api';
import Coin from './Coin';
import style from './Landing.module.css'
import Loading from './Loading';



const Landing = () => {

const [coins , setCoins] = useState([])
const [input , setInput] = useState('')
const [viewMore , setViewMore] = useState(false)

useEffect(() => {
    const fetchData = async () => {
        const data = await getCoin()
        setCoins(data)
    }
    fetchData()
},[])
console.log(coins)

const viewMoreHandler = ()=> {
    setViewMore(!viewMore)
    console.log("more")
    console.log(viewMore)
}




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

            <div className={!viewMore ? style.coinsDiv : style.coinsDivActive }>
                {coins == false ? <Loading />
                : coinFilter.map(coin => <Coin key={coin.id} data={coin} />)}
            </div>

            {(coins.length && !viewMore) && <p className={style.viewMore} onClick={viewMoreHandler}>view more</p>}
            {(coins.length && viewMore) && <p className={style.viewMore} onClick={viewMoreHandler}>view less</p>}
            
        </div>
    );
};

export default Landing;