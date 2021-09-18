import { Component, OnInit } from '@angular/core';
import { TimeboxService } from '../services/timebox.service';
import { aprakos } from 'src/app/apr/aprakos';
import { regExpEscape } from '@ng-bootstrap/ng-bootstrap/util/util';

@Component({
  selector: 'app-apr',
  templateUrl: './apr.component.html',
  styleUrls: ['./apr.component.scss']
})
export class AprComponent implements OnInit {
  
  // S:S 111 Вывести в html зачала из aprakos.json 205-2021  
  aprakos = aprakos

  // let zapstl = ""
  apstl = this.aprakos[0].apstl
  // let zevngl = ""
  evngl = this.aprakos[0].evngl
  
  buckvicaApstl = "???"
  buckvicaEvngl = "???"

  // for (const i of  array) {
    
  // }

  constructor(private timeBox: TimeboxService) { 

    // console.log(this.aprakos[0].apstl);




  }

  ngOnInit(): void {  

    let regx =   /\(За\?\s\S*\)\s(\S|Ё|)?#?:?\$?/

    let rng = aprakos[0].apstl.match(regx)
    this.apstl = aprakos[0].apstl.slice(rng![0].length)
    this.buckvicaApstl = rng![0]
    
    let rng2 = aprakos[0].evngl.match(regx)
    this.evngl = aprakos[0].evngl.slice(rng2![0].length)
    this.buckvicaEvngl = rng2![0]
  

console.log(rng![0]);

    


    }





}
