import { Component, Input, OnInit } from '@angular/core';
import { TimeboxService } from '../services/timebox.service';

@Component({
  selector: 'app-apr',
  templateUrl: './apr.component.html',
  styleUrls: ['./apr.component.scss']
})
export class AprComponent implements OnInit {

  /**
   * Апракос в формате JSON.
   * Данный json не входит в состав программы и составляется и корретируется в другом месте. Данный JSON файл является оригинальным поддерживаемым документом.
   */
  url = "https://raw.githubusercontent.com/a374ru/aprakos-json/master/aprakos.json"


  /**
   * 
   */
  weekDay: string = " " + this.timeBox.formatsEaster.dayName;

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
  apstl = ""

  /**
   * Евангелие текущего дня.
  */
  evngl = ""

  /**
   * Зачало и Буквица для Апостола. 
   */
  buckvicaApstl = "---"

  /**
   * Зачало и Буквица для Евангелия. 
   */
  buckvicaEvngl = "---"

  /**
   * Номер зачала и стиха текущего Апракоса для Апостола
   */
  zapstl?: string;

  /**
   * Номер зачала и стиха текущего Апракоса для Евангелия. 
   */
  zevngl?: string;

  /**
   * 
   */
  colorRevert?: string; //

  constructor(private timeBox: TimeboxService) {
    console.log(this.weekDay, "=======")
    // console.log(this.aprakos[0].apstl);




  }


  /**
   * Запускает загрузку `json` с другого сервера. 
   * Вызывает функцию `currentZachalo()`.
   */
  ngOnInit(): void {
    // Получение aprakos.json с сервера.
    fetch(this.url).then(one => one.text()).then(two => this.currentZachalo(JSON.parse(two)))
    // TODO: добавть обработчик ошибок для fetch()

  }

  /**
   * Функция вычисляет текущее зачало из файла aprakos.json и выполняет поиск по регулярному выражению номера стиха и первой буквы зачал Апостола и Евангелия для выдеоления киноварью в шаблоне HTML. 
   */
  currentZachalo(json: any) {

    for (const key in json) {
      const curApr = "" + (this.timeBox.formatsEaster.currentWeek) + (this.timeBox.formatsEaster.dayNum)
      if (json[key].aprakos == curApr) {
        this.zapstl = json[key].zapstl
        this.apstl = json[key].apstl;
        this.zevngl = json[key].zevngl
        this.evngl = json[key].evngl;

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
