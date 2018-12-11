import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
   constructor(private _http: HttpClient){

   }
   getTasks(){
       return this._http.get('/tasks');
    }

    removeTask(_id){
        return this._http.delete(`/task/${_id}`);
    }

    createTask(newTask){
        return this._http.post("/tasks", newTask);
    }

    // findTask(_id){
    //     return this._http.get(`/task/${_id}`);
    // }
}
