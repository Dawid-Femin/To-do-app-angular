import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editMode = false;
  taskName = 'Dodaj zadanie';
  taskDate = '';
  config: { [key: string]: string | null } = null;
  tasks: Task[] = [
    {
      name: 'Siłownia',
      deadline: '2022-11-02',
      done: false
    },
    {
      name: 'Nauka',
      deadline: '2022-11-05',
      done: false
    },
    {
      name: 'Sprzątanie',
      deadline: '2022-11-08',
      done: false
    },
  ];

  constructor() {
    setTimeout(()=> {
      this.config = {
        title: 'Lista zadań',
        footer: 'Lista zadań Angular',
        date: new Date().toDateString()
      };
    }, 500)
  };

  clearTasks() {
    this.tasks = [];
  }

  createTask() {
    const task: Task = {
      name: this.taskName,
      deadline: this.taskDate,
      done: false
  };
  this.tasks.push(task);
  this.taskName = '';
  this.taskDate = '';
  }

  switchEditMode() {
    this.editMode = !this.editMode;
  }
}