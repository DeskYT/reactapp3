import React, { Component } from 'react';
import styles from './UserItem.module.scss';

export default class UserIcon extends Component {
    constructor(props) {
        super(props);
    }
    hoverHandler = () => {
        const {text, changeActive} = this.props;
        changeActive(text, this.props.type);
    }
    render() {
        const {
            type,
            isActive
        } = this.props;
        const className = isActive ? styles[`${type}Icon`] + " " + styles.iconActive : styles[`${type}Icon`]
        return(
            <div className={className} onMouseOver={this.hoverHandler}> </div>
        )
    }
}
