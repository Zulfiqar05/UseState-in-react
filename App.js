import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Check from './Check';



function App() {

  
//  ********  State  ********** 

  const [data,setData] =useState(0)
  function updateData(){
    setData(data+1)
  }


  const [name,setName] =useState("kabeer")
  function Ali(){
    setName("ali")
  }





  







  function apple(){
    alert("function call")
   }
  return (
    <div className="App">
    <button onClick={apple}>Click me</button>


{/* //  ********  State  **********  */}


    <h1>{data}</h1>
    <button onClick={updateData}>Update Data</button>



    <h1 >{name}</h1>
    <button onClick={Ali} >Click</button>

    <Check/>
    


    </div>


   

  );
}

export default App;
