import React from 'react';
import { REACTION_OBJECTS } from '../state/constants';
import { useAppContext } from '../hooks'
import { createReactionAction } from '../state/actions'

export default ({messageID}) => {

    const { state:{username}, pubSub: {publish} } = useAppContext();
    const publishReactionToPub = ({ type, emoji }) => () =>{
        publish(createReactionAction({ type, emoji, messageID, username}))
    }

    return(
    <div className="CreateReaction">
{
    REACTION_OBJECTS.map(reaction => {
        const { type, emoji} = reaction;
        return (
            <span key={type} onClick={publishReactionToPub({ type, emoji })}>{emoji}</span>
        )
    })
}
    </div>
    );
}