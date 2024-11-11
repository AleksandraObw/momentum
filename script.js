const bodybg = document.getElementById('body')
const weatherCity = document.getElementById('weather-city')
const weatherTemp = document.getElementById('weather-temp')
const weatherConditions = document.getElementById('weather-conditions')
const dateTime = document.getElementById('date-time')
const dateWeek = document.getElementById('date-week')
const buttonAdd = document.getElementById('add')

const date = new Date()
const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

let cityCurrent = weatherCity.innerHTML
let latitude = 45.040280
let longitude = 38.975115

// Background block

let hour = date.getHours()
if (hour<=6) {
    bodybg.style.backgroundImage = "url('/assets/01.jpg')"
} else
if (hour<=12) {
    bodybg.style.backgroundImage = "url('/assets/02.jpg')"
} else
if (hour<=18) {
    bodybg.style.backgroundImage = "url('/assets/03.jpg')";
} else 
 {
    bodybg.style.backgroundImage = "url('/assets/04.jpg')";
 }


// Date and time block

function updateTime() {
    dateTime.innerHTML = new Date().toLocaleString('ru', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

setInterval(updateTime, 1000)
dateWeek.innerHTML = `${date.getDate()} ${months[date.getMonth()]}, ${date.toLocaleString('ru', { weekday: 'long' })}`


// Weather block

function getLocation() {
    window.onload = navigator.geolocation.getCurrentPosition(function(position) {
        latitude = position.coords.latitude
        longitude = position.coords.longitude
    })
}

function setWeather() {
    let jsonWeather = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&timezone=Europe%2FMoscow&forecast_days=1`
    fetch(jsonWeather)
            .then((response) => response.json())
            .then((data) => {
               weatherTemp.innerHTML = `${data.current.temperature_2m} °C`  
               if (data.current.weather_code == 0) {
                weatherConditions.innerHTML = 'Ясно ☀️'
               } else if (data.current.weather_code < 4) {
                weatherConditions.innerHTML = 'Облачно ⛅'
               } else if (data.current.weather_code < 49) {
                weatherConditions.innerHTML = 'Туман ☁️'
               } else if (data.current.weather_code < 56) {
                weatherConditions.innerHTML = 'Морось 🌧️'
               } else if (data.current.weather_code < 58) {
                weatherConditions.innerHTML = 'Ледяной дождь 🌧️'
               } else if (data.current.weather_code < 66) {
                weatherConditions.innerHTML = 'Дождь 🌧️'
               } else if (data.current.weather_code < 68) {
                weatherConditions.innerHTML = 'Ледяной дождь 🌧️'
               } else if (data.current.weather_code < 78) {
                weatherConditions.innerHTML = 'Снег ❄️'
               } else if (data.current.weather_code < 83) {
                weatherConditions.innerHTML = 'Ливень 🌧️'
               } else if (data.current.weather_code < 87) {
                weatherConditions.innerHTML = 'Снегопад ❄️'
               } else {
                weatherConditions.innerHTML = 'Гроза 🌩️'
               }              
            }) 
}

window.addEventListener('DOMContentLoaded',()=>{
    getLocation()
    if ((localStorage.getItem('city') !== null)&&(localStorage.getItem('lat') !== null)&&(localStorage.getItem('long') !== null)) {
        cityCurrent = window.localStorage.getItem('city')
        latitude = window.localStorage.getItem('lat')
        longitude = window.localStorage.getItem('long')
        weatherCity.innerHTML = cityCurrent
        setWeather()
    } else
      {
        window.onload = navigator.geolocation.getCurrentPosition(function(position) {
            latitude = position.coords.latitude
            longitude = position.coords.longitude
            let jsonFile = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`
            fetch(jsonFile)
            .then((response) => response.json())
            .then((data) => {
               cityCurrent = data.address.city
               localStorage.setItem('city', cityCurrent)
               localStorage.setItem('lat', latitude)
               localStorage.setItem('long', longitude)
               weatherCity.innerHTML = cityCurrent
               setWeather()
            }) 
        })
        } 
    })


// To-do block

const input = document.querySelector('#input')
const taskList = document.querySelector('#task-list')
const errorMsg = document.querySelector('#error-msg')

let ulOfTasks = document.createElement('ul');
let buttonDeleteAll = document.createElement('button')
    buttonDeleteAll.innerHTML += `<i class="fas fa-eraser">Удалить выполненные</i>`
    buttonDeleteAll.classList.add('delete-all')
    buttonDeleteAll.classList.add('hidden')

taskList.appendChild(ulOfTasks);
taskList.appendChild(buttonDeleteAll);

function removeErrors() {
    input.classList.remove('error')
    errorMsg.classList.add('hidden')
}

function addErrors() {
    input.classList.add('error')
    errorMsg.classList.remove('hidden')
}

input.addEventListener('keypress', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        buttonAdd.click();
    }
});

buttonAdd.addEventListener('click', event => {
        event.preventDefault();
        removeErrors();
        if (!input.value) {
            addErrors();
        } 
        else {
            let li = document.createElement('li');
                li.classList.add('item')

            let checkBox = document.createElement('input');
                checkBox.type = 'checkbox';
                checkBox.checked = false;
                checkBox.classList.add('task-checkbox');

            let taskText = document.createElement('span')
                taskText.textContent = input.value;

            let deleteButton = document.createElement('button');
                deleteButton.classList.add('delete-button')
                deleteButton.innerHTML += `<i class="fa fa-trash" aria-hidden="true"></i>`

            li.appendChild(checkBox);
            li.appendChild(taskText);
            li.appendChild(deleteButton);
            ulOfTasks.appendChild(li);
            buttonDeleteAll.classList.remove('hidden')
            input.value = "";
}
})

function checkDeleteAllButton() {
    if ((!ulOfTasks.childNodes.length)) {
        buttonDeleteAll.classList.add('hidden')
    }
}

taskList.addEventListener('click', event => {
    if (event.target.classList.contains('fa-trash')) {
        event.target.parentNode.parentNode.remove()
        checkDeleteAllButton()
    }
})

taskList.addEventListener('click', event => {
    if (event.target.classList.contains('delete-button')) {
        event.target.parentNode.remove()
        checkDeleteAllButton()
    }
})

buttonDeleteAll.addEventListener('click', event => {
    event.preventDefault();
    document.querySelectorAll('.task-checkbox').forEach(element => {
        if (element.checked) {
            element.parentNode.remove()
        }
        })
    checkDeleteAllButton()
})
