import { Injectable } from '@angular/core';
import { Task } from '../models/task'

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  tasks: Task[];

  constructor() { 
    this.tasks = [
      {titulo: 'Leer',descripcion: 'Leer libro nose q', hide:true},
      {titulo: 'padel',descripcion: 'turno a las 21', hide:true},
    ]
  }

  getTaks(){
    return this.tasks;
  }
  addTaks(task: Task){
    this.tasks.push(task);
    
  }
  deleteTask(task: Task){
    for(let i= 0; i<this.tasks.length; i++){
      //si la tarea que recorre en for es igual a la tarea que le llega al metodo lo elimina con splice
      if(task == this.tasks[i]){
        //splice quita el elemento , necesita el indice [i] de donde esta la tarea que vamos a quitar y cuantos elementos desde ese indice quirara, colocamos 1 en este caso.
        this.tasks.splice(i, 1);
      }
    }
  }
}
