import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vaccine-card',
  templateUrl: './vaccine-card.component.html',
  styleUrls: ['./vaccine-card.component.scss']
})
export class VaccineCardComponent implements OnInit {

  @Input() vaccine: any;
  newVaccine : any;
  constructor() { }

  ngOnInit() {
    this.ajustVaccine2show(this.vaccine)

  }



  ajustVaccine2show(vaccine){

    let x = vaccine.map(current =>{
      let newDateVaccine = current.dataVaccine.split("::")
          let newExpirationDateVaccine = current.vaccineExpirationDate.split("::")
          current.dataVaccine  = newDateVaccine[2] + "/" + newDateVaccine[1] + "/" + newDateVaccine[0]
          current.vaccineExpirationDate = newExpirationDateVaccine[2] + "/" + newExpirationDateVaccine[1] + "/" + newExpirationDateVaccine[0]
      return current
    })

    this.newVaccine = x
  }
}