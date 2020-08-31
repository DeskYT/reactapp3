import React, { Component } from 'react';
import styles from './UserItem.module.scss';
import UserIcon from "./UserIcon.js";

export default class UserItem extends Component {
  constructor(props) {
    super(props);
      const {name, email, location} = props;
      this.state = {
          renderText:`${name.first} ${name.last}`,
          icons: [],
      };
      this.state.icons.push(new iconData(`${name.first} ${name.last}`, "name", true));
      this.state.icons.push(new iconData(email, "email"));
      this.state.icons.push(new iconData(`${location.city}, ${location.country}`, "location"));
  }

  removeUser = () => {
    this.props.removeUser(this.props.id);
  }
  changeActive = (text, type) => {
    this.setState({renderText: text});
    this.setState({
        icons: this.state.icons.map((value, index) => {
            value.isActive = value.type == type;
            return value;
        })
    })

  }

  render() {
    const {
      id,
      picture: { medium: imgSrc },
    } = this.props;
    const {renderText} = this.state;
      return(
          <div className={styles.userItemContainer} id={id}>
              <div className={styles.userAvatar}>
                  <img src={imgSrc} alt="userAvatar"/>
              </div>
              <div className="userInfo">
                  <h2 className={styles.userInfo}>{renderText}</h2>
              </div>
              <div className={styles.iconContainer}>
                  {this.state.icons.map((value, index) => {
                      return <UserIcon key={index} changeActive={this.changeActive} text={value.text} type={value.type} isActive={value.isActive}/>
                  })}
              </div>
              <div className={styles.removeCross} onClick={this.removeUser}>X</div>
          </div>
      )
  }
}

class iconData
{
    constructor(text, type, isActive = false) {
        this.text = text;
        this.type = type;
        this.isActive = isActive;
    }
}
