import React from 'react';
import Landing from './component/Landing';
import style from './App.module.css'

const App = () => {
  return (
    <div className={style.container}>
      <Landing />
    </div>
  );
};

export default App;