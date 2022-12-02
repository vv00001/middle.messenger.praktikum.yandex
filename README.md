### Чатик добрых слов
  https://chipper-buttercream-4d3ca7.netlify.app/

#### Известные проблемы
   1. Так как при получении сообщений в контроллер сообщений не передается ид юзера то выводятся только с ID 120127. Это сразу заложено в код
   2. Иногда при переходе по интерфейсу истории браузера страница не отображается нужно нажать Ф5
   3. Удаление и добавление юзера в чат возможна только по ид получаемому в консоль разработчика на Ф12

#### Активно дорабатывается
1.  Получение и передача ID для контроллера чата
2. Уверенное отображение страницы при переходах по интерфейсу истории браузера
3.  Обновление Аватара на странице изменения аватара сразу после загрузки нового аватара
#### Дорабатывается
  Написание новых компонентов для функции Поиск участника чата, добавление, удаление

#### Особенности регистрации и логина
Так как сообщения чата отображаются только для ID 120127 параметры регистрации записаны в код если поля пустые логина и пароля то будет выполнен код
```bash
if(login=="")
login="qqqqqqqqqqqqqqqqqqq"
if(password=="")
password="dkn30oLKdlk"
```
что позволит воспроизвести весь функционал приложения, при смене пароля с помощью страницы программы можно такой пароль вводить с пустой строкой логина
