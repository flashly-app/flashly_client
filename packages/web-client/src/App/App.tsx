
import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import UseModal from '../Modal/UseModal';
import styles from './App.module.css';
import { Homepage } from '../Homepage/Homepage';
import { DeckShowPage } from '../DeckShowPage/deck-show-page';

function App() {
  const [deck, setDeck] = useState({id:"", description:"", name:""});
  const [openDeck,setOpenDeck] = useState(false)
  const [modalOpen, setModalOpen] = useState(false) 
  


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
            <button 
            onClick = {() => setModalOpen(true)} 
            className={styles.navbar__button}
            >
              Create
            </button>
            <Modal modalOpen={modalOpen}>
              <UseModal setModalOpen = {setModalOpen} />
            </Modal>
          </div>
          
          <div className={styles.navbar__spaceB}>
          <button className={styles.navbar__button}>User Login</button>
          </div>
          </nav>
        </div>

      </div>
      
      <div id="modal-root">
      </div>

      <main>
        <div className="dashboard">
          {openDeck ? ( <DeckShowPage deck={deck} setDeck={setDeck} setOpenDeck={setOpenDeck}/>) : (<Homepage setDeck={setDeck} setOpenDeck={setOpenDeck}/>)}
        </div>
      </main>
    </div>
  );
}

export default App;
