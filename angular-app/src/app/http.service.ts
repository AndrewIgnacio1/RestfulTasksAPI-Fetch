import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
   constructor(private _http: HttpClient){

   }
   getTasks(){
       // // our http response is an Observable, store it in a variable
       // let tempObservable = this._http.get('/tasks');
       // // subscribe to the Observable and provide the code we would like to do with our data from the response
       // tempObservable.subscribe(data => console.log("Got our tasks!", data));
       return this._http.get('/tasks');
    }
    getATask(){
        // our http response is an Observable, store it in a variable
        // let itsatask = this._http.get('/tasks/:id');
        // // subscribe to the Observable and provide the code we would like to do with our data from the response
        // itsatask.subscribe(data => console.log("Got our task!", data));

        return this._http.get('/tasks/5c0821770ea2104c9cbd96c7');
     }
}
