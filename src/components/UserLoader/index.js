import React, {Component} from 'react';
import {getData} from "../../api";

class UserLoader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            currentPage: 1,
            isFetching: true,
            error: null,
        };
    }

    loadUsers = () => {
        const {currentPage} = this.state;
        getData({
            page: currentPage,
            result: 10,
        }).then(data => {
            this.setState({
                users: data.results,
                isFetching: false,
            });
        }).catch(error => {
            this.setState({error, isFetching: false,})
        });
    };

    componentDidMount() {
        this.loadUsers();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.currentPage !== this.state.currentPage)
            this.loadUsers();
    }

    prev = () => {
        const {currentPage} = this.state;
        if(currentPage > 1)
            this.setState({currentPage: currentPage - 1});
    }

    next = () => {
        const {currentPage} = this.state;
        this.setState({currentPage: currentPage + 1});
    }

    render() {
        const {users, error, isFetching, currentPage} = this.state;
        if(error) return <div>Error</div>;
        if(isFetching) return <div>LOAD...</div>;
        return (
            <>
                <h1>{currentPage}</h1>
                <button onClick={this.prev}>Prev</button>
                <button onClick={this.next}>Next</button>
                <ul>
                    <li>
                        <h2>User List:</h2>
                    </li>
                    {users.map(u => (<li key={u.email}>
                        <br/>
                        {JSON.stringify(u,null, '\t')}
                    </li>))}
                </ul>
            </>
        );
    }
}

export default UserLoader;