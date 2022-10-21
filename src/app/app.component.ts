import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
  }
}