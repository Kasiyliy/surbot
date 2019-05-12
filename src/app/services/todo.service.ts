import {Injectable} from '@angular/core';
import {Todo} from '../shared/models/todo';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    fullUrl = environment.apiUrl + '/api/todos';

    constructor(private http: HttpClient) {
    }

    public getAll(): Observable<Todo[]> {
        return this.http.get<Todo[]>(this.fullUrl);
    }


    public save(todo: Todo) {
        return this.http.post<Todo>(this.fullUrl, todo);
    }

    public delete(todo: Todo) {
        return this.http.post(this.fullUrl + `/${todo.id}`, {});
    }

}
