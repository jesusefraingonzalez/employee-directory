import React, { Component } from 'react';
import API from '../utils/API';
import UserRow from './UserRow';

class Table extends Component {
    state = {
        employees: [],
        sorted: []
    }

    // make api call when the table mounts
    componentDidMount() {
        API.getRandomUsers(2)
        .then(({ data }) => {
            // console.log(data.results);
            this.setState({
                employees: [...data.results]
            });
        }).catch(err => console.error(err));
    }

    render() {
  
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Cell</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map(employee => {
                            return(
                                <UserRow employee={employee}/>
                            );
                        })}
                    </tbody>

                </table>
            </div>
        )
    }
}

export default Table;