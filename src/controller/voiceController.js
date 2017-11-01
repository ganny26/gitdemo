import Helper from '../utils/helper';
let VoiceController = {
    getIngredients: function () {
        //     let tags = ['a','p','h1','h2','h3','h4','h5','h6','i','b','u','span','strong','td','li','center'];
        //     let ingredientkeywords = ['ingredients used','ingredients for','ingredients in','ingredients of','ingredients to','ingredients']; 
        // console.log("getting ingredinets");
        // Helper.getElementByXpath(tags,ingredientkeywords);
        var ingdata = localStorage.getItem('ingredients');
        window.alert(ingdata);
        this.speak(ingdata);
    },
    setLanguage: function (ev) {
        console.log("Setting Language", ev);
    },
    setSpeed: function () {
        console.log("Setting speed");
    },
    speak: function (text) {
        console.log("Speaking");
        var uttranceArticle = new SpeechSynthesisUtterance();
        uttranceArticle.volume = parseFloat(1);
        uttranceArticle.rate = parseFloat(3);
        uttranceArticle.pitch = parseFloat(1);
        uttranceArticle.voice = speechSynthesis.getVoices()[4];
        uttranceArticle.text = text;
        uttranceArticle.onend = function (e) {
            console.log('Finished in ' + e.elapsedTime + ' seconds.');
            speechSynthesis.cancel();
        };
        speechSynthesis.speak(uttranceArticle);
    }
}

export default VoiceController;