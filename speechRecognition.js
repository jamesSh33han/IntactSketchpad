// -- SPEECH RECOGNITION PACKAGE --
// Chrome supports speech recognition with prefixed properties, we define them here
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

// Defining grammar that we want our application to recognize
var fileSpeech = [ 'download', 'delete'];
var grammar = '#JSGF V1.0; grammar fileSpeech; public <fileSpeech> = ' + fileSpeech.join(' | ') + ' ;'

// Creating a new SpeechRecognition object instance using SpeechRecognition() constructor
var recognition = new SpeechRecognition();
// Define variable to hold the new speech grammar list
var speechRecognitionList = new SpeechGrammarList();

// Method that accepts the string we want to add, setting other recognition properties
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

//var diagnostic = document.querySelector('.output');
//var bg = document.querySelector('html');
var imagesrc = document.querySelector("#img-file");

var actionHTML= '';
fileSpeech.forEach(function(v, i, a){
  console.log(v, i);
  actionHTML += '<span style="background-color:' + v + ';"> ' + v + ' </span>';
});

// set recognition service to start when body of webpage is clicked
document.body.onclick = function() {
  recognition.start();
  // display message that console is ready for voice command
  console.log('Ready to receive an action command.');
}

// when a result is successfully recognized recognition.onresult handler fires
// extracts the color that was spoken from the event object and sets background color to that color
recognition.onresult = function(event) {
  // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
  // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
  // It has a getter so it can be accessed like an array
  // The first [0] returns the SpeechRecognitionResult at the last position.
  // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
  // These also have getters so they can be accessed like arrays.
  // The second [0] returns the SpeechRecognitionAlternative at position 0.
  // We then return the transcript property of the SpeechRecognitionAlternative object
  var action = event.results[0][0].transcript;
  diagnostic.textContent = 'Result received: ' + action + '.';
  //bg.style.backgroundColor = action;
  console.log('Confidence: ' + event.results[0][0].confidence);
}

// sets recognition to stop when speech input can no longer be detected
recognition.onspeechend = function() {
  recognition.stop();
}

// display message if recognition was unable to match speech to command
recognition.onnomatch = function(event) {
  diagnostic.textContent = "I didn't recognise that command.";
}

// display message if error occured in recognition
recognition.onerror = function(event) {
  diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
}