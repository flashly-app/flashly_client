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
        <h1 className={styles.header__logo}>Flashly</h1>
        <div className="navbar-container">
          <nav className={styles.navbar}>
            <a className={styles.navbar__link} href="/home">Home</a>
            <a className={styles.navbar__link} href="/decks">Decks</a>
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
