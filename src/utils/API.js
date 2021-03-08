import axios from 'axios';

const API = {
    getRandomUsers: (numUsers) => {
        let url;
        if (numUsers) url = `https://randomuser.me/api/?results=${numUsers}&inc=name,dob,picture,email,phone,cell,nat&noinfo`;
        else url = `https://randomuser.me/api/?results=100&inc=name,dob,picture,email,phone,cell,nat&noinfo`;

        return axios.get(url);
    }
}

export default API;