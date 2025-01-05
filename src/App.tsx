import React from 'react';
import './App.css';

let name:string ;
let age :number | string;
let IsStudent: boolean;
let hobbies: string[];
let role: [number,string];

function printName(name:string) {
  console.log(name)
}
printName("harshal")

// type Person = {
//   name: string;
//   age?: number;
// }

// let person: Person = {
//   name: "Harhsal",
// }

// let lotOFPeople: Person[];

function App() {
  return (
    <div>
      Hello World
    </div>
  );
}

export default App;
