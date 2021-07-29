import React from 'react';
import { createPortal } from 'react-dom';

type AddCardModalProps={
    cardModalOpen: boolean;
}

const CardModal: React.FC<AddCardModalProps> = ({cardModalOpen, children}) => {
    if(!cardModalOpen){
        return null
    }
    return createPortal(
        <div>
            {children}
        </div>, document.body)
 
}

export default CardModal