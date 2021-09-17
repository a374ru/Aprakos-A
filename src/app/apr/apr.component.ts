import { Component, OnInit } from '@angular/core';
import { TimeboxService } from '../services/timebox.service';
import { aprakos } from 'src/app/apr/aprakos';

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


  // for (const i of  array) {
    
  // }

  constructor(private timeBox: TimeboxService) { 

    console.log(this.aprakos[0].apstl);


  }

  ngOnInit(): void {    }




}
