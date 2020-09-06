import React, {Component} from 'react';
import Message from "./Message";
import styles from "./MessageContainer.module.scss"


class MessageContainer extends Component {
    constructor(props) {
        super(props);
        const {messageList} = props;
        this.state = {
            messageList: messageList
        }
    }
    render() {
        const {messageList} = this.props;
        messageList.map((item, index) => {
            return <Message key={index} sender={item.sender} message={item.message} date={item.date} />
        });
        return (
            <div className={styles.container}>
                {messageList}
            </div>
        );
    }
}

export default MessageContainer;