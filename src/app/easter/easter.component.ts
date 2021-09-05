import { Component, Injectable, OnInit, Input } from '@angular/core';
import { TimeboxService } from '../timebox.service';


@Component({
  selector: 'app-easter',
  templateUrl: './easter.component.html',
  styleUrls: ['./easter.component.scss']
})
export class EasterComponent implements OnInit {

  @Input() rrrColor?: string;

  systemYear = this.timeBoxService.formatsEaster.momentYear
  easterDates = [{"year":"Год","month":"месяц","day":"день"}];

  // xxx = [1, 2, 3, 4]

  constructor(public timeBoxService: TimeboxService) {

timeBoxService.formatsEaster.year

  }

  /**
   * Собирает массив объектов дат Пасх для парсинга на web-странице.
   */

  listEaster() {

    for (let i in this.timeBoxService.paskhalia) {
      // const element = "" + i +"." + this.timeBoxService.paskhalia[i][0]+"." + this.timeBoxService.paskhalia[i][1];
      let m  = this.timeBoxService.paskhalia[i][0] == 4 ? "апрель":"май"
      this.easterDates.push({"year": i, "month": m, "day": String(this.timeBoxService.paskhalia[i][1])})
      
      
    }
    
  }




  ngOnInit(): void {

    this.listEaster()

  }

}
