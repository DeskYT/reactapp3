import React, {Component} from 'react';
import styles from "./UserCardPractice.module.scss"

class UserCardPractice extends Component {
    render() {
        return (
            <div className={styles.cardContainer}>
                <div className={styles.bodyContainer}>
                    <img className={styles.userAvatar} src="https://hairstyles.thehairstyler.com/hairstyle_views/front_view_images/1647/original/James-Cameron.jpg" alt=""/>
                    <h3 className={styles.userFullName}>
                       John Smith
                    </h3>
                    <div className={styles.userAbout}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, ipsam!</div>
                </div>
            </div>
        );
    }
}

export default UserCardPractice;