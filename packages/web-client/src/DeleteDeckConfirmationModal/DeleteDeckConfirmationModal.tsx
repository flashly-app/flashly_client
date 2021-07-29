import React from 'react';
import { createPortal } from 'react-dom';
import styles from '../UseCardModal/use-card-modal.module.css';

export interface DeleteDeckConfirmationModalProps {
    togglePrompt: boolean;
    setTogglePrompt: React.Dispatch<React.SetStateAction<boolean>>
    handleDeleteRoute: () => void;

}

const DeleteDeckConfirmationModal: React.FC<DeleteDeckConfirmationModalProps> = ({ togglePrompt, setTogglePrompt, handleDeleteRoute }) => {


    if (!togglePrompt) {
        return null
    }
    return createPortal(
        <div className={styles.useCardModal__background}>
            <div className={styles.useCardModal__center}>
                <div className={styles.useCardModal__container}>
                    <div className={styles.useCardModal__labels}>
                        Are you sure you want to delete this deck?
                        </div>
                    <div className={styles.useCardModal__buttons}>
                        <button
                            onClick={() => handleDeleteRoute()}
                        >Yes</button>
                        <button
                            type='button'
                            onClick={() => setTogglePrompt(false)}
                        >
                            No
                </button>
                    </div>

                </div>
            </div>
        </div>




        , document.body)

}

export default DeleteDeckConfirmationModal