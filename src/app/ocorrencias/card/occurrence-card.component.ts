import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-occurrence-card',
  templateUrl: './occurrence-card.component.html',
  styleUrls: ['./occurrence-card.component.scss']
})
export class OccurrenceCardComponent implements OnInit {

  @Input() occurrence: any;
  isActive: Boolean = false
  constructor() { }
  
  ngOnInit() {
    console.log("----- chegou aqui ------")
    
  }


  activedSide(){
    this.isActive = !this.isActive
    console.log(this.isActive)
  }

}
