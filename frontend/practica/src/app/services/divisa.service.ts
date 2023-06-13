import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Divisam } from '../models/divisam';

@Injectable({
  providedIn: 'root'
})
export class DivisaService {
  urlbase:string="http://localhost:3000/api/"

  constructor(private _http: HttpClient) { }
  public getCambio(from_value:string,from_type:string,to_type:string): Observable<any> {
    // petición por get a esa url de un api rest
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '7dc69b2486msh72a1eb21accdd1cp1bb989jsnea28cd9ab970',
		'X-RapidAPI-Host': '',//'community-neutrino-currency-conversion.p.rapidapi.com'
 
      }),
    }
    const body =new HttpParams()
    .set('from-value',from_value)
    .set('from-type',from_value)
    .set('to_type', to_type)
    return this._http.post("https://community-neutrino-currency-conversion.p.rapidapi.com/convert",body,httpOptions);
  }
  ///mio
  public alta(divisa:Divisam):Observable<any>{
    const httpOptions = {
    headers: new HttpHeaders({
     'Content-type':'application/json',
    }),
    };
    let body = JSON.stringify(divisa);//JSON.stringify(tick);
    return this._http.post<Divisam>(this.urlbase+"transaccion",divisa, httpOptions);
    }
    ////////////////// PARTE 2
  public getTransacciones():Observable<any>{
    const httpOptions = {
    headers: new HttpHeaders({
     'Content-type':'application/json',
    }),
    }
  
    return this._http.get(this.urlbase+"transaccion", httpOptions);
    }



    public getTransaccionesPorParametros(emailCliente:string):Observable<any>{
      const httpOptions = {
      headers: new HttpHeaders({
       'Content-type':'application/json',
      }),
      }
    
      return this._http.get(this.urlbase+"transaccion/emailCliente/?emailCliente="+emailCliente, httpOptions);
      }


      public getTransaccionesPorMonedas(monedaOrigen:string,monedaDestino:string):Observable<any>{
        const httpOptions = {
        headers: new HttpHeaders({
         'Content-type':'application/json',
        }),
        }
      
        return this._http.get(this.urlbase+"transaccion/monedas/?monedaOrigen="+monedaDestino+"&monedaDestino="+monedaDestino, httpOptions);
        }
}
