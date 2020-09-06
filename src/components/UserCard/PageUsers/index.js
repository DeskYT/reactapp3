import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import getUsers from "../api";

class PageUsers extends Component {
    constructor(props) {
        super(props);
        this.state ={
            users: [],
            isLoaded: false,
            error: null,
        }
    }

    load = () => {
        const {currentPage} = this.state;
        getUsers({
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
        this.load();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //if currentPage was changed this.load();
    }

    render() {
        const {error, isLoaded, users} = this.state;
        return (
            <div>

            </div>
        );
    }
}

export default PageUsers;