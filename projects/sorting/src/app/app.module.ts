import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarGraphComponent } from './shared';
import { BubbleSortComponent } from './bubble-sort';
import { DashboardComponent } from './dashboard';
import { SelectionSortComponent } from './selection-sort';
import { InsertionSortComponent } from './insertion-sort';
import { QuickSortComponent } from './quick-sort';

@NgModule({
    declarations: [
        AppComponent,
        BarGraphComponent,
        BubbleSortComponent,
        DashboardComponent,
        SelectionSortComponent,
        InsertionSortComponent,
        QuickSortComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
