import React, { useState } from 'react';
import logo from './logo.svg';
import Hello from './Hello';
import Todo from './Todo';
import './App.css';

function App() {
  const [value, setValue] = useState('');
  const [ todos, setTodos] = useState([]);
  function submit() {
    console.log('value', value);
    //alert('value is ' + value);
    setTodos([...todos, {name: value, status: 'chua hoan thanh', createdDate: new Date()}]);
  }
  function handleChange(event) {
    console.log(event.target.value);
    console.log('updated');
    console.log('vi updated');
    setValue(event.target.value);
  }
  function foo(values) {
    console.log(values);
  }
  return (
    <div className="App">
      <h1 style={{color: 'red'}}>Hello World</h1>
      <Hello text="HelloComponent"></Hello>
      <Hello text="HelloComponent2"></Hello>
 
      {
        todos.map(todo => (
          <Todo name={todo.name}  status={todo.status} createdDate={todo.createdDate} foo={foo} />
        ))
      }
      <div>
        <input type="text" name="name" value={value} onChange={handleChange} />
        <button onClick={submit}>Submit</button>
      </div>
    </div>
  );
}

export default App;
