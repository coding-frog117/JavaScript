import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  let [modal,setModal]=useState(false);

  return (
    <div className='cont'>
      <button onClick={()=>{
        modal === true ? setModal(false) : setModal(true)}}>모달 보여주세요</button>
      {modal=== true 
      ? (<div className="box">
          <p>모달창입니다</p>
        </div>)
      : null}
    </div>
  );
}

export default App;

