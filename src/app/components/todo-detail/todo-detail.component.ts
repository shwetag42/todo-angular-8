import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../model/todo';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {

  public todoId: string;
  public todoDetail = <Todo>{};
  public mode: string;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private todoService: TodoService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.todoId = params['id'];
      if (this.todoId !== undefined) {
        console.log(this.todoId);
        this.getTodoDetailById(this.todoId);
        this.mode = 'Edit';
      } else {
        this.todoId = null;
        this.todoDetail['id'] = 0;
        this.mode = 'Add';
      }
    });
  }

  getTodoDetailById(id) {
    this.todoDetail = this.todoService.getTodoById(id);
  }

  onTodoSubmitForm(form) {
    console.log(form);
    if (form.valid) {
      let todoarray = this.todoService.getTodoarray();
      let index = todoarray.findIndex(i => i.id == this.todoDetail.id)
      if (index == -1) {
        this.todoService.createTodo(this.todoDetail).subscribe(
          resp => {
            console.log('retruned Post object');
            console.log(resp);
          },
          (err: HttpErrorResponse) => {
            console.log(err.error);
          }
        )
      } else {
        this.todoService.UpdateTodo(this.todoDetail.title).subscribe(
          resp => {
            console.log('retruned Put object');
            console.log(resp);
          },
          (err: HttpErrorResponse) => {
            console.log(err.error);
          }
        )
      }
    }
  }
  onClickCancel() {
    this.router.navigate(['/todo-list']);
  }

}
