import React, { Component } from 'react';
import styles from './UserItem.module.scss';

export default class UserItem extends Component {
  constructor(props) {
    super(props);
      const {name} = props;
      this.state = {
          renderText:`${name.first} ${name.last}`,
      };
  }

  removeUser = () => {
    this.props.removeUser(this.props.id);
  }
    changeText = (text) => {
    this.setState({renderText: text});
    }
  /*processRender = {
      renderFName: () => {
          const {name} = this.props;
          this.setState({renderText: `${name.first} ${name.last}`});
      },
      renderEmail:() => {
          const {email} = this.props;
          this.setState({renderText: email,});
      },
      renderLocation: () =>{
          const {location} = this.props;
          this.setState({renderText: `${location.city}, ${location.country}`});
      },
  }*/


  render() {
    const {
      id,
      /*name,
      location,
      phone,
      email,
      cell,*/
      picture: { medium: imgSrc },
    } = this.props;
    const {renderText} = this.state;
    //console.log(this.props);

    /*return (
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

    );*/
    return(
        <div className={styles.userItemContainer} id={id}>
          <div className={styles.userAvatar}>
            <img src={imgSrc} alt="userAvatar"/>
          </div>
          <div className="userInfo">
            <h2 className={styles.userFName}>{renderText}</h2>
          </div>
          <div className={styles.iconContainer}>
            <div className={styles.profileIcon} onMouseOver={this.renderFName}>prof</div>
            <div className={styles.emailIcon} onMouseOver={this.renderEmail}>email</div>
            <div className={styles.locationIcon} onMouseOver={this.renderLocation}>loc</div>
          </div>
          <div className={styles.removeCross} onClick={this.removeUser}>X</div>
        </div>
    )
  }
}
