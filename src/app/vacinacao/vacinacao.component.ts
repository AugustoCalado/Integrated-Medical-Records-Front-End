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

    // [
    //   {
    //     title: 'vacina 1',
    //     detail: [
    //       { dose: '1', lot: '12345678', validity: '29/10/2019' },
    //       { dose: '2', lot: '0987654321', validity: '29/10/2019' }],
    //     date: '31/10/2019',
    //     description: "qaswd efrtgyhuj ikolkiju hygtfr deswx wsedrft gyhujmijnuhbygtvf"
    //   },
    //   { title: 'vacina 2', detail: [{ dose: '1', lot: '12345678', validity: '29/10/2019' }], date: '31/10/2019' },
    //   { title: 'vacina 3', detail: [{ dose: '1', lot: '12345678', validity: '29/10/2019' }], date: '31/10/2019' },
    //   { title: 'vacina 4', detail: [{ dose: '1', lot: '12345678', validity: '29/10/2019' }], date: '31/10/2019' },

    // ]


    
  }

  recoverVaccines() {
    const vac = this.vaccineService.getAllInfo().subscribe(response => {


      let goruppedVaccines = _.groupBy(response, item => item.vaccine.name)
      let keys = Object.keys(goruppedVaccines)
      let responseArray = keys.map(current =>{
       
        // goruppedVaccines[current]
        return goruppedVaccines[current]
      })
      
      this.vaccines = responseArray
      return responseArray

    })
 
    

    

  }


}
