import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component'

export interface TaskInterface {
  id: number;
  name: string;
  done: boolean;
  comment?: string;
}

@Component({
  selector: 'digi-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, TaskListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'todolist';
  test = { text: "Buddy is the best" };
  hello = "hello";
  tasks: TaskInterface[] = [{ id: 1, name: 'Faire la vaisselle', done: false, comment: "Dépêche toi mon lapin, je ne supporte pas de voir traîner la vaisselle" }, { id: 2, name: 'Faire le ménage', done: false }, { id: 3, name: "Dormir", comment: "Important!", done: true }];
  logName = (givenname: string) => {
    console.log(givenname)
  }
  onButtonValidate(task: TaskInterface): void {
    task.done = !task.done;
  };
  // console.log("bouton validé cliqué", taskId);
}

