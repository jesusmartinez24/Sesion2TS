import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent,
  IonItem, IonLabel, IonInput, IonList, IonButton } from '@ionic/angular/standalone';
import { Task } from '../model/task.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,
    IonItem, IonLabel, IonInput, IonList, IonButton, FormsModule],
})
export class HomePage {

  newTaskStr: string = '';

  tasks: Task[] = [
    {
      id: 1,
      titulo: 'Configuracion de Ionic',
      descripcion: 'Instalar Node, Angular y Ionic',
      finalizado: false,
      prioridad: 'alta'
    },
    {
      id: 2,
      titulo: 'Aprender Angular',
      descripcion: 'Aprender los conceptos basicos de Angular',
      finalizado: false,
      prioridad: 'media'
    }
  ];

  addTask() {
    const titulo = this.newTaskStr.trim();

    if (titulo === '') {
      return;
    }

    const duplicado = this.tasks.some(
      (t) => t.titulo.toLowerCase() === titulo.toLowerCase()
    );

    if (duplicado) {
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      titulo: titulo,
      descripcion: '',
      finalizado: false,
    };

    this.tasks.push(newTask);
    this.newTaskStr = '';
  }
}