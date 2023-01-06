import React, {useState} from 'react';
import './App.css';
import Modal from './Modal';

const App = () => {
  const [openModal, setOpenModal] = useState(false);
  
  return (
    <div className="App">
      <button onClick={() => setOpenModal(true)}>open modal</button>
      {
        openModal ? <Modal /> : null
      }
    </div>
  );
}

export default App;
