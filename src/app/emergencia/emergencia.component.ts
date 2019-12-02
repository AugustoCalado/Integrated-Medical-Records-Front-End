import { Component, OnInit, ɵisListLikeIterable, Input } from '@angular/core';
import { EmergencyService } from '../../services/emergency.service'
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-emergencia',
  templateUrl: './emergencia.component.html',
  styleUrls: ['./emergencia.component.scss']
})
export class EmergenciaComponent implements OnInit {

  constructor(private emergencyService: EmergencyService) { }

  isActive: Boolean = false
  isBlocked: Boolean = !this.isActive
  emergency: any


  ngOnInit() {
    this.recoverEmergency()
    // console.log("---- todas as emergencias ---- ")
    // console.log(this.emergencies)
  }

  recoverEmergency() {
    this.emergencyService.getAllInfo().subscribe(response => {
      console.log("---- dentro do response ---- ")
      // console.log(response)
      // let occ = response.map(current => {
      //   return current
      // })
      this.emergency = response
      console.log(this.emergency)
      return response
    })
  }

  private newMethod(): any {
        return 'Informações salvas!';
  }

  activateLabel(){
    this.isActive = !this.isActive
    this.isBlocked = !this.isBlocked
    console.log(this.isActive)
  }

  confirmationSave(){
        alert(this.newMethod());
  }


}
