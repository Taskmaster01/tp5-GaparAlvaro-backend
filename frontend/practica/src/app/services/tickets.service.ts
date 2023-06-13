import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticketm } from '../models/ticketm';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
urlbase:string="http://localhost:3000/api/"
  constructor( private _http:HttpClient) { 
   
  }

  getTickes():Observable<any>{
    let httpOption={
      headers: new HttpHeaders(
        {

        }
      ),
      params: new HttpParams()
    }
    return this._http.get(this.urlbase+"ticket",httpOption)
  }
  getTicke(id: string):Observable<any>{
    let httpOption={
      headers: new HttpHeaders(
        {

        }
      ),
      params: new HttpParams()
    }
    return this._http.get(this.urlbase+"ticket/"+id,httpOption)
  }

  createTicket(tick: Ticketm):Observable<any>{
    let httpOption={
      headers: new HttpHeaders(
        {
          "Content-type": "application/json"
        }
      ),
      params: new HttpParams()//para cuando vea seguridad
    }
    let body = JSON.stringify(tick);//JSON.stringify(tick);
    return this._http.post(this.urlbase+"ticket",body,httpOption) 
  }
}
