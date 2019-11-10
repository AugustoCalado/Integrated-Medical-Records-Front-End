import { Component, OnInit } from '@angular/core';
import { OccurrenceService } from '../../services/occurrence.service'

@Component({
  selector: 'app-ocorrencias',
  templateUrl: './ocorrencias.component.html',
  styleUrls: ['./ocorrencias.component.scss']
})
export class OcorrenciasComponent implements OnInit {

  constructor(private occurrenceService: OccurrenceService) { }

  occurrences: any;

  ngOnInit() {
    this.occurrences = [
      {
        idMedicalRecord: 1,
        crm: "123456",
        mainComplain: "Dores na região das costas",
        currentDiseaseInfo: "Fortes dores nas costas ao permanecer sentado ou em pé",
        diagnostic: "Mal jeito na região lombar",
        prescription: "Paracetamol de 8 em 8h",
        medicalRecordDate: [2015,8,11],
        medicalRecordPlace: "AMA São Miguel Paulista",
        medicalExam: [],
        physicalExam: []
      },
      {
        idMedicalRecord: 1,
        crm: "123456",
        mainComplain: "Dores na região das costas",
        currentDiseaseInfo: "Fortes dores nas costas ao permanecer sentado ou em pé",
        diagnostic: "Mal jeito na região lombar",
        prescription: "Paracetamol de 8 em 8h",
        medicalRecordDate: [2015,8,11],
        medicalRecordPlace: "AMA São Miguel Paulista",
        medicalExam: [],
        physicalExam: []
      }
    ]

    console.log("---- todas as ocorrencias ---- ")
    console.log(this.occurrences)
  }

}
