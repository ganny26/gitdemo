
class SpeechModel {

    constructor(_voice, _speed) {
        this._voice = _voice;
        this._speed = _speed;
        this._ingredient = '';
        this._method = '';
        this._volume = '1';
        this._rate = '1';
        this._pitch='1';
        this._uttranceArticle = new SpeechSynthesisUtterance();
    }

    setVoice(voice){
        this._voice = voice;
    }

    getVoice() {
        return this._voice;
    }

    setSpeed(speed){
        this._speed = speed;
    }

    getSpeed() {
        return this._speed;
    }

     setIngredient(_ingredient){
        this._ingredient = _ingredient
    }

     getIngredient(){
        return this._ingredient;
    }

    setMethod(_method){
        this._method = _method;
    }

     getMethod(_method){
        return this._method;
    }

    setUp(){
        this._uttranceArticle.volume = parseFloat(this._volume);
        this._uttranceArticle.rate = parseFloat(this._rate);
        this._uttranceArticle.pitch = parseFloat(this._pitch);
        this._uttranceArticle.voice = this._voice
    }

    speakIng(){
        this.setUp();
        this._uttranceArticle.text = this._ingredient;
        this._uttranceArticle.onend = function (e) {
            console.log('Finished in ' + e.elapsedTime + ' seconds.');
            speechSynthesis.cancel();
        };
        speechSynthesis.speak(this._uttranceArticle);
    }

    speakMethod(){
        this.setUp();
        this._uttranceArticle.text = this._method;
        this._uttranceArticle.onend = function (e) {
            console.log('Finished in ' + e.elapsedTime + ' seconds.');
            speechSynthesis.cancel();
        };
        speechSynthesis.speak(this._uttranceArticle);
    }
}

export default SpeechModel;
// const speechModel = new SpeechModel;
// window.speechModel = speechModel;
