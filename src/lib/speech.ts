export const playAudio = (text: string, lang: 'en' | 'zh') => {
  if (!('speechSynthesis' in window)) {
    console.warn('Text-to-speech not supported.');
    return;
  }
  
  const utterance = new SpeechSynthesisUtterance(text);
  
  // zh-CN for Chinese, en-US for English
  utterance.lang = lang === 'zh' ? 'zh-CN' : 'en-US';
  utterance.rate = 0.9; // slightly slower for learning
  
  // Try to find a good voice if possible
  const voices = window.speechSynthesis.getVoices();
  const voice = voices.find(v => v.lang.includes(utterance.lang));
  if (voice) {
    utterance.voice = voice;
  }

  window.speechSynthesis.cancel(); // Stop any currently playing audio
  window.speechSynthesis.speak(utterance);
};
