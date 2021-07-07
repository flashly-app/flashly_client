import React from 'react';
import { CardListModel } from '../DeckShowPage/deck-show-page';
import styles from './use-card-modal.module.css'

type UseCardModalProps = {
    setCardModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    newCardInput: CardListModel;
    setAddCardInput: Function;
    deckId: string;
    setSelectCardList: Function;
    cardlist: CardListModel[];
};



const UseCardModal: React.FC<UseCardModalProps> = ({ setCardModalOpen, newCardInput, setAddCardInput, deckId, setSelectCardList, cardlist }) => {
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const randomId = Math.floor(Math.random() * 10000).toString();
        setAddCardInput({
            ...newCardInput, [name]: value, deckid: deckId, id: randomId
        })
    }

    const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3005/cards", {
                method: "POST",
                body: JSON.stringify(newCardInput),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            })
            const data = await response.json();
            setAddCardInput({ front: "", back: "", id: "", deckid: "" })
            setCardModalOpen(false);
            const newArray = [...cardlist, data];
            setSelectCardList(
                newArray
            );
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={styles.useCardModal__background}>
            <div>
                <div className={styles.useCardModal__center}>
                    <form
                        className={styles.useCardModal__container}
                        onSubmit={(e) => {
                            handleOnSubmit(e);
                        }}>
                        <div>
                            <div className={styles.useCardModal__labels}>
                                <label>
                                    <input
                                        className={styles.useCardModal__input}
                                        name="front"
                                        value={newCardInput.front}
                                        placeholder="New Card"
                                        onChange={(e) => {
                                            handleOnChange(e);
                                        }}
                                    />
                                </label>
                                <div className={styles.card__vr}></div>
                                <label>

                                    <input
                                        className={styles.useCardModal__input}
                                        name="back"
                                        value={newCardInput.back}
                                        placeholder="New Description"
                                        onChange={(e) => {
                                            handleOnChange(e);
                                        }} />

                                </label>
                            </div>
                            <div className={styles.useCardModal__buttons}>
                                <button>Add Card</button>
                                <button
                                    type='button'
                                    onClick={() => setCardModalOpen(false)}
                                >
                                    Cancel
                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UseCardModal