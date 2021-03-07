import React, { useState } from 'react';
import axios from 'axios';

const numUsers = 100;
const url = `https://randomuser.me/api/?results=${numUsers}`;

const Table = () => {
    const [user, setUser] = useState();

    const populateUsers = () => {
        axios.get(url)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.error(err));
    }
}
