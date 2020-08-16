import React, { Component } from 'react';
import styles from './UserItem.module.scss';

export default class UserItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      name,
      location,
      phone,
      email,
      cell,
      picture: { medium: imgSrc },
    } = this.props;

    console.log(this.props);

    return (
      <div className={styles.userItemContainer}>
        <img className={styles.userAvatar} src={imgSrc} alt="userAvatar" />
        <div className={styles.userFName}>{`${name.first} ${name.last}`}</div>
        <div>{`Phone number: ${phone}`}</div>
        <div>{`${location.country} ${location.city}`}</div>
      </div>
    );
  }
}
