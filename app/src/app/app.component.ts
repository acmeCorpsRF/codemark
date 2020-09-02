import {Component} from '@angular/core';


export interface Image {
    url: string,
    group: string
}

interface Response {
    data: { image_original_url: string },
    nameGroup: string
}

export type Group = string;


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public nameGroup: string= '';
    public images: Image[] = [];
    public groups: Group[] = [];
    public isGroup: boolean = false;
    public isEmptyTagField: boolean = false;
    public isLoadedImage: boolean = false;

    setSearchName(response: Response) {
        this.images.push({url: response.data.image_original_url, group: response.nameGroup});
        this.groups.push(response.nameGroup);
    }

    clearStorage() {
        this.images = [];
        this.groups = [];
    }

    setTagName(value: string) {
        this.nameGroup = value;
    }

    toggleGroup() {
        this.isGroup ? this.isGroup = false : this.isGroup = true;
    }

    resetGroup() {
        this.isGroup = false;
    }
}
