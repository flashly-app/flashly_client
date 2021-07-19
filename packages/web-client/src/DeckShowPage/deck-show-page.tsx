import React, { useEffect, useState, useCallback } from 'react';
import { CardList } from '../CardList/cardlist';
import styles from './deck-show-page.module.css';
import UseCardModal from '../UseCardModal/use-card-modal';
import CardModal from '../AddCardModal/add-card-modal';
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa';

export interface DeckProps {
    deck: DeckModel;
    setDeck: Function;
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

export const DeckShowPage: React.FunctionComponent<DeckProps> = ({ deck, setDeck }) => {

    const [cardlist, setSelectCardList] = useState([]);
    const [cardModalOpen, setCardModalOpen] = useState(false);
    const [newCardInput, setAddCardInput] = useState({ id: "", front: "", back: "", deckid: "" });

    const [isEditToggle, setEditToggle] = useState(false);
    const [editToggleChange, setEditToggleChange] = useState({
        name: deck.name,
        description: deck.description,
    });
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditToggleChange({ ...editToggleChange, [name]: value });
    };
    const handleEditOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:3005/decks/${deck.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editToggleChange),
        });
        const data = await response.json();
        setEditToggle(false);
        setDeck(data);
    };

    const setCardList = useCallback(async () => {
        const response = await fetch("http://localhost:3005/cards");
        const data = await response.json();
        const result = await data.filter((item: CardListModel) => {
            return item.deckid === deck.id
        })
        setSelectCardList(result)
    }, [deck])

    useEffect(() => {
        setCardList();
    }, [deck, setCardList])

    return (
        <div className={styles.deckShowPage__pageContainer}>
            <div className={styles.deckShowPage__cardContainer}>
                <button className={styles.deckShowPage__button} onClick={() => setCardModalOpen(true)}>
                    Add Card
            </button>
                <CardModal cardModalOpen={cardModalOpen}>
                    <UseCardModal
                        setCardModalOpen={setCardModalOpen}
                        newCardInput={newCardInput}
                        setAddCardInput={setAddCardInput}
                        deckId={deck.id}
                        cardlist={cardlist}
                        setSelectCardList={setSelectCardList}
                    />
                </CardModal>

                <CardList data={cardlist} setCardList={setCardList} />


            </div>

            <pre className={styles.deckShowPage__deckCard}>

                {isEditToggle ? (
                    <>
                        <form
                            className={styles.deckShowPage__form}
                            onSubmit={(e) => { handleEditOnSubmit(e) }}>
                            <label htmlFor="name">Title</label>
                            <input
                                className={styles.deckShowPage__inputs}
                                value={editToggleChange.name}
                                name="name"
                                onChange={(e) => {
                                    handleOnChange(e);
                                }}
                            />
                            <label htmlFor="name">Description</label>
                            <input
                                className={styles.deckShowPage__inputs}
                                value={editToggleChange.description}
                                name="description"
                                onChange={(e) => {
                                    handleOnChange(e);
                                }}
                            />

                            <div className={styles.deckShowPage__editButtons}>
                                <button className={styles.deckShowPage__editButton}>
                                    Submit
                                </button>
                                <button
                                    className={styles.deckShowPage__editButton}
                                    onClick={() => { setEditToggle(false) }}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </>
                ) : (
                    <pre className={styles.deckShowPage__cardContainer}>
                        <div className={styles.deckShowPage__titleContainer}>
                            <div className={styles.deckShowPage__title}>{deck.name}
                                <div className={styles.deckShowPage__buttons}>
                                    <div className={styles.deckShowPage__editButton}>
                                        <FaTrashAlt />
                                    </div>
                                    <div 
                                        className={styles.deckShowPage__editIcon}
                                    onClick={() => {
                                        setEditToggle(true);
                                    }}>
                                        <FaRegEdit />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.deckShowPage__description}>{deck.description}</div>

                        <div>Entries: {cardlist.length}</div>


                    </pre>
                )}

            </pre>
        </div>
    )
}