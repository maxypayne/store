import {Component, computed, effect, inject, signal, WritableSignal} from '@angular/core';
import {NgForOf} from '@angular/common';
import {MatDialog} from '@angular/material/dialog';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-playground',
  imports: [
  ],
  templateUrl: './playground.html',
  styleUrl: './playground.scss'
})
export class Playground {
  matDialog: MatDialog = inject(MatDialog);
  items = signal([
    { id: 0, name: 'Pommes', price: 2.5, quantity: 3 },
    { id: 1, name: 'Pain', price: 1.2, quantity: 2 }
  ]);

  // Computed signal - se recalcule automatiquement
  itemCount = computed(() => this.items().length);



  constructor() {
    effect(() => {
      console.log('Component loaded');
      if(this.itemCount() > 5) {
        console.log('Enough items loaded');
      }
    });
  }

  total = computed(() =>
    this.items().reduce((sum, item) => sum + (item.price * item.quantity), 0)
  );

  addItem() {
    this.items.update(items => [...items, {
      id: items.length,
      name: 'Nouvel article',
      price: Math.random() * 10,
      quantity: 1
    }]);
  }

  removeItem(index: number) {
    this.items.update(items => items.filter((_, i) => i !== index));
  }

  // todo
  todos = signal<Todo[]>([
    { id: 1, title: 'Apprendre les signals', completed: false },
    { id: 2, title: 'Créer un projet Angular', completed: true }
  ]);

  // Computed signals pour les statistiques
  totalCount = computed(() => this.todos().length);
  completedCount = computed(() => this.todos().filter(t => t.completed).length);

  addTodo(title: string) {
    if (title.trim()) {
      this.todos.update(todos => [...todos, {
        id: Date.now(),
        title: title.trim(),
        completed: false
      }]);
    }
  }

  toggleTodo(id: number) {
    this.todos.update(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  removeTodo(id: number) {
    this.todos.update(todos => todos.filter(todo => todo.id !== id));
  }

  trackByTodo(index: number, todo: Todo): number {
    return todo.id;
  }
}
