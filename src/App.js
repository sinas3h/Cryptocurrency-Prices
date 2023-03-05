import React from 'react';
import Landing from './component/Landing';
import Footer from './component/Footer';
import style from './App.module.css'
import Navbar from './component/Navbar';

const App = () => {
  return (
    <div className={style.container}>
      <Navbar className={style.navbar} />
      <Landing />
      {/* <Footer /> */}
    </div>
  );
};

export default App;