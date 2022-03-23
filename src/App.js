import React from 'react';
import ButtonModal from './components/ButtonModal';
import Modal from './components/Modal';

const App = () => {
  const [modal, setModal] = React.useState(false);
  const [active, setActive] = React.useState(true)
  const [data, setData] = React.useState({ nickname: 'Andre', year: '20' });
  function handleClick() {
    setActive(!active)
    setData({...data, university: 'Has university'})
  }
  return (
    <div>
      <ButtonModal setModal={setModal}></ButtonModal>
      <div>{modal ? 'Modal Aberto' : 'Modal fechado' }</div>
      <Modal modal={modal} setModal={setModal}/>
      <p>{data.nickname}</p>
      <p>{data.year}</p>
      <p>{data.university}</p>
      <button onClick={handleClick}>{active ? 'Activo' : 'Inactive'}</button>
    </div>
  );
}

export default App;
