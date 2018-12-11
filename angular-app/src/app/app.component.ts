import { Component, OnInit } from '@angular/core';
import { TaskService } from './http.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'Tasks';
	tasks = [];

	newTask = {
		"title" : "",
		"description" : ""
	};

	constructor(private _taskService: TaskService){}

	ngOnInit(){
		// this.getTasksFromService();
	}

	getTasksFromService(){
		let observable = this._taskService.getTasks()
		observable.subscribe(data => {
			console.log("Get Tasks From Service!", data)
			this.tasks = data['task'];
		})
	}

	getRidOfTask(task_id){
		console.log(`task to get rid of ${task_id}`);
		let observable = this._taskService.removeTask(task_id);
		observable.subscribe(data => {
			console.log("Get Rid of Task!", data)
			this.getTasksFromService();
		})
	}



	makeTask(){
		let observable = this._taskService.createTask(this.newTask);
		observable.subscribe( data => {
			console.log("Make Task!", data);
			this.getTasksFromService();
			this.newTask = {
				"title" : "",
				"description" : ""
			}
		})
	}

	// searchTask(task_id){
	// 	let observable = this._taskService.findTask(task_id);
	// 	observable.subscribe( data => {
	// 		console.log("Search Task!", data);
	// 	})
	// }

	taskRemoval(){
		this.getTasksFromService();
	}
}
