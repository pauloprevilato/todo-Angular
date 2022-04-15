import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-read-all',
  templateUrl: './read-all.component.html',
  styleUrls: ['./read-all.component.css']
})
export class ReadAllComponent implements OnInit {

  list: Todo [] = [
    {
      titulo: "Aula de Spring",
      dataParaFinalizar: new Date,
      finalizado: false
    },
    {
      titulo: "Aula de Angular",
      dataParaFinalizar: new Date,
      finalizado: false
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
