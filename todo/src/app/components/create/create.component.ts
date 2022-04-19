import { Todo } from 'src/app/models/todo';
import { TodoService } from './../../service/todo.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  todo: Todo = {
    titulo: '',
    descricao: '',
    dataParaFinalizar: new Date(),
    finalizado: false
  }
  constructor(private router: Router, private service: TodoService) { }

  ngOnInit(): void {
  }

  create(): void {
    this.formataDate();
    this.service.create(this.todo).subscribe((resposta) => {
      this.service.message(this.todo.titulo +' Create Success!' );
      this.router.navigate(['']);
    }, err => {
        this.service.message('To-do Create Fail!');
        this.router.navigate(['']);
    })
  }

  cancel(): void {
    this.router.navigate([''])
  }

    formataDate(): void {
      let data = new Date(this.todo.dataParaFinalizar)
      this.todo.dataParaFinalizar = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
      console.log(data);
    }
}
