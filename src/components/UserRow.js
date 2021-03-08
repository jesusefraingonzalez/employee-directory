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
        // destructure the user object props
        const {
            name,
            location,
            dob,
            email,
            // dob: { date, age },
            registered,
            phone,
            cell,
            picture: { thumbnail }
        } = this.props.employee;

        this.setState({
            name: name,
            dob: dob,
            email: email,
            phone: phone,
            cell: cell,
            picture: thumbnail,
            location: location.country,
        });
        console.log(this.props);
    }
    render() {
        return (
            <tr>
                <td><img src={this.state.picture}/></td>
                <td>{`${this.state.name.first} ${this.state.name.last}`}</td>
                <td>{this.state.phone}</td>
                <td>{this.state.cell}</td>
                <td>{this.state.location}</td>
            </tr>
        )
    }

}

export default UserRow;