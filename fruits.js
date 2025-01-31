

function getMousePosition(canvas , event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    console.log("Coordinate x: " + x,
        "Coordinate y: " + y);
}

let canvasElem = document.getElementById("mangom");

canvasElem.addEventListener("mousedown", function (e) {
    getMousePosition(canvasElem, e);
}); 

function getMousePosition(canvas , event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    console.log("Coordinate x: " + x,
        "Coordinate y: " + y);
}

let canvasElem2 = document.getElementById("watermelonf");

canvasElem2.addEventListener("mousedown", function (e) {
    getMousePosition(canvasElem2, e);
}); 

function getMousePosition(canvas , event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    console.log("Coordinate x: " + x,
        "Coordinate y: " + y);
}

let canvasElem3 = document.getElementById("bananam");

canvasElem3.addEventListener("mousedown", function (e) {
    getMousePosition(canvasElem3, e);
}); 

function getMousePosition(canvas , event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    console.log("Coordinate x: " + x,
        "Coordinate y: " + y);
}

let canvasElem4 = document.getElementById("applem");

canvasElem4.addEventListener("mousedown", function (e) {
    getMousePosition(canvasElem4, e);
}); 

function getMousePosition(canvas , event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    console.log("Coordinate x: " + x,
        "Coordinate y: " + y);
}
let canvasElem5 = document.getElementById("guavam");

canvasElem5.addEventListener("mousedown", function (e) {
    getMousePosition(canvasElem5, e);
}); 

function getMousePosition(canvas , event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    console.log("Coordinate x: " + x,
        "Coordinate y: " + y);
}

let canvasElem6 = document.getElementById("bomb");

canvasElem4.addEventListener("mousedown", function (e) {
    getMousePosition(canvasElem6, e);
}); 

const guava = document.getElementById('guavam');
const mango = document.getElementById('mangom');
const watermelon = document.getElementById('watermelonf');
const apple = document.getElementById('applem');
const banana = document.getElementById('bananam');
const bomb = document.getElementById('bomb');
const resultDisplay = document.getElementById('score');

let counter = 0;

function updateCounter(value) {
  counter += value;
  resultDisplay.textContent =  counter;


  if (counter<0) {
    return gameover()
}

}

function gameover(){
    resultDisplay.textcontent = "game over";
}

guava.addEventListener('click', function() {
  updateCounter(3);
});

mango.addEventListener('click', function() {
    updateCounter(1);
  });

  watermelon.addEventListener('click', function() {
    updateCounter(1);
  });

  apple.addEventListener('click', function() {
    updateCounter(1);
  });

  banana.addEventListener('click', function() {
    updateCounter(2);
  });

bomb.addEventListener('click', function() {
  updateCounter(-5);
});

function digitalClock() {
  const clockElement = document.getElementById('clock');

  function updateClock() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      const timeString = `${hours}:${minutes}:${seconds}`;
      clockElement.textContent = timeString;
  }

  setInterval(updateClock, 1000); // Update clock every second

  // Timer for 1 minute
  let timerSeconds = 60;
  function updateTimer() {
      const minutes = String(Math.floor(timerSeconds / 60)).padStart(2, '0');
      const seconds = String(timerSeconds % 60).padStart(2, '0');
      const timerString = `${minutes}:${seconds}`;
      clockElement.textContent = timerString;
      if (timerSeconds === 0) {
          clearInterval(timerInterval);
          showAlert('Are you sure you want to proceed?', function(result) {
            if (result) {
              console.log('User clicked OK');
            } else {
              console.log('User clicked Cancel');
            }
          });
        
      }
      timerSeconds--;
  }
  const timerInterval = setInterval(updateTimer, 1000); // Update timer every second
}

// Start the digital clock with timer
digitalClock();

function showAlert(message, callback) {
    var customAlert = document.getElementById('custom-alert');
    var messageDiv = document.getElementById('custom-alert-message');
    var okButton = document.getElementById('custom-alert-ok');
    var cancelButton = document.getElementById('custom-alert-cancel');
                                                            
    // Set the message
    messageDiv.innerText = "game over! want to play again?";
  
    // Show the custom alert
    customAlert.style.display = 'block';
  
    // OK button click event
    okButton.onclick = function() {
        window.location.href = 'fruits.html';
      callback(true);
    };
 
    // Cancel button click event
    cancelButton.onclick = function() {
        window.location.href = 'startpage.html' ;
      callback(false);
    };
  } 



