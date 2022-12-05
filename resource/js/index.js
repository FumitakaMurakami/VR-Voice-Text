console.log("js init");

const speech = new webkitSpeechRecognition();
speech.lang = 'ja-JP';

// 
AFRAME.registerComponent('speech-start', {       
  init: function () {  
    console.log("speech start");     

    this.el.addEventListener('click', function () {            
      speech.start();
    });        
  }
});

// DOMが読み込まれてから結果表示イベント登録
window.addEventListener('load', (event) => {
  const resultText = document.getElementById('result-text');
  console.log(resultText);
  
  speech.addEventListener('result' , function(e) {
    // 音声認識で取得した情報を、コンソール画面に表示
    console.log(e);
    // 音声認識で取得した情報を、a-textに表示
      const text = e.results[0][0].transcript;
      resultText.setAttribute('value', e.results[0][0].transcript);
  
  });
});

