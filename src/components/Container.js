import React, { Component } from 'react';
import Searchbar from './Searchbar';
import Table from './Table';
import API from '../utils/API';

class Container extends Component {
    state = {
        employees: [],
        sortedEmployees: [],
        sortCriteria: 'first name',
        sortOrder: 'ascending',
        isSorted: true,
        filterQuery: ''
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSearch = event => {
        this.setState({filterQuery: event.target.value});
    }

    filterEmployees = () => {
        let query = this.state.filterQuery.toLowerCase();
        return this.state.sortedEmployees.filter(employee => employee.firstName.toLowerCase().includes(query));
    }

    sortEmployees = () => {
        let list = this.state.sortedEmployees;
        if (!this.state.isSorted) return this.setState({ sortedEmployees: this.state.employees });

        switch (this.state.sortCriteria) {
            case 'first name':
                if (this.state.sortOrder === 'ascending') list.sort((a, b) => a.firstName < b.firstName ? -1 : 1);
                else list.sort((a, b) => a.firstName > b.firstName ? -1 : 1);
                break;
            case 'last name':
                if (this.state.sortOrder === 'ascending') list.sort((a, b) => a.lastName < b.lastName ? -1 : 1);
                else list.sort((a, b) => a.lastName > b.lastName ? -1 : 1);
                break;
            default:
                break;
        }
        this.setState({ sortedEmployees: list });
        console.log(this.state.sortedEmployees);
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
                <input onChange={this.handleSearch} type='text' />
                <button onClick={() => this.filterEmployees()}> Filter by Name</button>
                <br/> 
                <button onClick={() => this.sortEmployees()}>Sort by First Name</button>
                <Table employees={this.state.sortedEmployees} />
            </div>
        )
    }
}

export default Container;