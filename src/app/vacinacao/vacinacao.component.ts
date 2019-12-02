import { Component, OnInit } from '@angular/core';
import { VaccineService } from '../../services/vaccine.service'

import * as _ from 'lodash';

@Component({
  selector: 'app-vacinacao',
  templateUrl: './vacinacao.component.html',
  styleUrls: ['./vacinacao.component.scss']
})
export class VacinacaoComponent implements OnInit {

  constructor(private vaccineService: VaccineService) { }

  vaccines: any;


  ngOnInit() {
    this.recoverVaccines()    
  }

  recoverVaccines() {
    const vac = this.vaccineService.getAllInfo().subscribe(response => {


      let goruppedVaccines = _.groupBy(response, item => item.vaccine.name)
      let keys = Object.keys(goruppedVaccines)
      let responseArray = keys.map(current =>{
       
        return goruppedVaccines[current]
      })
      
      this.vaccines = responseArray
      return responseArray

    })
  }
}
