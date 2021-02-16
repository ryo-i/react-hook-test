import React, { useState, useEffect, useContext } from 'react';
import { Context } from './App.js';


function Count() {
  
    const context = useContext(Context);
    const name = context.name;

    const [count, setCount] = useState(context.count);

    useEffect(() => {
        document.title = `React Hooks事始め - ${name}が ${count} 匹`;
    });

    return (
        <div className="reactHookTest">
            <h2>React Hooks事始め</h2>
            <p>{name}が {count} 匹</p>
            <button onClick={() => setCount(count + 1)}>
            数える
            </button>
        </div>
    );
}

export default Count;