import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() vaccine: any;
  constructor() { }

  ngOnInit() {
  }

}




  // title: "vacina 1", 
  // detail: (1) […], 

//   dose: "1"
// ​​​
// lot: "12345678"
// ​​​
// validity: "29/10/2019"
  // date: "31/10/2019" 

  
