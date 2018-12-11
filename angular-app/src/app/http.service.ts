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

    getTask(_id){
        return this._http.get(`/task/${_id}`);
    }

    removeTask(_id){
        return this._http.delete(`/task/${_id}`);
    }

    createTask(newTask){
        return this._http.post("/tasks", newTask);
    }

    editTask(_id, editTask){
        return this._http.put(`/task/${_id}`, editTask);
    }
    // findTask(_id){
    //     return this._http.get(`/task/${_id}`);
    // }
}
