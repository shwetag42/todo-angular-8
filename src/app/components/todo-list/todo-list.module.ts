import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoService } from '../../services/todo.service';
import { MatTableModule } from '@angular/material/table';
import { TodoListComponent } from './todo-list.component';
import { MatFormFieldModule, MatInputModule,MatSortModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  imports: [
    CommonModule,
    TodoListRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule


  ],
  declarations: [TodoListComponent],
  providers: [
  ]
})
export class TodoListModule { }
