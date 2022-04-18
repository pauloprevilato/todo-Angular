import { Router } from '@angular/router';
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
  listFinished: Todo [] = [];

  constructor(private service: TodoService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      resposta.forEach((todo) => {
        if (todo.finalizado) {
          this.listFinished.push(todo);
        } else {
          this.list.push(todo);
        }
      });
      
      this.closed = this.listFinished.length;
    })
  }

  finalizar(item: Todo): void {
    item.finalizado = true;
    this.service.update(item).subscribe(() => {
      this.service.message("Task Finalizada com Sucesso!")
      this.list = this.list.filter((todo) => todo.id !== item.id)
      this.closed++;
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

  navegarParaFinalizados(): void{
    this.router.navigate(['finalizados']);
  }
}
