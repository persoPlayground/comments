import React, { useReducer, useEffect } from 'react';

import Pubsub from './pubsub';
import Context from './context';
import reducer, { initialState } from './state/reducer';
import PublishMessage from './components/PublishMessage';
import MessageBoard from './components/MessageBoard'
import SetUserName from './components/SetUserName'

const pubSub = new Pubsub();

function App() {
  const [state , dispatch] = useReducer(reducer, initialState);
console.log(state)
  useEffect(() => {
    pubSub.addListener({
      message: messageObj => {
        const { channel, message } = messageObj;
        dispatch(message);
      }
    })
  }, []);
  return (
    <Context.Provider value={{ state, dispatch, pubSub }}>
    <div className="App">
     <h2>App</h2>
     <SetUserName />
     <hr />
    <PublishMessage />
    <hr />
    <MessageBoard />
    </div>
    </Context.Provider>
  );
}

export default App;
