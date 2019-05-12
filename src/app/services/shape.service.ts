import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ShapeService {

    apiEndpoint = 'http://surbot.kz/shapes/current/';

    constructor(private http: HttpClient) {
    }

    setCurrent = (num: number) =>  {
        return this.http.get(this.apiEndpoint + num);
    }
}
