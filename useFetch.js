// var fetch = require('node-fetch');
import fetch from 'node-fetch';

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // console.log(typeof data); // Should log 'object'
        for (const key in data) {
            console.log(`${key}: ${data[key]}`);
        }
    })
    .catch(error => {
        console.error("Error fetching data:", error.message);
    });
