import React from 'react';


type UseModalProps = {
    setModalOpen: any;
};

const UseModal: React.FC<UseModalProps> = ({setModalOpen}) => (
    <div>
    <p>Title</p>
      <button
        type='button'
        onClick={() => setModalOpen(false)}
      >
        <span>Close Modal</span>
      </button>
      <p>This is a cool modal!</p>
  </div>
)

export default UseModal