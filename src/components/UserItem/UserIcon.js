import React, { Component } from 'react';

export default class UserIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
    }
    hoverHandler = () => {
        const {text, changeText} = this.props;
        this.setState({active: true});
        changeText(text);
    }
    render() {
        const {
            styles,
        } = this.props;
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
            <div className={styles} onMouseOver={this.hoverHandler}>prof</div>
        )
    }
}
