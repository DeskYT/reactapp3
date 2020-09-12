import React from 'react';
import PropTypes from 'prop-types';
import styles from "./UserAvatar.module.scss";

const UserAvatar = props => {
    return (
        <img className={styles.userAvatar} src={props.src} alt=""/>
    );
};

UserAvatar.propTypes = {
    src: PropTypes.string.isRequired
};

export default UserAvatar;