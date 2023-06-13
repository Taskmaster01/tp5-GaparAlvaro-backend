import { Component, OnInit } from '@angular/core';
import { Prodm } from 'src/app/models/prodm';
import { ProdsService } from 'src/app/services/prods.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  indice: number = 0;

  produ!: Prodm;
  produs!: Array<Prodm>;
  constructor(private prodServ: ProdsService) {

    this.produs = new Array<Prodm>();

    this.mostrarProducto();

  }

  ngOnInit(): void {
  }
   
  mostrarProducto() {
    this, this.prodServ.getDestacado().subscribe(
      result => {
        this.produs = new Array<Prodm>();
        result.forEach((element: any) => {
          this.produ = new Prodm();
          Object.assign(this.produ, element);
          this.produs.push(this.produ);
        });
        console.log(result);
      },
      error => {
        console.log("error")
      });
  }

}
