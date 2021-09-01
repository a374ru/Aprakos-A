import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { TimeboxService } from '../timebox.service';



@Component({
  selector: 'app-ystm-entrance',
  templateUrl: './ystm-entrance.component.html',
  styleUrls: ['./ystm-entrance.component.scss']
})


export class YstmEntranceComponent implements OnInit {

  entrance: string = "Ми1лости про1симъ во а4нгулzръ в7i.";
  bukvica: string = "†"
  numberok: string = "в7i"
  imageCross: string = `https://1.bp.blogspot.com/-s_FOvMb40sg/Xp2eR4kbPVI/AAAAAAAAFJk/NG0rHfdgKHgWKlb5me5r-0J8_LdC82AywCLcBGAsYHQ/s222/contacts-%2540.png`
  breakpointsObserver: any;


  constructor(private timeBox: TimeboxService) { }

  ngOnInit(): void {
    this.kinovar(this.entrance)
  }

  /**
   * Функция получает строку и создает из нее три объкта:
   * Отделяет первый символ в объект.
   * Последние четыре символа в объект.
   * Сама строка без первого и последних символов.
   * 
   * @param str Принимает строку
   */
  kinovar(str: string = "No string") {
    this.bukvica = str.slice(0, 1) as string;
    this.numberok = str.slice(-4) as string;
    this.entrance = str.slice(1, (str.length - 4))
  }

  // card = this.breakpointsObserver.observe(Breakpoints.Handset).pipe(map(({matches})=> { if(matches){
  //     return[
  //       {title: 'c1', cols: 1, rows: 1},
  //       {title: 'c2', cols: 1, rows: 1},
  //       {title: 'c3', cols: 1, rows: 1},
  //     ];
  //   }
  //   return [
  //     {title: 'c1', cols: 2, rows: 1},
  //       {title: 'c2', cols: 3, rows: 1},
  //       {title: 'c3', cols: 1, rows: 1},
  //   ]
  // }))

  ystmRRR = [
    {
      id: 1,
      name: "One",
      num: this.numberok,
      url: "https://2.bp.blogspot.com/-mXGXVDW8FKA/YSJis0-2AzI/AAAAAAAAG5Y/wue1zyd-yJQDFshtPclrNOgClBzC8SMdgCK4BGAYYCw/s120/Az-742896.png",
      cols: 1,
      rows: 1

    },
    {
      id: 2,
      name: "Two",
      num: this.numberok,
      url: "https://1.bp.blogspot.com/-IUroxegf_Pw/YMTFf_s2YhI/AAAAAAAAGmw/I4uxsGoYYu0byG2pHf-iPRnUNM0A25q-gCLcBGAsYHQ/s120/az374ru_2.png",
      cols: 1,
      rows: 1

    },
    {
      id: 3,
      name: "Three",
      num: this.numberok,
      url: "https://1.bp.blogspot.com/-TM5ZnEKL_24/YMTFhgBOAgI/AAAAAAAAGm4/srWiFeEz3iEMQ_gWUZI-Q6ZxbweG_MhUwCLcBGAsYHQ/s120/az374ru_3.png",
      cols: 1,
      rows: 1

    },
    {
      id: 4,
      name: "Four",
      num: this.numberok,
      url: "https://1.bp.blogspot.com/-DYwUvC9BnbQ/YMTFhBoWktI/AAAAAAAAGm0/x9Q7yC-AuUI-SirphMl39C9tlmd4HlLpQCLcBGAsYHQ/s120/az374ru_4.png",
      cols: 1,
      rows: 1

    },
    {
      id: 5,
      name: "Five",
      num: this.numberok,
      url: "https://1.bp.blogspot.com/-i7zTJmowvtQ/YMTFiOzHBoI/AAAAAAAAGm8/mSCxMDhmGnEd8DWRgKy0zI6NPJFffX6SgCLcBGAsYHQ/s120/az374ru_5.png",
      cols: 1,
      rows: 1

    },
    {
      id: 6,
      name: "Sex",
      num: this.numberok,
      url: "https://1.bp.blogspot.com/-wFntKmpJLoc/YMTFi90cIoI/AAAAAAAAGnA/PQwz90fM8bAdQ4bP3k9dRGV3Gej48NtfgCLcBGAsYHQ/s120/az374ru_6.png",
      cols: 2,
      rows: 1
    }
  ]

}
