import React, {Component} from 'react';
import styles from "./UserCard.module.scss"

class UserCard extends Component {
    constructor(props) {
        super(props);
        //"https://hairstyles.thehairstyler.com/hairstyle_views/front_view_images/1647/original/James-Cameron.jpg"
    }
    render() {
        const {user} = this.props;
        return (
            <div className={styles.cardContainer}>
                <div className={styles.bodyContainer}>
                    <img className={styles.userAvatar} src={user.avatar} alt=""/>
                    <h3 className={styles.userFullName}>
                       {`${user.name} ${user.surname}`}
                    </h3>
                    <div className={styles.userAbout}>{user.about}</div>
                </div>
            </div>
        );
    }
}

export default UserCard;