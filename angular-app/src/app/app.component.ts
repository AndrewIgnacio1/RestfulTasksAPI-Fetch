import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'app';
	tasks = [];
	third = "";
	constructor(private _httpService: HttpService){}

	ngOnInit(){
		this.getTasksFromService();
		this.getATaskFromService()
	}

	getTasksFromService(){
		let observable = this._httpService.getTasks()
		observable.subscribe(data => {
			console.log("Got our data!", data)
			this.tasks = data['name'];
		})
	}

	getATaskFromService(){
		let itsatask = this._httpService.getATask()
		itsatask.subscribe(data => {
			console.log("Got our third data!", data)
			this.third = data['name'];
		})
	}
}
