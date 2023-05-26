import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.scss']
})
export class DiretivasComponent implements OnInit {
  public condition: boolean = true;
  public conditionClick: boolean = true;
  public list: Array<{ nome: string, idade: number }> = [
    { nome: 'Isabela', idade: 23 },
    { nome: 'Chato', idade: 22 }
  ]

  public nome: string = 'Isabela'

  public valor: boolean = false
  public heightPx: string = '20px'

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      if (this.condition || this.valor) {
        this.condition = false
        this.valor = false
      } else {
        this.condition = true
        this.valor = true
      }

      if (this.heightPx == '20px') {
        this.heightPx = '50px'
      } else {
        this.heightPx = '20px'
      }

    }, 1000)
  }

  public onClick(): void {
    if (this.conditionClick) {
      this.conditionClick = false
    } else {
      this.conditionClick = true
    }
  }

  public onClickAddList(): void {
    this.list.push({ nome: 'maria', idade: 50 })
  }

  public onClickEventList(i: number): void {
    this.list.splice(i, 1)
  }

}
