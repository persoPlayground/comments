import { NEW_MESSAGE, SET_USERNAME, REACTION_OBJECTS } from './constants'

export const initialState = { 
    messages:[],
    username: 'anonymous',
    reactionMap: {}
}

const REACTION_TYPES = REACTION_OBJECTS.map(reaction => reaction.type);

export default (state, action) => {

if(REACTION_TYPES.includes(action.type)) {
    let reactionMap;

    const { messageID } = action.item;
    const messageReactions = state.reactionMap[messageID];
    if(messageReactions) {
        reactionMap = {
            ...state.reactionMap,
            [messageID]:[...messageReactions, action.item]
        }
    } else {
        reactionMap = {
            ...state.reactionMap,
            [messageID]:[action.item]
        }

    }

    return { ...state, reactionMap}
}
    switch(action.type) {
        case NEW_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.item]
            }
        case SET_USERNAME:
                return {
                    ...state,
                    username: action.username
           }
        default:
            return state;
    }
}