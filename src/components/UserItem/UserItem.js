import React, { Component } from 'react';
import styles from './UserItem.module.scss';

export default class UserItem extends Component {
  constructor(props) {
    super(props);
  }

  removeUser = () => {
    this.props.removeUser(this.props.id);
  }

  render() {
    const {
      id,
      name,
      location,
      phone,
      email,
      cell,
      picture: { medium: imgSrc },
    } = this.props;

    //console.log(this.props);

    return (
      <div className={styles.userItemContainer} id={id}>
        <div className={styles.userAvatar}>
          <img src={imgSrc} alt="userAvatar"/>
        </div>
        <div className="userInfo">
          <h2 className={styles.userFName}>{`${name.first} ${name.last}`}</h2>
          <h3 className={styles.userEmail}>{email}</h3>
          <h4 className={styles.userLocation}>{`${location.city}, ${location.country}`}</h4>
        </div>
        <div className={styles.removeCross} onClick={this.removeUser}>X</div>
      </div>

    );
  }
}
