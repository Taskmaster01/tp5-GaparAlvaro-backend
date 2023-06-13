import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class EspectadorsService {

  urlbase:string="http://localhost:3000/api/"
  constructor( private _http:HttpClient) { 
   
  }

  getEspectador():Observable<any>{
    let httpOption={
      headers: new HttpHeaders(
        {

        }
      ),
      params: new HttpParams()
    }
    return this._http.get(this.urlbase+"espectador",httpOption)
  }
  /*getTicke(id: string):Observable<any>{
    let httpOption={
      headers: new HttpHeaders(
        {

        }
      ),
      params: new HttpParams()
    }
    return this._http.get(this.urlbase+"ticket/"+id,httpOption)
  }*/
}
