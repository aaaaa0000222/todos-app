import React, { useState } from 'react';

function f() {

}

const g = () => {

}

f();
export default function Todo(props) {
    //let x = 123;
    //x = 124;
    //const ab = 'sfsf';
    const { foo, name, status, createdDate } = props; // prop.foo
    const [value, setValue] = useState('this is value');
    const handleClick = () => {
        foo(value);
    }
    return (
       <div className="todo" style={{display: 'flex'}}>
            <p>{name}</p>
            <p>{status}</p>
            <p>{createdDate.toString()}</p>
            <button onClick={handleClick}>Click</button>
       </div>
    )
}