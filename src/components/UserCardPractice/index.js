import React, {Component} from 'react';
import styles from './UserCardPractice.module.scss'
import UserCard from "./UserCard";

class UserCardPractice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isFetching: true
        };

        //console.log(this.users)
    }
    componentDidMount() {
        this.fetchUsers()
    }
    async fetchUsers(){
        fetch("./userData/users.json")
            .then(res => res.json())
            .then(res => {
                console.log(res);
                this.setState({
                    users: res,
                    isFetching: false});
            })
            .catch(e => console.error(e));
    }


    render() {
        /*this.users.map(item =>{
           return <UserCard user={item} />;
        });*/
        const {users, isFetching} = this.state;
        if(isFetching){
            return <div>Loading...</div>;
        }
        const userCards = users.map(item =>{
            return <UserCard key={item.id} user={item} />;
        });
        return (
            <div className={styles.container}>
                {userCards}
            </div>
        );
    }
}

export default UserCardPractice;