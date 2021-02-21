import React, { useState, useEffect, useContext } from 'react';
import { Context } from './App.js';
import firebase from "firebase/app";
import 'firebase/database';

// Config
const config = {
    apiKey: "AIzaSyBju9iq3ug6gJMqyVsoGX_YByHt6L3Dh0c",
    authDomain: "kumokotsu-test.firebaseapp.com",
    databaseURL: "https://kumokotsu-test-default-rtdb.firebaseio.com",
    storageBucket: "kumokotsu-test.appspot.com"
};
firebase.initializeApp(config);

// DB
const db = firebase.database();

console.log(db);

function Count() {
  
    const context = useContext(Context);
    const [name, setName] = useState(context.name);
    const [count, setCount] = useState(context.count);

    useEffect(() => {
        // fetch('https://my-json-server.typicode.com/ryo-i/react-hook-test/data/1') // json-server
        fetch('https://kumokotsu-test-default-rtdb.firebaseio.com/counter.json') // realtime database
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