import React, { useEffect, useState } from 'react';

//api
import { getCoin } from '../service/Api';

//component
import Coin from './Coin';
import Loading from './Loading';

//style
import style from './Landing.module.css'




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
}




const coinFilter = coins.filter(coin => coin.name.toLowerCase().includes(input.toLowerCase()))

    return (
        <div className={style.container}>

            <h1 className={style.header}><span>Cryptocurrency</span> Prices by Market Cap</h1>

            <div className={style.inputDiv}>
                <input className={style.input} placeholder='search' type='text' value={input} onChange={(e) => {setInput(e.target.value)}}></input>
            </div>

            <div className={style.table}>
                <p className={style.tableHashtag}>#</p>
                <p className={style.tableName}>Name</p>
                <p className={style.tablePrice}>Price</p>
                <p className={style.tableChange24}>24H %</p>
                <p className={style.tableMktcap}>Market Cap</p>
            </div>

            <div className={style.coinsDivWrapper}>
                <div className={!viewMore ? style.coinsDiv : style.coinsDivActive }>
                    {!coins.length ? <Loading />
                    : coinFilter.map(coin => <Coin key={coin.id} data={coin} />)}
                </div>

                {(coins.length && !viewMore) ? 
                <p className={style.viewMore} onClick={viewMoreHandler}>view more</p>
                :
                viewMore &&
                <p className={style.viewLess} onClick={viewMoreHandler}>view less</p>}

            </div>
            

        </div>
    );
};

export default Landing;