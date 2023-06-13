import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 
import { Prodm } from '../models/prodm';

@Injectable({
  providedIn: 'root'
})
export class ProdsService {

  urlbase:string="http://localhost:3000/api/"
  constructor( private _http:HttpClient) { 
   
  }
/////todos los productos
  getProducto():Observable<any>{
    let httpOption={
      headers: new HttpHeaders(
        {
          'Content-type':'application/json',
        }
      ),
      params: new HttpParams()
    }
    return this._http.get(this.urlbase+"producto",httpOption)
  }
  //////
  public getDestacado():Observable<any>{
    const httpOptions = {
    headers: new HttpHeaders({
     'Content-type':'application/json',
    }),
    }
  
    return this._http.get(this.urlbase+"producto/destacado", httpOptions);
    }

  /////crear nuevo
  getCrear(prod: Prodm):Observable<any>{
    let httpOption={
      headers: new HttpHeaders(
        {
          'Content-type':'application/json',
        }
      ),
      params: new HttpParams()
    }
    return this._http.post<Prodm>(this.urlbase+"producto/",prod, httpOption);
   // return this._http.get(this.urlbase+"producto/"+id,httpOption)
  }

  
}


