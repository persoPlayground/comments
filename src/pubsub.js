import PubNub from 'pubnub';
import pubnubConfig from './pubnub.config'



export const MAIN_CHANNEL = 'MAIN_CHANNEL';

export default function PubSub() {
    const pubnubInstance = new PubNub(pubnubConfig);
    pubnubInstance.subscribe({ channels: [MAIN_CHANNEL]});
    this.addListener = listener =>  pubnubInstance.addListener(listener)
    this.publish = message =>  pubnubInstance.publish({
        message: message,
        channel: MAIN_CHANNEL
    });
}