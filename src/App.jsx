import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const handleClick = () => {
    setName("yenly")
    setAddress("chupaca")
  }
  useEffect(()=> {
    let fecha=new Date();
    document.title="page1:"+fecha
    
  } ,[name,address])
  
  return (
    
    <>
      <h2> usando usState</h2>
      <p>nombre:{name}</p>
      <p>direccion:{address}</p>
      <button onClick={handleClick}>cambiar</
      button>
    </>
  )
}


