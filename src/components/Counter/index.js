import React, {useReducer} from 'react';

const Counter = () => {
    const initialState = {count: 0};

    const reducer = (state, action) => {
        switch (action.type) {
            case 'inc':
                return {count: state.count + 1};
            case 'dec':
                return {count: state.count - 1};
            default:
                throw new Error();
        }
    };
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({type: 'dec'})}>-</button>
            <button onClick={() => dispatch({type: 'inc'})}>+</button>
        </>
    );
};

export default Counter;