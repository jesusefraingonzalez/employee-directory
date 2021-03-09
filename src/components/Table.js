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
        // api call to get random users
        API.getRandomUsers(5)
            .then(({ data }) => {
                const employees = data.results.map(employee => {
                    return {
                        firstName: employee.name.first,
                        lastName: employee.name.last,
                        phone: employee.phone,
                        cell: employee.cell,
                        email: employee.email,
                        thumbnail: employee.picture.thumbnail
                    }
                });

                this.setState({
                    employees: [...employees]
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
                            return (
                                <UserRow employee={employee} />
                            );
                        })}
                    </tbody>

                </table>
            </div>
        )
    }
}

export default Table;