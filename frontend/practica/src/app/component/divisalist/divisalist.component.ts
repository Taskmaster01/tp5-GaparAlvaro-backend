import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Divisam } from 'src/app/models/divisam';
import { DivisaService } from 'src/app/services/divisa.service';

@Component({
  selector: 'app-divisalist',
  templateUrl: './divisalist.component.html',
  styleUrls: ['./divisalist.component.css']
})
export class DivisalistComponent implements OnInit {
  email!:string;
  origen!:string;
  destino!:string;
  divisa!:Divisam;
  divisas!:Array<Divisam>;
  constructor(private divisaService:DivisaService,
    private router: Router) { 
  }

  recuperarTodo(){
    this.divisaService.getTransacciones().subscribe(
      result=>{
        this.divisas= new Array<Divisam>();

        result.forEach((element:any) => {
          this.divisa=new Divisam();
          Object.assign(this.divisa,element);
          this.divisas.push(this.divisa);       
        });
        console.log(result);
      },
      error=>{
          console.log("error")
      } 
    );
  }

  recuperarFiltro(divisa:NgForm){
    this.divisaService.getTransaccionesPorParametros(this.email).subscribe(
      result=>{
        this.divisas= new Array<Divisam>();

        result.forEach((element:any) => {
          this.divisa=new Divisam();
          Object.assign(this.divisa,element);
          this.divisas.push(this.divisa);       
        });
        console.log(result);
        divisa.reset();
      },
      error=>{
          console.log("error")
      } 
    );
    
  }

  recuperarFiltroMoneda(divisa:NgForm){
    this.divisaService.getTransaccionesPorMonedas(this.origen,this.destino).subscribe(
      result=>{
        this.divisas= new Array<Divisam>();

        result.forEach((element:any) => {
          this.divisa=new Divisam();
          Object.assign(this.divisa,element);
          this.divisas.push(this.divisa);       
        });
        console.log(result);
        divisa.reset();
      },
      error=>{
          console.log("error")
      } 
    );
    
  }

  ngOnInit(): void {
  }

}
