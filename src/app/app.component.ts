import { Component, Input, OnInit, Output } from '@angular/core';
import { convertToObject } from 'typescript';
import { DateYearService } from './services/date-year.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: '<app-apr [revertColorText]="revertColor"></app-apr> ',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {



  constructor(public dateyearService: DateYearService) {

    localStorage.setItem('ystm', 'Yabo-system © Third Millennium')


  }

  title = 'Angular-Áprakos';
  bgcolor = "#FFF5EE"; // seashell
  currentYearCSL = "Not YearCSL";

  ngOnInit() {
    this.currentYearCSL = this.dateyearService.currentYearCSl()

    // let cookieYstm = document.cookie.split(',')
    var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)themes\s*\=\s*([^;]*).*$)|^.*$/, "$1");

    if (cookieValue == "black") {
      this.changeBGColor()

    } else {
      document.getElementById('swapColor')!.innerHTML = this.currentYearCSL
    }

  }

  changeBGColor() {

    let white: string = "seashell"
    let black: string = "#251D25"

    if (this.bgcolor == black) {
      this.bgcolor = white
      document.body.style.backgroundColor = this.bgcolor;
      document.getElementById('swapColor')!.innerHTML = "де1нь"
      document.cookie = "themes=white"

    } else {
      
      document.body.style.backgroundColor = black;
      document.getElementById('swapColor')!.innerHTML = "но1чь"
      document.cookie = "themes=black"
      this.bgcolor = black
    }


  }
}
