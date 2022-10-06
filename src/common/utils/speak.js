
function speak(sentence) {
  var synth = window.speechSynthesis;
  var voices = synth.getVoices();
  const utterance = new SpeechSynthesisUtterance();
  utterance.text = sentence;
  utterance.voice = voices['116'];
  window.speechSynthesis.speak(utterance);
}

export default speak;
