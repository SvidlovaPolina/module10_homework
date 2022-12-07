const wsUri = "wss://echo-ws-service.herokuapp.com";

// const resultNode = document.querySelector('.j-result');
const output = document.getElementById("output");
const btnSend = document.querySelector('.j-btn-send');

let websocket;

function writeToScreen1(message) {
  let pre1 = document.createElement("p");
  pre1.style.wordWrap = "break-word";
  pre1.className = 'paragraph1';
  pre1.innerHTML = message;
  output.appendChild(pre1);
}

function writeToScreen2(message) {
  let pre2 = document.createElement("p");
  pre2.style.wordWrap = "break-word";
  pre2.className = 'paragraph2';
  pre2.innerHTML = message;
  output.appendChild(pre2);
}

  websocket = new WebSocket(wsUri);
  websocket.onopen = function(evt) {
    console.log("CONNECTED");
  };
  websocket.onclose = function(evt) {
    console.log("DISCONNECTED");
  };
  websocket.onmessage = function(evt) {
    writeToScreen2(
      '<span class="server">Сервер: ' + evt.data+'</span>'
    );
  };
  websocket.onerror = function(evt) {
    writeToScreen2(
      '<span style="color: red;">ERROR:</span> ' + evt.data
    );
  };
  
btnSend.addEventListener('click', () => {
    const value = document.getElementById('input').value;
    const message = input.value;
    writeToScreen1('<span class="user">Я: ' + message + '</span>');
    websocket.send(message);
                         
    input.value = '';
                         
});

const status = document.querySelector('#status');
const mapLink = document.querySelector('#map-link');
const btnGeo = document.querySelector('.j-btn-geolocation');

// Функция, выводящая текст об ошибке
const error = () => {
  status.textContent = 'Невозможно получить ваше местоположение';
}

// Функция, срабатывающая при успешном получении геолокации
const success = (position) => {
  console.log('position', position);
  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;
  console.log(`Широта: ${latitude} °, Долгота: ${longitude} °`);
  
  mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
  mapLink.textContent = 'Гео-локация';
}

btnGeo.addEventListener('click', () => {
  
  mapLink.href = '';
  mapLink.textContent = '';
  
  if (!navigator.geolocation) {
    status.textContent = 'Geolocation не поддерживается вашим браузером';
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
});