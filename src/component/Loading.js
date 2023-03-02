import React from 'react';

//style
import style from './Loading.module.css'

const Loading = () => {
    return (
        <div className={style.loadinBlock}>
            <span className={style.loadingSpinner}></span>
        </div>
    );
};

export default Loading;