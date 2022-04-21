import { Todo } from "src/app/models/todo";
import { TodoService } from "./../../service/todo.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-update",
  templateUrl: "./update.component.html",
  styleUrls: ["./update.component.css"],
})
export class UpdateComponent implements OnInit {
  todo: Todo = {
    titulo: "",
    descricao: "",
    dataParaFinalizar: Date,
    finalizado: false,
  };
  constructor(private router: Router, private service: TodoService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.todo.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.todo.id).subscribe((resposta) => {
      this.todo = resposta;
    })
  }

  update(): void {
    this.service.update(this.todo).subscribe((resposta) => {
      this.service.message('Update Success!')
      this.router.navigate([''])
    }, error => {
      this.service.message('Update Fail!')
      this.router.navigate([''])
    })
  }
  cancel(): void {
    this.router.navigate([""]);
  }

  formataDate(): void {
    let data = new Date(this.todo.dataParaFinalizar);
    this.todo.dataParaFinalizar = `${data.getDate()}/${
      data.getMonth() + 1
    }/${data.getFullYear()}`;
    console.log(data);
  }
}
