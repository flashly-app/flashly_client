import React from 'react';
import { CardListModel } from '../DeckShowPage/deck-show-page';
import styles from './card.module.css';
import { FaGithub, FaRegEdit, FaTrashAlt } from 'react-icons/fa';

export interface CardProps {
    data: CardListModel;
}

export const Card: React.FC<CardProps> = ({
    data: { front, back }
}) => {
    return (
        <>
            <div className={styles.card__container}>
                <div className={styles.card__sectionA}>
                    <div className={styles.card__title}>{front}</div>
                    <div className={styles.card__vr}></div>
                    <div className={styles.card__description}>{back}</div>
                </div>
                <div className={styles.card__sectionB}>
                    <div className={styles.card__delete}> <FaTrashAlt/> </div>
                    <div className={styles.card__edit}> <FaRegEdit /> </div>
                </div>
            </div>
        </>
    )
}
