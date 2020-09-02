import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Image, Group} from '../app.component'

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    @Input() images: Image;
    @Input() groups: Group;
    @Input() isGroup: boolean;
    @Output() sendTagName = new EventEmitter<string>();

    constructor() {
    }

    ngOnInit(): void {
    }

    onCheck(tagName: string) {
        this.sendTagName.emit(tagName);
    }

}
