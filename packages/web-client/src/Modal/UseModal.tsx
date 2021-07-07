import React from "react";
import styles from "./UseModal.module.css";

type UseModalProps = {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setNewDeckInput: Function;
  newDeckInput: FormDataModel;
  deckList: FormDataModel[];
  setDeckList: Function;
};
export interface FormDataModel {
  id: string;
  name: string;
  description: string;
}

const UseModal: React.FC<UseModalProps> = ({
  setModalOpen,
  setNewDeckInput,
  newDeckInput,
  deckList,
  setDeckList,
}) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const randomId = Math.floor(Math.random() * 10000).toString();
    setNewDeckInput({ ...newDeckInput, [name]: value, id: randomId });
  };
  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3005/decks", {
        method: "POST",
        body: JSON.stringify(newDeckInput),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();
      const updatedData = [...deckList, data];
      setDeckList(updatedData);
      setNewDeckInput({ name: "", description: "", id: "" });
      setModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.modal__background}>
      <div className={styles.modal__contentContainer}>
        <div className={styles.modal__content}>
          <form
            className={styles.modal__form}
            onSubmit={(e) => handleOnSubmit(e)}
          >
            <label>
              <input
                className={styles.modal__title}
                name="name"
                placeholder="Title"
                value={newDeckInput.name}
                onChange={(e) => {
                  handleOnChange(e);
                }}
              />
            </label>

            <label>
              <input
                className={styles.modal__description}
                name="description"
                placeholder="Description"
                value={newDeckInput.description}
                onChange={(e) => {
                  handleOnChange(e);
                }}
              />
            </label>

            <div className={styles.modal__buttons}>
              <button>Add</button>
              <button type="button" onClick={() => setModalOpen(false)}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UseModal;
