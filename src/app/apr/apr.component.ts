import { Component, OnInit } from '@angular/core';
import { TimeboxService } from '../services/timebox.service'

@Component({
  selector: 'app-apr',
  templateUrl: './apr.component.html',
  styleUrls: ['./apr.component.scss']
})
export class AprComponent implements OnInit {

// S:S 111 Вывести в html зачала из aprakos.json 205-2021  

  constructor(private timeBox: TimeboxService) { }
// import { TimeboxService } from '../timebox.service'

  ngOnInit(): void {
  }

  



}
