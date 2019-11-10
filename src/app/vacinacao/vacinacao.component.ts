import { Component, OnInit } from '@angular/core';
import { VaccineService } from '../../services/vaccine.service'

@Component({
  selector: 'app-vacinacao',
  templateUrl: './vacinacao.component.html',
  styleUrls: ['./vacinacao.component.scss']
})
export class VacinacaoComponent implements OnInit {

  constructor(private vaccineService: VaccineService) { }

  vaccines: any;


  ngOnInit() {
    this.vaccines = [ 
      { 
        title: 'vacina 1', 
        detail: [
          { dose: '1', lot: '12345678', validity: '29/10/2019' },
          { dose: '2', lot: '0987654321', validity: '29/10/2019' }],
        date: '31/10/2019',
        description: "qaswd efrtgyhuj ikolkiju hygtfr deswx wsedrft gyhujmijnuhbygtvf" 
      },
      { title: 'vacina 2', detail: [{ dose: '1', lot: '12345678', validity: '29/10/2019' }], date: '31/10/2019' },
      { title: 'vacina 3', detail: [{ dose: '1', lot: '12345678', validity: '29/10/2019' }], date: '31/10/2019' },
      { title: 'vacina 4', detail: [{ dose: '1', lot: '12345678', validity: '29/10/2019' }], date: '31/10/2019' },

    ]
    console.log("---- todas as vacinas---- ")
    console.log(this.vaccines)
  }

}
