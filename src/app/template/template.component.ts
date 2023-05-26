import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  public list: Array<{ id: number, name: string, last_name: string }> = [
    { id: 1, name: "Tony", last_name: "Delafont" },
    { id: 2, name: "Heddi", last_name: "Jouannot" },
    { id: 3, name: "Salomone", last_name: "Mingaud" },
    { id: 4, name: "Cindi", last_name: "Crehan" },
    { id: 5, name: "Claudine", last_name: "Tack" },
    { id: 6, name: "Colby", last_name: "East" },
    { id: 7, name: "Stanley", last_name: "Beevor" },
    { id: 8, name: "Shelagh", last_name: "Oldacre" },
    { id: 9, name: "Bearnard", last_name: "Gally" },
    { id: 10, name: "Sherline", last_name: "Baudassi" }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
