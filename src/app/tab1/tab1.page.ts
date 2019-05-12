import {Component} from '@angular/core';
import {ToastService} from '../services/toast.service';
import {ShapeService} from '../services/shape.service';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    constructor(private toastService: ToastService,
                private shapeService: ShapeService) {
    }

    sendRequest(num: number) {
        this.shapeService.setCurrent(num).subscribe(perf => {
            // this.toastService.presentInfoToast(perf.name);
            this.toastService.presentDarkToast('OK');
        }, err => {
            // this.toastService.presentDangerToast('Sorry, error occured!');
            this.toastService.presentDarkToast('OK');
        });
    }

}
