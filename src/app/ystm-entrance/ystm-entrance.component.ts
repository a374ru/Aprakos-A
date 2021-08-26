import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ystm-entrance',
  templateUrl: './ystm-entrance.component.html',
  styleUrls: ['./ystm-entrance.component.scss']
})
export class YstmEntranceComponent implements OnInit {

  entrance: string ="Ми1лости про1симъ во а4нгулzръ в7i.";
  bukvica: string = "†"
  numberok: string = "†"
  imageCross: string = `https://1.bp.blogspot.com/-s_FOvMb40sg/Xp2eR4kbPVI/AAAAAAAAFJk/NG0rHfdgKHgWKlb5me5r-0J8_LdC82AywCLcBGAsYHQ/s222/contacts-%2540.png`

  constructor() { }

  ngOnInit(): void {
    this.kinovar(this.entrance)
  }

  kinovar(str: string = "No string"){
    this.bukvica = str.slice(0,1) as string;
    this.numberok = str.slice(-4) as string;
    this.entrance = str.slice(1,(str.length-4))
  }

}
