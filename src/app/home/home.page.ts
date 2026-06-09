import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonInput,
  IonButton,
  IonList,
  IonLabel,
  IonIcon
} from '@ionic/angular/standalone';

import { FormsModule } from '@angular/forms';

import { addIcons } from 'ionicons';
import { addOutline } from 'ionicons/icons';

interface Task {
  id: number;
  titulo: string;
  descripcion: string;
  finalizado: boolean;
  prioridad?: 'baja' | 'media' | 'alta';
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonInput,
    IonButton,
    IonList,
    IonLabel,
    IonIcon,
    FormsModule
  ],
})
export class HomePage {

  task: string = '';

  tasks: Task[] = [];

  constructor() {
    addIcons({
      addOutline
    });
  }

  addTask() {

    const titulo = this.task.trim();

    if (!titulo) {
      console.log('La tarea esta vacia');
      return;
    }

    const existe = this.tasks.some(
      tarea => tarea.titulo.toLowerCase() === titulo.toLowerCase()
    );

    if (existe) {
      console.log('La tarea ya existe');
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      titulo: titulo,
      descripcion: '',
      finalizado: false,
      prioridad: 'media'
    };

    this.tasks.push(newTask);

    console.log(this.tasks);

    this.task = '';
  }
}