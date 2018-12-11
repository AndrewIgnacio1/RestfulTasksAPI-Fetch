import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../http.service'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  detailsclick = false;
  showEditForm = false;
  constructor(private _taskService: TaskService) { }

  @Input() task: any;
  @Output() taskEvent = new EventEmitter();

  ngOnInit() {
  }

  getRidOfTask(task_id){
    let observable = this._taskService.removeTask(task_id);
    observable.subscribe( data => {
      console.log(data);
      this.taskEvent.emit();
    })
  }

  showDetails(task_id){
		this.detailsclick = true;
	}

  editOnClick(task){
		this.showEditForm = true;
	}

  onEdit(task_id, editTask){
		editTask.showEditForm = false;
		let observable = this._taskService.editTask(task_id, editTask);
		observable.subscribe(data => {
			console.log("Got data from post", data)
		})
	}

}
