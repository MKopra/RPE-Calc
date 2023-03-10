import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ChangeEvent, FormEvent, useState, useRef } from "react";
import { display } from '@mui/system';
import Menu from "./components/menu";
import Sets from "./components/menu";
import exportSet from "./components/menu";
import rawStringSelectSet from "./components/menu";
import DropDown from "./components/dropdown";
import ReactDOMServer from 'react-dom/server'
import chosenSet from "./components/menu";
import selectSet from "./components/menu";

type formData = {
  onerepmax: number;
  tworepmax: number;
  threerepmax: number;
};


let INITIAL_DATA: formData = {
  onerepmax: 0, 
  tworepmax: 0,
  threerepmax: 0
  }


{
//const repMaxFor1RMonly = {}
}



  function onSubmit(e: FormEvent) {
    e.preventDefault()}

function App()
{
const [onerepmax, setValue] = useState<number>();
const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
  setValue(+e.target.value);}
const [tworepmax, setValue2] = useState<string | number>('');
const handleChange2 = (e: ChangeEvent<HTMLInputElement>) =>{
   setValue2(+e.target.value);}
const [threerepmax, setValue3] = useState<string | number>('');
const handleChange3 = (e: ChangeEvent<HTMLInputElement>) =>{
    setValue3(+e.target.value);}
const oneRMval = useRef(onerepmax)
const twoRMval = useRef(tworepmax)
const threeRMval = useRef(threerepmax)



const newExport = selectSet.toString()
console.log(selectSet)

const rpeTable = () => {
  if(selectSet.toString() === "Set of 1") 
    return <>foo</>;
 };


  return (  
    
      <div className="App">
        <header className="App-header">
          <p>Hello, Matt! This is your app.</p>
          <br />
          <br />
          <form onSubmit={onSubmit}>
            
            <div className="app">
              <Menu />
            </div>
            <br />
            <br />
          </form>
        </header>
      </div>
    );
  }
  
  export default App
