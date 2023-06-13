import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Ticketm } from 'src/app/models/ticketm';
import { TicketsService } from 'src/app/services/tickets.service';

@Component({
  selector: 'app-tocket',
  templateUrl: './tocket.component.html',
  styleUrls: ['./tocket.component.css']
})
export class TocketComponent {

  tiks!:Array<Ticketm>

constructor(private ticketS:TicketsService,
  private router:Router){

  this.tiks= new Array<Ticketm>();
  this.obtener()
}
ngOnInit():void{

}
obtener(){
  this.ticketS.getTickes().subscribe(
    result=>{
      console.log(result)
      result.forEach((element:any) => {
        let unTik: Ticketm = new Ticketm();
        Object.assign(unTik,element);
        this.tiks.push(unTik);
        unTik= new Ticketm();
      });//console.log(result)
    },
    error=>{

    }
  )
}
agregarT(){
this.router.navigate(["ticform",0])
}
modificarT(ticket : Ticketm){
  this.router.navigate(["ticform",ticket._id])
}
}
