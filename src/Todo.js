import React from 'react';

export default function Todo(props) {
    return (
       <div className="todo" style={{display: 'flex'}}>
            <p>{props.name}</p>
            <p>{props.status}</p>
            <p>{props.createdDate.toString()}</p>
       </div>
    )
}