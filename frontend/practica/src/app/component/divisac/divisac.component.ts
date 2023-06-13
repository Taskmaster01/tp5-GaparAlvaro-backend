import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Divisam } from 'src/app/models/divisam'; 
import { DivisaService } from 'src/app/services/divisa.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-divisac',
  templateUrl: './divisac.component.html',
  styleUrls: ['./divisac.component.css']
})
export class DivisacComponent implements OnInit {

  valor!:string;
  from_value!:string;
  from_type!:string;
  to_type!:string;

  divis!:Divisam;
  constructor(private divisaService: DivisaService,
    private router: Router) {
    this.divis=new Divisam();
   }


  cotizar(){ 
    this,this.divisaService.getCambio(this.from_value,this.from_type,this.to_type).subscribe(
      result=>{
        this.valor=result.result;
        console.log("donde valor="+this.from_value+" donde tipo="+this.from_type+" tipo="+this.to_type);
        console.log(this.valor + "valor");
         
        this.cargarDivisa();
      
        
        
      },
      error=>{
        Swal.fire({
          icon: 'error',
          title: 'ERROR',
          showConfirmButton: false,
          timer: 1500
         });
      } 
    );
  }

  cargarDivisa(){
 
    this.divis.cantidadOrigen=parseInt(this.from_value);
    this.divis.monedaOrigen=this.from_type;
    this.divis.cantidadDestino=parseInt(this.valor);//this.cantidadDestino;
    this.divis.monedaDestino=this.to_type;
    this.divis.tasaConversion=parseInt(this.valor);//Number(this.valor);
   
    this.divisaService.alta(this.divis).subscribe(
      (result)=>{
        if(result.status=="1"){
          //da aviso del estado con una alerta
          Swal.fire({
           icon: 'success',
           title: result.msg,
           showConfirmButton: false,
           timer: 1500

          });
          console.log()
          this.llamarListaDivisa();
          
        }
      },
      error=>{
        if(error.status=="0"){
          alert(error.msg);
        }
    } 
    );
  }

  ngOnInit(): void {
  }

  llamarListaDivisa(){
    this.router.navigate(['lista divisa', 0])
  }
}