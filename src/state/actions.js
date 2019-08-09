import uuid from 'uuid/v4';

import { NEW_MESSAGE, SET_USERNAME } from './constants';

export const newMessage = ({text, username}) => ({
    type: NEW_MESSAGE,
    item : { id: uuid(), text, username, timestamp: Date.now() }
});

export const setUserNameAction = username => ({
    type: SET_USERNAME,
    username
});

export const createReactionAction = ({type, emoji, username, messageID }) => ({
    type,
    item : { id: uuid(), timestamp: Date.now(),  emoji, username, messageID }
});
