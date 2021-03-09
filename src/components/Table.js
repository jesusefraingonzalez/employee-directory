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
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Cell</th>
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