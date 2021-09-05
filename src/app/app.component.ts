import { Component, Input, OnInit } from '@angular/core';
import { convertToObject } from 'typescript';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Angular-Áprakos';
  bgcolor = "#e34234";

  ngOnInit() {

    // let cookieYstm = document.cookie.split(',')
    var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)themes\s*\=\s*([^;]*).*$)|^.*$/, "$1");

    if (cookieValue == "black") {
      this.changeBGColor()

    } else {
      document.getElementById('swapColor')!.innerHTML = "тема"
    }


  }




  changeBGColor() {

    let white: string = "#fafafa"
    let black: string = "#251D25"

    if (this.bgcolor == black) {

      this.bgcolor = white
      document.body.style.backgroundColor = this.bgcolor;
      // ;[white, black]=[black, white]
      document.getElementById('swapColor')!.innerHTML = "Д"
      document.cookie = "themes=white"

    } else {

      document.body.style.backgroundColor = black;
      document.getElementById('swapColor')!.innerHTML = "Н"
      document.cookie = "themes=black"

      this.bgcolor = black

    }


  }
}
