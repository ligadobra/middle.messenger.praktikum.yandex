Project-Url: https://celadon-sfogliatella-b8b025.netlify.app/
Chat-Design: https://www.figma.com/file/VEiHMZNKrOcmhe1ECR9VHW/%D0%94%D0%BE%D0%B1%D1%80%D0%BE%D0%A7%D0%B0%D1%82?node-id=2%3A422

"build": "parcel build ./src/index.html"
"start": "npm run build && node index.js"
"test": "mocha"

Проект декомпозирован на компоненты. Реализована глобальная валидация всех форм.
Добавлен ESLint и Stylelint.

Добавлен Роутинг в проект.
Написаны Handlebars helpers.
Выполнен рефактор приложения.
Реализован HOC.
Реализован хук и класс Websockets.
Реализована авторизация и работа с другими HTTP запросами.
Реализовано тестирование Router, Component, Fetch, Handlebars.
Реализована защита от DOS и XSS посредством внедрения rate limit, написания Content-Security-Policy и указания заголовков X-XSS-Protection.

Запустить тесты можно следующей командой: npm test

Ссылка на pull request: https://github.com/ligadobra/middle.messenger.praktikum.yandex/pull/3
