import { TodoService } from './../../service/todo.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-read-all',
  templateUrl: './read-all.component.html',
  styleUrls: ['./read-all.component.css']
})
export class ReadAllComponent implements OnInit {
  
  closed = 0;

  list: Todo [] = []

  constructor(private service: TodoService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      this.list = resposta;
      this.countClosed();
    })
  }

  countClosed(): void {
    for(let todo of this.list) {
      if(todo.finalizado) {
        this.closed++;
      }
    }
  }

  delete(id : any):void {
    this.service.delete(id).subscribe((resposta) => {
      if(resposta === null) {
        this.service.message('Task Delete');
        this.list = this.list.filter(todo => todo.id !== id);
      }
    })
  }
}
