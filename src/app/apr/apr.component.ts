import { Component, OnInit } from '@angular/core';
import { TimeboxService } from '../timebox.service'

@Component({
  selector: 'app-apr',
  templateUrl: './apr.component.html',
  styleUrls: ['./apr.component.scss']
})
export class AprComponent implements OnInit {

  constructor(private timeBox: TimeboxService) { }
// import { TimeboxService } from '../timebox.service'

  ngOnInit(): void {
  }

  



}
