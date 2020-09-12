import React from 'react';
import PropTypes from 'prop-types';
import styles from "./UserAbout.module.scss";

const UserAbout = props => {
    return (
        <div className={styles.userAbout}>{props.about}</div>
    );
};

UserAbout.propTypes = {
    about: PropTypes.string.isRequired
};

export default UserAbout;