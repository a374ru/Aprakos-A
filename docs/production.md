# Размещение проектов на GitHub-Pages

<span style="color: #e34234;">Обработка ошибки 404 для проекта на `Angular CLI`.

При размещении собранного проекта на сервере гитхаб-страницах приложение написаное на `Angular` получает проблему, которая не проявляется на локальном сервере при разработке и не является проюлемой `Angular CLI`. 


Каждый сервер настроен по-своему, и при размещении проекта сделанного в Ангуляр на `GitHub-Pages` требуется настроить режим поведения для вашего проекта в случае возникновения ошибки 404 (Отсутствия страницы, а точнее сказать компонента). 

Ошибку 404 обрабатывает браузер, а не `Angular`-проект. Поэтому нужно прописать в файле ` 404.md ` правило редиректа для случая запроса несуществуещего ` URL ` для сервера `github-pages` ([справка здесь…](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site)). После перенаправления в корень приложения Ангуляра, роутинг  выполнит свою задачу по вашему сценарию.

<span style="color: #2C87BF;">Скрипт для `404.md`
```js
window.location.href="youre adress URL"
```

![img](https://1.bp.blogspot.com/-hOxN5KX2KfY/YPplNP_w6xI/AAAAAAAAGz0/nNxSLwD5lnQhvFnce_DzmIoSRWyY9A3QACLcBGAsYHQ/s800/theend-beats.png)

