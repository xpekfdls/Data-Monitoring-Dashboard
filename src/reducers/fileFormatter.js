import * as types from '../actions/ActionTypes';

const initialState = {
    number: 0,
    data: []
};

export default function fileFormatter(state = initialState, action) {

    switch(action.type) {
        case types.INCREMENT:
            return { ...state, number: state.number + 1 };
        case types.DECREMENT:
            return { ...state, number: state.number - 1 };
        case types.READDATA:            
            return { ...state, data: action.data };
        case types.PARSEDATA:
            return { ...state, data: action.data };
        default:
            return state;
    }
}