import axios from 'axios';

const API = {
    getRandomUsers: (numUsers) => {
        let url;
        let seed = 'seedmeplease';
        if (numUsers) url = `https://randomuser.me/api/?results=${numUsers}&seed=${seed}&inc=name,dob,picture,email,phone,cell,location&noinfo`;
        else url = `https://randomuser.me/api/?results=100&seed=${seed}&inc=name,dob,picture,email,phone,cell,location&noinfo`;

        return axios.get(url);
    }
}

export default API;