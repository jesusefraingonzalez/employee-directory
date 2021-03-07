import React, { useState } from 'react';
import axios from 'axios';

const numUsers = 100;
const url = `https://randomuser.me/api/?results=${numUsers}&inc=name,dob,picture,email,phone,cell,nat&noinfo`;

const Table = () => {
    const [users, setUsers] = useState();

    const populateUsers = () => {
        axios.get(url)
            .then(({ data }) => {
                console.log(data);
                setUsers(data.results);
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <table>
                <tr>
                    <th></th>
                    <th></th>
                </tr>
            </table>
        </div>
    )
}
