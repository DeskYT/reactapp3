import React from 'react';
import PropTypes from 'prop-types';
import styles from "./UserFullName.module.scss";

const UserFullName = props => {
    const {fullName} = props;
    return (
        <h3 className={styles.userFullName}>
            {fullName}
        </h3>
    );
};

UserFullName.propTypes = {
    fullName: PropTypes.string.isRequired,
};

export default UserFullName;