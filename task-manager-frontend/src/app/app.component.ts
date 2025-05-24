import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';


@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    TaskFormComponent, // <-- Ajoutez le composant ici
    TaskListComponent  // <-- Ajoutez le composant ici
  ],
  template: `
    <h1>Gestionnaire de tâches</h1>
    <app-task-form></app-task-form>
    <app-task-list></app-task-list>
  `,
  styles: []
})
export class AppComponent {
  title = 'task-manager-frontend';
}
