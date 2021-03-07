import axios from 'axios';


export default {
    getRandomUsers: (numUsers) => {
        let url = `https://randomuser.me/api/?results=${numUsers}&inc=name,dob,picture,email,phone,cell,nat&noinfo`;
        
        return axios.get(url)
            .then(({ data }) => {
                console.log(data);
            })
            .catch(err => console.error(err));
    }
}