import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms'
import {AppComponent} from './app.component';
import {SearchFormComponent} from './search-form/search-form.component';
import {DashboardComponent} from './dashboard/dashboard.component';

@NgModule({
    declarations: [
        AppComponent,
        SearchFormComponent,
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
