import React, { Component } from 'react';
import API from '../utils/API';

class Table extends Component {
    state = {
        employees =[],
        sorted =[]
    }

    // make api call when the table mounts
    componentDidMount() {
        API.getRandomUsers(2)
            .then(({ data }) => {
                console.log(data.results);
                this.setState({
                    employees: [...data.results]
                })
            }).catch(err => console.error(err));
    }

    render() {
        return (
            <div>
                <table>
                    <tr>
                        <th></th>
                        test
                        <th></th>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Table;