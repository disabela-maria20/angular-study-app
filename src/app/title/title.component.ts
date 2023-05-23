import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges {
  @Input() public title: string = 'Bem Vindo';

  constructor() { }

  // Ciclo de vida 
  ngOnInit(): void {
  }

  // Invocado quando vem um dado de fora 
  ngOnChanges(changes: SimpleChanges): void {
    //console.log(changes)
  }
}
