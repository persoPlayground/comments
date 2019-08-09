import React from 'react'

export default ({reactions}) => {
    if(!reactions) return null;

   return reactions.map(({ id, emoji, username}) => {
        return (<span key={id}>
<em>{username}</em>
{emoji}
        </span>)
    })

}