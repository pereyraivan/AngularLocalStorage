import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TaskFormComponent } from './components/task-form/task-form.component';

import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskComponent } from './components/task/task.component';

import{ TaskService } from './services/task.service';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TaskFormComponent,
    TaskListComponent,
    TaskComponent,
 
  ],
  imports: [
    BrowserModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
