import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../http.service'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

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

}
