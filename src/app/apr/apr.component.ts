import { Component, Input, OnInit } from '@angular/core';
import { TimeboxService } from '../services/timebox.service';
import { aprakos } from 'src/app/apr/aprakos';

@Component({
  selector: 'app-apr',
  templateUrl: './apr.component.html',
  styleUrls: ['./apr.component.scss']
})
export class AprComponent implements OnInit {

// Получение зачал
  aprakos = aprakos
  apstl = ""
  evngl = ""

  buckvicaApstl = "???"
  buckvicaEvngl = "???"
  colorRevert?: string;
  zapstl?: string;
  zevngl?: string;

  // for (const i of  array) {

  // }

  constructor(private timeBox: TimeboxService) {

    // console.log(this.aprakos[0].apstl);




  }

  ngOnInit(): void {

   

    this.currentZachalo()

  }

/**
 * Функция вычисляет текущее зачало, выполняет поиск номера стихов и первой буквы зачала для выдеоления. 
 */
currentZachalo(){
  
  for (const key in aprakos) {
  const curApr = "" + (this.timeBox.formatsEaster.currentWeek) + ( this.timeBox.formatsEaster.dayNum)
  if ( aprakos[key].aprakos == curApr) {
    this.zapstl = aprakos[key].zapstl
    this.apstl = aprakos[key].apstl;
    this.zevngl = aprakos[key].zevngl
    this.evngl = aprakos[key].evngl;

  // Регулярное выражение для поиска нумерации стихов и БУКВИЦЫ
   let regx = /\(За\?\s\S*\)\s(\S|Ё|)?#?:?\$?/

   let rng = aprakos[key].apstl.match(regx)
   this.apstl = aprakos[key].apstl.slice(rng![0].length)
   this.buckvicaApstl = rng![0]

   let rng2 = aprakos[key].evngl.match(regx)
   this.evngl = aprakos[key].evngl.slice(rng2![0].length)
   this.buckvicaEvngl = rng2![0]

  //  console.log(rng![0], "====", curApr, this.timeBox.formatsEaster.currentWeek);
    
  }
}


  



}





}
