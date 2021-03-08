import React, { Component } from 'react';

class UserRow extends Component {

    render() {
        // destructure the user object props
        const {
            name,
            location,
            email,
            dob: { date, age },
            registered,
            phone,
            cell,
            picture: { thumbnail }
        } = this.props;

        return (
            <tr>
                <td></td>
                <td></td>
            </tr>
        )
    }

}