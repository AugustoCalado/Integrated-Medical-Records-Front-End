import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vaccine-card',
  templateUrl: './vaccine-card.component.html',
  styleUrls: ['./vaccine-card.component.scss']
})
export class VaccineCardComponent implements OnInit {

  @Input() vaccine: any;
  constructor() { }

  ngOnInit() {
    console.log("------ vaccine no card ------")
    console.log(this.vaccine)
  }

}