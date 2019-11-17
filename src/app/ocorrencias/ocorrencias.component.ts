import { Component, OnInit } from '@angular/core';
import { OccurrenceService } from '../../services/occurrence.service'
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-ocorrencias',
  templateUrl: './ocorrencias.component.html',
  styleUrls: ['./ocorrencias.component.scss']
})
export class OcorrenciasComponent implements OnInit {

  constructor(private occurrenceService: OccurrenceService) { }

  occurrences: any;

  ngOnInit() {
    this.recoverOccurences()

    console.log("---- todas as ocorrencias ---- ")
    console.log(this.occurrences)
  }


  recoverOccurences() {
    this.occurrenceService.getAllInfo().subscribe(response => {
      
      console.log("---- dentro do response ---- ")
      console.log(response)
      let occ = response.map(current =>{
        let newDateFormat = current.medicalRecordDate.split("::")
        if(newDateFormat[2] == "1") newDateFormat[2] = "Janeiro"
        if(newDateFormat[2] == "2") newDateFormat[2] = "Fevereiro"
        if(newDateFormat[2] == "3") newDateFormat[2] = "Março"
        if(newDateFormat[2] == "4") newDateFormat[2] = "Abril"
        if(newDateFormat[2] == "5") newDateFormat[2] = "Maio"
        if(newDateFormat[2] == "6") newDateFormat[2] = "Junho"
        if(newDateFormat[2] == "7") newDateFormat[2] = "Julho"
        if(newDateFormat[2] == "8") newDateFormat[2] = "Agosto"
        if(newDateFormat[2] == "9") newDateFormat[2] = "Setembro"
        if(newDateFormat[2] == "10") newDateFormat[2] = "Outubro"
        if(newDateFormat[2] == "11") newDateFormat[2] = "Novembro"
        if(newDateFormat[2] == "12") newDateFormat[2] = "Dezembro"
        current.medicalRecordDate = [newDateFormat[0],newDateFormat[1],newDateFormat[2]]
        return current
      })

      this.occurrences = occ
      return occ

    })

  }
}


// this.occurrences = [
//   {
//     idMedicalRecord: 1,
//     crm: "123456",
//     mainComplain: "Dores na região das costas",
//     currentDiseaseInfo: "Fortes dores nas costas ao permanecer sentado ou em pé",
//     diagnostic: "Mal jeito na região lombar",
//     prescription: "Paracetamol de 8 em 8h",
//     medicalRecordDate: [2015,8,11],
//     medicalRecordPlace: "AMA São Miguel Paulista",
//     medicalExam: [],
//     physicalExam: []
//   },
//   {
//     idMedicalRecord: 1,
//     crm: "123456",
//     mainComplain: "Dores na região das costas",
//     currentDiseaseInfo: "Fortes dores nas costas ao permanecer sentado ou em pé",
//     diagnostic: "Mal jeito na região lombar",
//     prescription: "Paracetamol de 8 em 8h",
//     medicalRecordDate: [2015,8,11],
//     medicalRecordPlace: "AMA São Miguel Paulista",
//     medicalExam: [],
//     physicalExam: []
//   }
// ]