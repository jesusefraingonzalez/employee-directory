import React, { Component } from 'react';
import UserRow from './UserRow';

class Table extends Component {
    render() {

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone</th>
                            <th>Cell</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.employees.map(employee => {
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