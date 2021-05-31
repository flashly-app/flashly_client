
import React, { useEffect, useState } from 'react';

import { DeckList } from '../DeckList/deck-list';

import styles from './App.module.css';

function App() {
  const [deckList, setDeckList] = useState([]);

  const fetchDeckListData = async () => {
    const response = await fetch("http://localhost:3005/decks");
    const data = await response.json();

    setDeckList(data);
  };

  useEffect(() => {
    fetchDeckListData();
  }, []);

  return (
    <div className="App">
      <div className={styles.header}>
        <h1 className={styles.header__logo}>
        <a className={styles.header__logo} href="/">Flashly</a>  
        </h1>
        <div className={styles.navbar__container}>
          
          <nav className={styles.navbar}>
          <div className={styles.navbar__spaceA}>
            <a className={styles.navbar__link} href="/decks">Decks</a>
            <button className={styles.navbar__button}>Create</button>
          </div>
          
          <div className={styles.navbar__spaceB}>
          <button className={styles.navbar__button}>User Login</button>
          </div>
          </nav>
        </div>

      </div>

      <main>
        <div className="dashboard">
          <DeckList data={deckList} />
          <button>Add Deck</button>
        </div>
      </main>
    </div>
  );
}

export default App;
