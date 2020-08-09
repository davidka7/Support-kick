import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const phone = {
phonenumber: phonev

  }
  const [verified, setVerified]= useState(true)
  const [phoneN, setPhoneN]= useState(false)
  const [data, setData]= useState("")
  function handleSubmit (e){
    e.preventDefault();
    setPhoneN(true)
  }
console.log(phoneN)
const getMyData =() => {
  console.log("lol")
fetch('/url', {
  headers : { 
    'Content-Type': 'application/json',
    'Accept': 'application/json'
   }

})
.then(res => res.json())
.then(data => setData(data))
console.log(data)
}

useEffect(() => {
  getMyData();
}, [])


console.log(data)
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
