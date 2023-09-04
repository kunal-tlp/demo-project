import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [inputarr, setInputarr]= useState([])
  const [inputdata, setInputdata] = useState({
    name: "",
    rollNo: ""
  })

  function changeHandle(e) {
    setInputdata({ ...inputdata, [e.target.name]: e.target.value })
  }
  let {name,rollNo}=inputdata;
  function changHandle(e) {
    setInputarr([...inputarr,{name,rollNo}])
    console.log(inputdata,"input data what we Enter")
    setInputdata({name:"",rollNo:""})
  }

  function changHandle2() {
    console.log("object store in array",inputarr)
  }

  return (
    <div className="App">
      <input 
        type='text' 
        autoComplete='off' 
        name='name' 
        value={inputdata.name} 
        onChange={changeHandle} 
        placeholder='Enter Name' />
      <input 
        type='text' 
        autoComplete='off' 
        name='rollNo' 
        value={inputdata.rollNo} 
        onChange={changeHandle} 
        placeholder='Enter Roll No' />
      
      <button onClick={changHandle}>Add it</button>
      <button onClick={changHandle2}>Check Array in console</button><br /><br />

      <table border={1} cellPadding={10} >
        <tbody>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
          </tr>
          {
            inputarr.map(
              (info,ind)=>{
                return(
                  <tr key={ind}>
                    <td>{info.name}</td>
                    <td>{info.rollNo}</td>
                  </tr>
                )
              }
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
