import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../shared/models/user';
import {Todo} from '../shared/models/todo';
import {TodoService} from '../services/todo.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-tab3',
    templateUrl: 'tab3.page.html',
    styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

    public now: Date = new Date();
    user: User;
    todos: Todo[] = [];

    constructor(private userService: UserService,
                private todoService: TodoService,
                private builder: FormBuilder) {

    }

    todoForm: FormGroup;
    loading = false;

    ngOnInit() {
        setInterval(() => {
                this.now = new Date();
            });

        this.todoForm = this.builder.group({
            name: [null, Validators.required],
        });
        this.loading = true;
        this.fetchAll();
    }

    add() {
        const name = this.todoForm.get('name').value;
        const todo = new Todo();
        todo.name = name;
        this.todoService.save(todo).subscribe(perf => {
            this.todos.push(perf);
            this.todoForm.reset();
        });
    }


    fetchAll = () => {
        this.userService.currentUser().subscribe(perf => {
            this.user = perf.success;
        });

        this.todoService.getAll().subscribe(perf => {
            this.todos = perf;
            this.loading = false;
        }, err => {
            this.loading = false;
        });
    };

    delete = (todo: Todo) => {
        this.loading = true;
        this.todoService.delete(todo).subscribe(perf => {
            this.todos = this.todos.filter(t => t.id !== todo.id);
            this.loading = false;
        }, err => {
            this.loading = false;
        });
    };


}
