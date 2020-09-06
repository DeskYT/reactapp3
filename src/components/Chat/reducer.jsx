export default function funChatReducer(state, action) {
    console.log(action,state);
    switch (action.type) {
        case "NEW_MSG":{
            const {users, messages} = state;
            const {message} = action;
            const msgFromUser = {
                ...message,
                user: users.get(message.userId),
            };
            const newMsg = [...messages, msgFromUser];
            return {
                ...state,
                messages: newMsg,
            }
        }
        case "RESPONSE":{
            const{
                data: {users, messages}
            } = action;
            const usersMap = new Map();
            users.forEach (u => {
                usersMap.set(u.id, u);
            });
            const msgWithSenders = messages.map((u) => ({
                    ...u,
                    sender: usersMap.get(u.userId) ?? null,
            }));
            return {
            ...state,
            users: usersMap,
            messages: msgWithSenders}
        }
        default:{
            return state;
        }

    }
}