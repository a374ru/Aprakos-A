# Перед первым  своим компонентом

Установка инструментов разработки в день 175, года 2021.

Создание проекта ангуляр:

```sh
ng new nameProject
```

Добавляем молитву и образ Креста Господня. 

Добавляем папку `docs` в корень проекта.

Устанавливаем соглашение префикса проекта – `ystm`.

Генерируем модуль первый `ystm-entrace` так: 

```sh
ng g c ystm-entrance
```

 с параметрами `scss` и роутином, будут предложены к выбору во процессе установки.

Добавляем компонент наш в `router` модуль и прописываем маршруты для корня проекта и для нашего модуля.

```ts
const routes: Routes = [
  { path: 'ystm', component: YstmEntranceComponent },
  { path: '', redirectTo: 'ystm', pathMatch: 'full' },
]
```

## Шаблон HTML

Для шаблона выбираем `Bootstrap` подключаемый через модуль `NPM`.
Модуль `ng-bootstrap` подгружается командой:

```sh
ng add @ng-bootstrap/ng-bootstrap
```

Остальные подробности `ng-bootstrap` [здесь…](https://github.com/ng-bootstrap/ng-bootstrap)

Сам фреймворк `Bootstrap` [здесь…](https://getbootstrap.com/)


