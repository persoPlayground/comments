import React from 'react';
import { useAppContext } from '../hooks'
import { setUserNameAction } from '../state/actions'


const SetUserName = () => {

const { state: {username}, dispatch } = useAppContext();

const handleChange = e => {
    dispatch(setUserNameAction(e.target.value))
}
    return (
        <div>
            <h3>Username</h3>
            <input  onChange={handleChange} value={username} />
        </div>
    );
}

export default SetUserName;