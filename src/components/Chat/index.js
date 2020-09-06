import React, {Component, useEffect, useReducer, useState} from 'react';
import MessageContainer from "./MessageContainer";
import reducer from "./reducer"

const data = {
    users: [
        {
            id: 1,
            name: 'John Smith',
        },
        {
            id: 2,
            name: 'Jack Brown',
        },
        {
            id: 3,
            name: 'Uncle FBI'
        }
    ],
    messages: [
        {
            userId: 1,
            body: 'Hi'
        },
        {
            userId: 2,
            body: 'Hello'
        },
        {
            userId: 1,
            body: 'How r u?'
        },
        {
            userId: 2,
            body: 'I`m fine'
        },
        {
            userId: 1,
            body: 'What do u think about it?'
        },
        {
            userId: 2,
            body: 'It`s amazing!'
        },
        {
            userId: 3,
            body: 'Hello, dear)'
        }

    ]
};

const getData = () => data;

function Chat(props){
    const [state, dispatch] = useReducer(reducer, {
        users: new Map(),
        messages: [],
    });
    const [newMsg, changeNewMsg] = useState("");
    const newMessage = () => {
        dispatch({
            type: 'NEW_MSG',
            message:  {
                userId: 1,
                body: newMsg,
            },
        });
        console.log(state.message);
    };

    const handleChange = (event) => {
        changeNewMsg(event.target.value);
    };

    useEffect(()=>{
        const data = getData();
        dispatch({
            type: 'RESPONSE',
            data,
        });
    }, []);
    const {messages} = state;
    console.log(data);
    return(
        <ul>{messages.map((item,index) => (
            <li key={index}>{JSON.stringify(item)}</li>
        ))}
            <input type="text" onChange={handleChange}/>
        <button onClick={newMessage}>newMessage</button>
        </ul>
    )
}
/*
class Chat extends Component {
    render() {
        const messageList = {
            dis
        }
        return (
            <div>
                <MessageContainer />
            </div>
        );
    }
}
*/
export default Chat;