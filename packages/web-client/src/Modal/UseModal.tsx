import React from 'react';
import styles from './UseModal.module.css';


type UseModalProps = {
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const UseModal: React.FC<UseModalProps> = ({ setModalOpen }) => (
    <div className={styles.modal__background}>
        <div className={styles.modal__contentContainer}>
            <div className={styles.modal__content}>
                <form className={styles.modal__form}>

                    
                        <label>
                            <input className={styles.modal__title} name="title" placeholder="Title"
                            />
                        </label>

                        <label>

                            <input className={styles.modal__description} name="description" placeholder="Description" />
                        </label>


                
                    <div className={styles.modal__buttons}>
                        <button>Add</button>
                        <button
                            type='button'
                            onClick={() => setModalOpen(false)}
                        >
                            Cancel
                </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
)

export default UseModal