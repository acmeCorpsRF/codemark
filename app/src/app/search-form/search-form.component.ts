import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Group} from '../app.component'

@Component({
    selector: 'app-search-form',
    templateUrl: './search-form.component.html',
    styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

    @Input() nameGroup: string;
    @Input() isGrouped: boolean;
    @Input() isEmptyTagField: boolean;
    @Input() isLoadedImage: boolean;
    @Input() groups: Group;
    @Output() sendSearchName = new EventEmitter<object>();
    @Output() resetStorage = new EventEmitter<any>();
    @Output() toggleGroupState = new EventEmitter<any>();
    @Output() resetGroupState = new EventEmitter<any>();

    constructor() {
    }

    ngOnInit(): void {
    }

    onLoad(value: string) {
        if (value.length) {
            this.isLoadedImage = true;
            fetch(`https://api.giphy.com/v1/gifs/random?api_key=gTJAO48YcpmrADUyo4opy4ES4g7iDBxx&tag=${value}`)
                .then(response => response.json())
                .then(response => {
                    if (response.meta.status === 200) {
                        if (response.data.image_original_url) {
                            response.nameGroup = value;
                            this.sendSearchName.emit(response);
                        } else {
                            alert(`По тегу ничего не найдено!`);
                        }
                    } else {
                        alert(`По тегу ничего не найдено (${response.meta.msg})`);
                    }
                    this.isLoadedImage = false;
                })
                .catch(error => {
                    this.isLoadedImage = false;
                    alert(`Произошла http ошибкa (${error})`)
                });
        } else {
            this.isEmptyTagField = true;
        }

    }

    onReset() {
        this.nameGroup = '';
        this.resetStorage.emit();
        this.resetGroupState.emit();
    }

    onToggleGroup() {
        if (this.groups.length) {
            this.toggleGroupState.emit();
        }
    }

    onFocus() {
        this.isEmptyTagField = false;
    }
}
