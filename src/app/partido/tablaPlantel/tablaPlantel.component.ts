import { Component, Input, OnInit } from '@angular/core';
import { Jugador } from 'src/app/Models/Jugador';

@Component({
  selector: 'app-tablaPlantel',
  templateUrl: './tablaPlantel.component.html',
  styleUrls: ['./tablaPlantel.component.css']
})
export class TablaPlantelComponent implements OnInit {
  
  @Input() plantel:Jugador[] | any = [];
  constructor() { }

  ngOnInit() {
  }

}
