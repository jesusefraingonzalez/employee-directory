import axios from 'axios';


export default {
    getRandomUsers: (numUsers) => {
        let url;
        if (numUsers) url = `https://randomuser.me/api/?results=${numUsers}&inc=name,dob,picture,email,phone,cell,nat&noinfo`;
        else url = `https://randomuser.me/api/?results=100&inc=name,dob,picture,email,phone,cell,nat&noinfo`;

        return axios.get(url)
            .then(({ data }) => {
                console.log(data);
            })
            .catch(err => console.error(err));
    }
}