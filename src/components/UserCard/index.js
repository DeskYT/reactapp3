import React, {Component} from 'react';
import getUsers from "./api/index"

class UserCard extends Component {

    render() {
        console.log(getUsers());
        return (
            <div>

            </div>
        );
    }
}

export default UserCard;