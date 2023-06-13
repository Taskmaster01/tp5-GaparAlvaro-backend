import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Espectadorm } from 'src/app/models/espectadorm';
import { Ticketm } from 'src/app/models/ticketm';
import { EspectadorsService } from 'src/app/services/espectadors.service';
import { TicketsService } from 'src/app/services/tickets.service';

@Component({
  selector: 'app-ticform',
  templateUrl: './ticform.component.html',
  styleUrls: ['./ticform.component.css']
})
export class TicformComponent implements OnInit {
  ticke!:Ticketm;
  action: string = "";
  esp!:Array<Espectadorm>;
  constructor(private activateRoute: ActivatedRoute,
    private ticks:TicketsService,
    private especs:EspectadorsService) {
      this.ticke= new Ticketm();
      this.esp = new Array<Espectadorm>();
     }


  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      if (params['id'] == "0") {
        this.action = "new";
        this.cargaEsp();
      } else {
        this.action = "update";
        this.cargaTic(params['id']);
        this.cargaEsp();
      }
    });
  }

  cargaTic(id: string){
    this.ticks.getTicke(id).subscribe(
      result=>{
        console.log(result);
        Object.assign(this.ticke,result);//ticke,result);
        this.ticke.ticketP = this.esp.find(item => (item._id == this.ticke.ticketP._id))!;
        console.log(this.ticke)
      },
      error=>{

      }
    )
    
  }

  cargaEsp( ){
    this.especs.getEspectador().subscribe(
      result=>{
        //console.log(result);
        let unEspc = new Espectadorm();
        result.forEach((element:any)=>{
        Object.assign(unEspc,element);
          this.esp.push(unEspc);
          unEspc= new Espectadorm();//limpiael array
        });
      },
      error=>{

      }
    ) 
  }

  guardarTicket(){
    this.ticks.createTicket(this.ticke).subscribe(
      result=>{
        if(result.status == 1){
          alert(result.msg);
        }
      },
      error=>{
        alert(error.msg);
      }
    )
  }
  actualizarTicket(){

  }
}
