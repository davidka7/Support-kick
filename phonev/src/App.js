import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [verified, setVerified]= useState(false)
  const [phoneN, setPhoneN]= useState(false)
  function handleSubmit (e){
    e.preventDefault();
    setPhoneN(true)
  }
console.log(phoneN)

  return (
    <div className="App">
      {(verified)? <div>
    <h1>Choose your form</h1>
    <form onSubmit={handleSubmit}><label>Enter Your phone number</label><input type="text" name="phoneN" ></input>
    <br/>
    </form>
    <form>
 {(phoneN) ? 
   ( <div><label>Access Code?</label><input type="text" name="accessC"></input></div>)
    : ""
 }
    </form></div> : (<div> <h1>Thank You For Your Patience, Your Phone Number Was Verified.</h1>


</div>) 
}
    </div>
  );
}

export default App;
