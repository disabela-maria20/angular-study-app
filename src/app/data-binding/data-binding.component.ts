import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  public nome: string = 'Isabela'
  public idade: number = 23
  public name: string = '';
  public checkedDisabled: boolean = false
  public imgSrc: string = 'https://fakeimg.pl/350x200/000/fff'

  public position: { x: number, y: number } = { x: 0, y: 0 }

  constructor() { }

  ngOnInit(): void {
  }

  public AlertInfo(valor: MouseEvent): void {
    console.log(valor)
  }

  public mouseMoveTeste(valor: MouseEvent): void {
    this.position.x = valor.offsetX
    this.position.y = valor.offsetY
  }
}
