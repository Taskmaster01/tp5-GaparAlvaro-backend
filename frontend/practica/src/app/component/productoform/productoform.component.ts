import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Prodm } from 'src/app/models/prodm';
import { ProdsService } from 'src/app/services/prods.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productoform',
  templateUrl: './productoform.component.html',
  styleUrls: ['./productoform.component.css']
})
export class ProductoformComponent {
  produ!: Prodm;//libro!:Librom;
  //produs!: Array<Prodm>;
  

  destacado: boolean=false;

  constructor(private prodServ:ProdsService) {
    this.produ= new Prodm();
   }

   cargar(produ:NgForm){

    this.produ.destacado=this.destacado;
    this.prodServ.getCrear(this.produ).subscribe(//.libroService.altaLibro(this.libro).subscribe(
      (result)=>{
    //    const resultado=result;
     //   console.log(result);
        if(result.status=="1"){
          
          //da aviso del estado con una alerta
          Swal.fire({
           // alert(result.msg);
            title: result.msg,
            text: this.produ.nombre,
            imageUrl: this.produ.imagen,
            imageWidth: 400,
            imageHeight: 300,
            imageAlt: 'Custom image',
          });

        }
        produ.reset();
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
}
