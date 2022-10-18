import checkMobileDevice from './checkDevice';

function speak(sentence) {
  var synth = window.speechSynthesis;
  var voices = synth.getVoices();
  setTimeout(() => {
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = sentence;
    utterance.lang = 'en-US';
    if (checkMobileDevice()) {
      console.log('11111111111');
      utterance.voice = voices['51'];
    } else {
      utterance.voice = voices['116'];
    }

    window.speechSynthesis.speak(utterance);
  });
}

export default speak;
