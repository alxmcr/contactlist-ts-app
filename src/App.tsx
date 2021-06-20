import { ContactCard } from 'components/ContactCard';
import { ModalContainer } from 'components/ModalContainer';
import { useReducer, useState } from 'react';
import { contactReducer, initialState } from "reducer/ContactReducer";
import './App.css';

function App() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [state, dispatch] = useReducer(contactReducer, initialState);

  return (
    <div className="App">
      <ContactCard state={state} setShowModal={setShowModal} />
      <ModalContainer
        dispatch={dispatch}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
}

export default App;
