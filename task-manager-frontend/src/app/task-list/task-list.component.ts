import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../services/task.service';
import {TaskFormComponent} from '../task-form/task-form.component';
import {FormsModule} from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-task-list',
  imports: [CommonModule, TaskFormComponent, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];
  filter: 'all' | 'completed' | 'active' = 'all'; // Nouvelle propriété pour le filtre

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe({
      next: (tasks) => this.tasks = tasks,
      error: (err) => alert('Erreur lors du chargement: ' + err.message)
    });
  }

  // Filtre les tâches selon la sélection
  get filteredTasks() {
    switch (this.filter) {
      case 'completed':
        return this.tasks.filter(task => task.completed);
      case 'active':
        return this.tasks.filter(task => !task.completed);
      default:
        return this.tasks;
    }
  }

  toggleTask(task: any) {
    task.completed = !task.completed;
    this.taskService.updateTask(task).subscribe({
      error: (err) => {
        task.completed = !task.completed; // Annule le changement en cas d'erreur
        alert('Erreur lors de la mise à jour: ' + err.message);
      }
    });
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe({
      next: () => this.tasks = this.tasks.filter(task => task.id !== id),
      error: (err) => alert('Erreur lors de la suppression: ' + err.message)
    });
  }
}
