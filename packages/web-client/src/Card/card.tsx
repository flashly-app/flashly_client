import React, { useState } from 'react';
import { CardListModel } from '../DeckShowPage/deck-show-page';
import styles from './card.module.css';
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa';

export interface CardProps {
    data: CardListModel;
    setCardList: () => void;
}

export const Card: React.FC<CardProps> = ({
    data: { front, back, id, deckid }, setCardList
}) => {


    const [isCardEditToggle, setCardEditToggle] = useState(false);
    const [editToggleChange, setCardEditToggleChange] = useState({
        front: front,
        back: back,
        id: id,
        deckid: deckid
    });
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCardEditToggleChange({ ...editToggleChange, [name]: value });
    };
    const handleEditOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:3005/cards/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editToggleChange),
        });
        await response.json();
        setCardEditToggle(false);
        setCardList();
    };


    const handleDeleteRoute = async (id: string) => {
        const response = await fetch(`http://localhost:3005/cards/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        await response.json();
        setCardList();
    };

    return (
        <>

            <div className={styles.card__container}>
                <div className={styles.card__sectionA}>
                    {isCardEditToggle ? (
                        <>
                            <form
                            autoComplete='off'
                            className={styles.card__formContainer}
                                onSubmit={(e) => handleEditOnSubmit(e)}
                            >
                                <input
                                    onChange={(e) => handleOnChange(e)}
                                    value={editToggleChange.front}
                                    name="front"
                                    className={styles.card__title} />
                                <div className={styles.card__vr}></div>
                                <input
                                    onChange={(e) => handleOnChange(e)}
                                    value={editToggleChange.back}
                                    name="back"
                                    className={styles.card__description} />
                                <div className={styles.card__editButtons}>
                                    <button>Submit</button>
                                    <button onClick={() => { setCardEditToggle(false) }}>Cancel</button>
                                </div>
                            </form>
                        </>
                    ) : (
                        <>
                            <div className={styles.card__title}>{front}</div>
                            <div className={styles.card__vr}></div>
                            <div className={styles.card__description}>{back}</div>
                            <div className={styles.card__sectionB}>
                                <div
                                    className={styles.card__delete}
                                    onClick={() => handleDeleteRoute(id)}
                                > <FaTrashAlt /> </div>
                                <div
                                    className={styles.card__edit}
                                    onClick={() => setCardEditToggle(true)}
                                > <FaRegEdit /> </div>
                            </div>
                        </>

                    )}
                </div>

            </div>
        </>
    )
}
