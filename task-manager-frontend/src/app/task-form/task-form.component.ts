import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskService } from '../services/task.service';

@Component({
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  @Output() taskAdded = new EventEmitter<void>(); // Pour actualiser la liste parente

  taskForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ])
  });

  constructor(private taskService: TaskService) {}

  onSubmit() {
    if (this.taskForm.valid) {
      const title = this.taskForm.value.title!.trim();

      this.taskService.addTask(title).subscribe({
        next: () => {
          this.taskForm.reset(); // Vidage du formulaire
          this.taskAdded.emit(); // Notification au parent
        },
        error: (err) => {
          alert('Erreur : ' + err.message);
        }
      });
    }
  }
}
