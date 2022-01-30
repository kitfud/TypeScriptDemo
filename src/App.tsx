import React from 'react';
import './App.css';

let name: string;
let age: number | string;
let isstudent: boolean;
let hobbies: string[];
let role: [number, string];
//tuple
role = [5, "string"];
//objects
type Person = {
  name: string;
  age?: number;
}
let person: Person;
age = 5
age = "happy"
person = { name: "Kit" }

//array of objects
let lotsofPerson: Person[];

function printName(name: string) {
  console.log(name)
}

printName("hello")

function App() {
  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
