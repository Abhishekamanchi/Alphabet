var voiceList = document.getElementById('voiceList');
var tts = window.speechSynthesis;
var voices = [];
var txt;

getVoices();
if(speechSynthesis !== undefined){
    speechSynthesis.onvoiceschanged = getVoices;
}

function play(id){
    switch (id) {
        case "a":
          txt = "a for apple";
          break;
        case "b":
            txt = "b for ball";
          break;
        case "c":
            txt = "c for cat";
          break;
        case 'd':
            txt = "d for dog";
          break;
        case "e":
            txt = "e for elephant";
          break;
        case "f":
            txt = "f for fish";
          break;
        case "g":
            txt = "g for giraffe";
          break;
        case "h":
            txt = "h for hen";
          break;
        case "i":
            txt = "i for ice cream";
          break;
        case "j":
            txt = "j for joker";
          break;
        case "k":
            txt = "k for king";
          break;
        case "l":
            txt = "l for lion";
          break;
        case "m":
            txt = "m for monkey";
          break;
        case "n":
            txt = "n for nest";
          break;
        case "o":
            txt = "o for orange";
          break;
        case "p":
            txt = "p for pen";
          break;
        case "q":
            txt = "q for queen";
          break;
        case "r":
            txt = "r for rabbit";
          break;
        case "s":
            txt = "s for sun";
          break;
        case "t":
            txt = "t for tree";
          break;
        case "u":
            txt = "u for umbrella";
          break;
        case "v":
            txt = "v for van";
          break;
        case "w":
            txt = "w for watch";
          break;
        case "x":
            txt = "x for x ray";
          break;
        case "y":
            txt = "y for yak";
          break;
        case "z":
            txt = "z for zebra";
          break;
        case "kid":
            txt = "keep learning";
          break;
      }
    var toSpeak = new SpeechSynthesisUtterance(txt);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    tts.speak(toSpeak);
}

function getVoices(){
    voices = tts.getVoices();
    var selectedIndex = voiceList.selectedIndex < 0 ? 0 : voiceList.selectedIndex;
    voiceList.innerHTML = '';
    voices.forEach((voice)=>{
        var listItem = document.createElement('option');
        listItem.textContent = voice.name;
        listItem.setAttribute('data-lang', voice.lang);
        listItem.setAttribute('data-name', voice.name);
        voiceList.appendChild(listItem);
    });

    voiceList.selectedIndex = selectedIndex;
}
