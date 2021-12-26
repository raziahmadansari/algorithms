import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BubbleSortComponent } from './bubble-sort';
import { DashboardComponent } from './dashboard';
import { InsertionSortComponent } from './insertion-sort';
import { QuickSortComponent } from './quick-sort';
import { SelectionSortComponent } from './selection-sort';

const routes: Routes = [
    { path: 'home', component: DashboardComponent },
    { path: 'bubble-sort', component: BubbleSortComponent },
    { path: 'selection-sort', component: SelectionSortComponent },
    { path: 'insertion-sort', component: InsertionSortComponent },
    { path: 'quick-sort', component: QuickSortComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
