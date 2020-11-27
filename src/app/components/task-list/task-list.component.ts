import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks :Task[]
  constructor(
   public taskService : TaskService
  ) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getTaks();
  }

}
