import React from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

type ModalProps={
    modalOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({modalOpen, children}) => {
    if(!modalOpen){
        return null
    }
    return createPortal(
        <div className={styles.container}>
            {children}
        </div>, document.body)
 
}

export default Modal