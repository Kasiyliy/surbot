import {Component} from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../shared/models/user';

@Component({
    selector: 'app-tab3',
    templateUrl: 'tab3.page.html',
    styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


    user: User;

    constructor(private userService: UserService) {
        this.userService.currentUser().subscribe(perf => {
            this.user = perf.success;
        });
    }


}
