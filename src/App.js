import React from 'react';
import Landing from './component/Landing';
import Footer from './component/Footer';
import style from './App.module.css'

const App = () => {
  return (
    <div className={style.container}>
      <Landing />
      <Footer />
    </div>
  );
};

export default App;