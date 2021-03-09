import React, { Component } from 'react';

class UserRow extends Component {
    state = {
        name: '',
        dob: '',
        email: '',
        phone: '',
        cell: '',
        picture: '',
    }

    componentDidMount() {
        this.setState(this.props.employee);
    }
    
    render() {
        return (
            <tr>
                <td><img src={this.state.thumbnail} /></td>
                <td>{`${this.state.firstName} ${this.state.lastName}`}</td>
                <td>{this.state.phone}</td>
                <td>{this.state.cell}</td>
                <td>{this.state.email}</td>
            </tr>
        )
    }

}

export default UserRow;