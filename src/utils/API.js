import axios from 'axios';

const API = {
    getRandomUsers: (numUsers) => {
        let url;
        let seed = 'seedmeplease';
        
        if (numUsers) url = `https://randomuser.me/api/?results=${numUsers}&seed=${seed}&inc=name,picture,email,phone,cell&noinfo`;
        else url = `https://randomuser.me/api/?results=10&seed=${seed}&inc=name,picture,email,phone,cell&noinfo`;

        return axios.get(url);
    }
}

export default API;