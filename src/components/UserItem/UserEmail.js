import React, { Component } from 'react';
import styles from './UserItem.module.scss';

export default class UserIcon extends Component {
    constructor(props) {
        super(props);
    }
    changeText = () => {
        const {changeText, email} = this.props;
        changeText(email);
    }

    render() {
        return(
            <div className={styles.emailIcon} onMouseOver={this.changeText}>email</div>
        )
    }
}
