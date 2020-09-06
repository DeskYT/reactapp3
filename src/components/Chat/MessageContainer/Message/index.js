import React, {Component} from 'react';
import styles from "./Message.module.scss";

class Message extends Component {
    constructor(props) {
        super(props);
        const {sender, message, date} = props;
        this.state = {
            sender: sender,
            message: message,
            date: date
        }
        /*this.state = {
            sender: {
                name: "John Smith",
                avatar: "src link"
            },
            message: "",
            date: Date.now()
        }*/
    }
    render() {
        const {sender, message, date} = this.state;
        return (
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.senderName}>{sender.Name}</div>
                    <div className={styles.date}>{date}</div>
                </div>

                <div className={styles.message}>{message}</div>
            </div>
        );
    }
}

export default Message;