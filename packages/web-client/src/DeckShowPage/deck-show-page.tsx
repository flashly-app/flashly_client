import React, { useEffect, useState } from 'react';
import { CardList } from '../CardList/cardlist';
import styles from './deck-show-page.module.css';

export interface DeckProps {
    deck: DeckModel;
}

export interface DeckModel {
    id: string;
    description: string;
    name: string;
}

export interface CardListModel {
    id: string;
    front: string;
    back: string;
    deckid: string;
}

export const DeckShowPage: React.FunctionComponent<DeckProps> = ({ deck }) => {

    const [cardlist, setSelectCardList] = useState([]);

    useEffect(() => {
        const setCardList = async () => {
            const response = await fetch("http://localhost:3005/cards");
            const data = await response.json();
            const result = await data.filter((item: CardListModel) => {
                return item.deckid === deck.id
            })
            setSelectCardList(result)
        }
        setCardList();
    }, [deck])
    return (
        <div className={styles.deckShowPage__pageContainer}>
            <div className={styles.deckShowPage__cardContainer}>
                <button className={styles.deckShowPage__button}>
                    Add Card
            </button>
                
                <CardList data={cardlist} /> 

                
            </div>

            <pre className={styles.deckShowPage__deckCard}>
                <div className={styles.deckShowPage__title}>{deck.name}</div>
                <div className={styles.deckShowPage__description}>{deck.description}</div>
            </pre>
        </div>
    )
}