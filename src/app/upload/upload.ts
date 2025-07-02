import {Component, computed, Signal, signal} from '@angular/core';

@Component({
  selector: 'app-upload',
  imports: [],
  templateUrl: './upload.html',
  styleUrl: './upload.scss'
})
export class Upload {
  name = "Name";
  count = signal(21);
  doubleCount: Signal<number> = computed(() => this.count() * 2);
  ngOnInit() {
    this.name = "Name 2";
    this.doubleCount
  }

  updateAge() {
    this.count.set(32);
    this.count.update(() => 45);
  }
}
