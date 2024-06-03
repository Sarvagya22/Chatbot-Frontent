// const micContainer = document.getElementById('mic-btn');
// const questionInput = document.getElementById('question-input');
// const sendBtn = document.getElementById('send-btn');

// micContainer.addEventListener('click', () => {

//   const recognition = new webkitSpeechRecognition();
//   recognition.lang = 'en-US';
//   recognition.maxResults = 10;

//   recognition.onresult = event => {
//     const transcript = event.results[0][0].transcript;
//     questionInput.value = transcript;
//   };

//   recognition.start();
// });

// micContainer = document.getElementsByClassName('mic-container')[0];

// micContainer.addEventListener('click', (e)=> {
//   let elem = e.target;
  
//   elem.classList.toggle('active');
// });

const micButton = document.getElementById('mic-btn');

micButton.addEventListener('click', () => {
  micButton.classList.toggle('active');
});