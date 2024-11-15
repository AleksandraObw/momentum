# momentum clone

Test task for internship application. HTML/CSS/JS

See full text of specification under the cut

<details>
	<summary><h2> Specification</h2></summary>

<h2>Тестовое задание для стажировки</h2>

Необходимо реализовать веб-приложение `momentum`, аналог [расширения](https://chromewebstore.google.com/detail/momentum/laookkfknpbbblfpciffpaejjkokdgca?hl=ru&pli=1).
В приложении есть часы, дата, слайдер изображений, виджеты погоды, список задач.

<h2>Блок погоды</h2>
- Состоит из города (текстовое поле)
- Отображения температуры
- Отображения текущей погоды (дождь/солнечная/снег/пасмурно)

<h3>Функционал:</h3>
- Для определения текущего города использовать geolocation api, город по умолчанию — Краснодар
- Для хранения населённого пункта используется локальное хранилище — local storage.
- Для получения прогноза погоды использовать [список api](https://github.com/public-api-lists/public-api-lists?tab=readme-ov-file#weather) (любой из списка можно использовать)
  
<h2>Блок слайдер изображений на фоне</h2>
- Динамическая смена обоев в зависимости от текущего времени
  
<h3>Функционал:</h3>
- Для динамической смены обоев дано 4 картинки, и каждая картинка соответствует определенному промежутку времени, например, если сейчас 15:00, то показываем картинку из промежутка 12:00 - 18:00
- Каждому промежутку соответствует свое изображение:<br />
`00:00 - 06:00` - `https://github.com/digitalSector47/traineeship-test-task/images/01.jpg`
`06:00 - 12:00` - `https://github.com/digitalSector47/traineeship-test-task/images/02.jpg`
`12:00 - 18:00` - `https://github.com/digitalSector47/traineeship-test-task/images/03.jpg`
`18:00 - 00:00` - `https://github.com/digitalSector47/traineeship-test-task/images/04.jpg`

<h2>Блок времени и даты</h2>
- Отображение времени в формате `hh:mm:ss`
- Отображение даты в формате текущий день и текущий день недели, пример: `09 сентября, понедельник`
  
<h3>Функционал:</h3>
- Время изменяется каждую секунду
- Для работы приложения используем текущий часовой пояс

<h2>Блок задач</h2>
- Поле для ввода новой задачи
- Список всех задач (состоит из чекбокса, названия задачи и кнопки удалить задачу)
- Кнопка удалить выполненные задачи

<h3>Функционал:</h3>
- Добавление новых задач осуществляется при нажатии на «Enter»
- Если поле для ввода новой задачи пустое — появляется ошибка
- Функционал удаления задачи из списка, у каждой задачи должа быть кнопка удалить
- Функционал перевода задачи в статус выполнено осуществляется при нажатии на чекбокс в списке задач
- Функционал удаления выполненных задач

<h2> Технические требования</h2>
- Приложение проверяется в браузере Google Chrome последней версии
- Можно использовать Bootstrap, Material Design, Css-фреймворки, Html и Css препроцессоры
- Не разрешается использовать jQuery, другие js-библиотеки и фреймворки
- js-код приложения должен быть читаемым, без минимизации или обфускации

</details> 


+ *[View it in action on vercel.com](https://momentum-two-puce.vercel.app/)*
+ *[View code](https://github.com/AleksandraObw/momentum)*

![Screenshot](https://github.com/AleksandraObw/momentum/blob/main/assets/screenshot1.jpg)
![Screenshot](https://github.com/AleksandraObw/momentum/blob/main/assets/screenshot2.jpg)
