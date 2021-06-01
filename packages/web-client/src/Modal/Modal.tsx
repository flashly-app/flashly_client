import React from 'react';
import ReactDOM from 'react-dom';

type ModalProps={
    modalOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({modalOpen, children}) => {
    if(!modalOpen){
        return null
    }
    return ReactDOM.createPortal(
        <div>
            <span>I'm a modal</span>
            <button>Add</button>
            <button>Cancel</button>
        </div>, document.body)
 
}

export default Modal