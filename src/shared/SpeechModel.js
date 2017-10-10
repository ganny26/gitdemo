import {EventEmitter} from 'events';
export default class SpeechModel extends EventEmitter {
    constructor(_voice, _speed) {
        this._voice = _voice;
        this._speed = _speed;
    }

    getVoice() {
        return this._voice;
    }

    getSpeed() {
        return this._speed;
    }
}

const speechModel = new SpeechModel;
window.speechModel = speechModel;
