import { Component, OnInit } from '@angular/core';
import { TimeboxService } from '../services/timebox.service';

@Component({
  selector: 'app-apr',
  templateUrl: './apr.component.html',
  styleUrls: ['./apr.component.scss']
})


export class AprComponent implements OnInit {

  /**
   * Апракос в формате JSON.
   * Данный json не входит в состав программы, составляется и корретируется в другом проекте. Данный JSON файл является оригинальным поддерживаемым документом.
   */
  url = "https://cdn.jsdelivr.net/gh/a374ru/aprakos-json@master/aprakos.json"

  /**
   * Название текущего дня
   */
  weekDay: string = this.timeBox.formatsEaster.dayName as string;

  /**
   * Седмица по Пасхе
   */
  weekFromEaster = this.timeBox.formatsEaster.currentWeek as number

  /**
   * Текущая седмица по Уставу. 
   * Может быть седмицей от Пасхи до Пятидесятницы.
   * Может быть седмицей от Пятидесятницы до Пасхи.
   * Корректировка номера текущей седмицы. Зависит от части года (По Пасхе или по Пятьдесятнице)
   */
  currentWeek = this.weekFromEaster < 8 ? ` по Пасхе ${this.weekFromEaster}` : ` по Пятьдесятнице: ${this.weekFromEaster - 7}`;

  /**
   * Апостолтекущего дня.
  */
  apstl?: string

  /**
   * Евангелие текущего дня.
  */
  evngl?: string

  /**
   * Зачало и Буквица для Апостола. 
   */
  buckvicaApstl?: string

  /**
   * Зачало и Буквица для Евангелия. 
   */
  buckvicaEvngl?: string

  /**
   * Номер зачала и стиха текущего Апракоса для Апостола
   */
  zapstl?: string;
  stupka?: number;
  /**
   * Номер зачала и стиха текущего Апракоса для Евангелия. 
   */
  zevngl?: string;

  yearEaster: string;
  date: string;

  constructor(private timeBox: TimeboxService) {
  try {
      
    this.date = this.timeBox.theMoment.getUTCDate() + " " + this.timeBox.formatsEaster.currentMonth
    this.yearEaster = this.timeBox.theMoment.getFullYear() + "" 
      // Получение aprakos.json с сервера.
      fetch(this.url).then(loadedJson => loadedJson.text()).then(loadedJsonText => this.currentZachalo(JSON.parse(loadedJsonText))).catch(() =>
        alert("Неудачная загрузка. Обновите страницу…")
      )

    } finally {
      // this.apstl = "Загрузка..."
      this.evngl = "Загрузка..."
    }

  }


  /**
   * Запускает загрузку `json` с другого сервера. 
   * Вызывает функцию `currentZachalo()`.
   */
  ngOnInit(): void { }

  /**
   * Функция вычисляет текущее зачало из файла aprakos.json и выполняет поиск по регулярному выражению номера стиха и первой буквы зачал Апостола и Евангелия для выделения киноварью в шаблоне HTML. 
   */
  currentZachalo(json: any) {

    this.stupka = this.timeBox.formatsEaster.vozStupka as number
    console.log(this.stupka)
    

    for (const key in json) {
      const curApr = "" + (this.timeBox.formatsEaster.currentWeek as number - this.stupka) + (this.timeBox.formatsEaster.dayNum)
      if (json[key].aprakos == curApr) {
        this.zapstl = json[key].zapstl
        this.apstl = json[key].apstl
        this.zevngl = json[key].zevngl
        this.evngl = json[key].evngl

        // Регулярное выражение для поиска нумерации стихов и БУКВИЦЫ
        let regx = /\(За\?\s\S*\)\s(\S|Ё|)?#?:?\$?/

        let rng = json[key].apstl.match(regx)
        this.apstl = json[key].apstl.slice(rng![0].length)
        this.buckvicaApstl = rng![0]

        let rng2 = json[key].evngl.match(regx)
        this.evngl = json[key].evngl.slice(rng2![0].length)
        this.buckvicaEvngl = rng2![0]


      }
    }

  }





}

