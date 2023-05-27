import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-input [contador]="addValue"></app-input>
  <button (click)="Add()">Add</button>
  <router-outlet></router-outlet>`
})
export class AppComponent {
  public addValue: number = 0;

  public Add() {
    this.addValue += 1;
  }

}
