import React, { Component } from 'react';
import API from '../utils/API';
import UserRow from './UserRow';

class Table extends Component {
    state = {
        employees: [],
        sortedEmployees: [],
        sortCriteria: '',
        sortOrder: '',
        isSorted: false,
    }

    sortEmployees() {
        let list = this.state.sortedEmployees;
        if (!this.isSorted) return this.setState({ sortedEmployees: this.state.employees });

        switch (this.state.sortCriteria) {
            case 'first name':
                if (this.state.sortOrder === 'ascending') list = list.sort((a, b) => a.firstName > b.firstName ? -1 : 1);
                else list = list.sort((a, b) => a.firstName < b.firstName ? -1 : 1);
                break;
            case 'last name':
                if (this.state.sortOrder === 'ascending') list = list.sort((a, b) => a.lastName > b.lastName ? -1 : 1);
                else list = list.sort((a, b) => a.lastName < b.lastName ? -1 : 1);
                break;
            default:
                break;
        }

    }

    // make api call when the table mounts
    componentDidMount() {
        // api call to get random users
        API.getRandomUsers(5)
            .then(({ data }) => {
                const employees = data.results.map(employee => {
                    // returns an object with no nested objects
                    return {
                        firstName: employee.name.first,
                        lastName: employee.name.last,
                        phone: employee.phone,
                        cell: employee.cell,
                        email: employee.email,
                        thumbnail: employee.picture.thumbnail
                    }
                });
                // sets the employees state to the array with the cleaned data
                this.setState({
                    employees: [...employees],
                    sortedEmployees: [...employees]
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
                        {this.state.sortedEmployees.map(employee => {
                            return (
                                <UserRow key={employee.email} employee={employee} />
                            );
                        })}
                    </tbody>

                </table>
            </div>
        )
    }
}

export default Table;