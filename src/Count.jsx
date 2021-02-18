import React, { useState, useEffect, useContext } from 'react';
import { Context } from './App.js';


function Count() {
  
    const context = useContext(Context);
    const [name, setName] = useState(context.name);
    const [count, setCount] = useState(context.count);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/ryo-i/react-hook-test/data/1')
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    setName(result.name);
                    setCount(result.count);
                },
                (error) => {
                    console.log(error);
                    const errData = {
                        name: '名無し',
                        count: 0
                    }
                    setName(errData.name);
                    setCount(errData.count);
                }
            );
    }, []);

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