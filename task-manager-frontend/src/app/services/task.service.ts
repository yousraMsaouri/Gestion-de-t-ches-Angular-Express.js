import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private apiUrl = 'http://localhost:3000/api/tasks';

  constructor(private http: HttpClient) {}

  private handleError(error: any) {
    let userMessage = 'Une erreur est survenue';

    if (error.error?.message) {
      // Erreur structurée du backend
      userMessage = error.error.message;
    } else if (error.status === 0) {
      userMessage = 'Impossible de se connecter au serveur';
    }

    alert(userMessage); // Affiche un message convivial
    console.error('Erreur technique:', error); // Log technique
    return throwError(() => new Error(userMessage));
  }

  getTasks() {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  addTask(title: string) {
    return this.http.post(this.apiUrl, { title }).pipe(
      catchError(this.handleError)
    );
  }

  updateTask(task: any) {
    return this.http.put(`${this.apiUrl}/${task.id}`, task).pipe(
      catchError(this.handleError)
    );
  }

  deleteTask(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }
}
