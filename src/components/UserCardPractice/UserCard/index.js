import React, {Component} from 'react';
import styles from "./UserCard.module.scss"
import UserAvatar from "./UserAvatar";
import UserFullName from "./UserFullName";
import UserAbout from "./UserAbout";

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
                    <UserAvatar src={user.avatar} />
                    <UserFullName fullName={`${user.name} ${user.surname}`}/>
                    <UserAbout about={user.about}/>
                </div>
            </div>
        );
    }
}

export default UserCard;