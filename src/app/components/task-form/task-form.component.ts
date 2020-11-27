import { Component, OnInit } from '@angular/core';
import{TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  constructor(public taskService: TaskService) {

   }

  ngOnInit(): void {
  }
  addTask(titulo: HTMLInputElement, descripcion:HTMLInputElement){
    this.taskService.addTaks({
      titulo: titulo.value,
      descripcion: descripcion.value,
      hide: true
    });
    
    titulo.value = "";
    descripcion.value ="";
    titulo.focus();
    return false;
  }

}
