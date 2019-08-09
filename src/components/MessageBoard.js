import React from 'react';
import { useAppContext } from '../hooks'
import CreateReaction from './CreateReaction';
import MessageReactions from './MessageReaction'

export default () => {
    const {state:{messages, reactionMap}} = useAppContext()

    return (
        <div>
          {
              messages.map(({id:key, text, username,  timestamp}) => (
                <div key={key}>
                <h4>{new Date(timestamp).toLocaleString()}</h4>
                <p>{text}</p>
                <h4>- {username}</h4>
                <CreateReaction messageID={key}  />
                <MessageReactions reactions={reactionMap[key]}/>
                <hr/>
                </div>
))
          }
        </div>
    )
}


