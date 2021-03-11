import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import * as actions from '../todo.actions';
@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  txtInput: FormControl; 

  constructor(private _store: Store<AppState>) {
    this.txtInput = new FormControl('', Validators.required);
  }

  ngOnInit(): void {
  }

  agregarTodo() {
    if(this.txtInput.valid) {
      this._store.dispatch(actions.crear({texto: this.txtInput.value}));
    } else return;

    this.txtInput.reset();
  }

}
