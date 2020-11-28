import { Injectable } from '@angular/core';
import { Task } from '../models/task'

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  tasks: Task[];

  constructor() { 
      this.tasks = [
      //{titulo: 'Leer',descripcion: 'Leer libro nose q', hide: true},
      //{titulo: 'padel',descripcion: 'turno a las 21', hide: true},
    ]
  }

  getTaks(){
   
   if(localStorage.getItem('tasks')===null){
    return this.tasks;
   }
   else{
     this.tasks = JSON.parse(localStorage.getItem('tasks'));
     return this.tasks;
   }
    
  }

  addTaks(task: Task){
    this.tasks.push(task);
    let tasks: Task[] = [];
    if(localStorage.getItem('tasks')===null){
      
      tasks.push(task)
    //setItem nos dice como vamos a guardar el item. primero le pasamos el nombre con el que deseamos guardar los datos seguido del valor convertido a string.
    //el localStorage debe guardar un string, usamos JSON.stringifi para convertirlo en string
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    else{
      tasks = JSON.parse(localStorage.getItem('tasks'));
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
    
  }
  deleteTask(task: Task) {
    for(let i= 0; i<this.tasks.length; i++){
      //si la tarea que recorre en for es igual a la tarea que le llega al metodo lo elimina con splice
      if(task == this.tasks[i]){
        //splice quita el elemento , necesita el indice [i] de donde esta la tarea que vamos a quitar y cuantos elementos desde ese indice quirara, colocamos 1 en este caso.
        this.tasks.splice(i, 1);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }
    }
  }
}
