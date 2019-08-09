import React, { useState } from 'react';
import { useAppContext } from '../hooks'

import { newMessage } from '../state/actions'

const PublishMessage = () => {
    const [message, setMessage] = useState('');
    const { state: {username}, pubSub: {publish} } = useAppContext()
    const handleChange = ({target}) => setMessage(target.value);
    const handleOnKeyPress = ({charCode}) => charCode === 13 ? handlePublish() : null;
    const handlePublish = () => publish(newMessage({text:message, username}))
   // console.log(message)
return (<div>
    <h3>Message</h3>
    <input value={message} onChange={handleChange} onKeyPress={handleOnKeyPress} />
    {' '}
    <button onClick={handlePublish}>Publish</button>
</div>)
}

export default PublishMessage;