import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BubbleSortComponent } from './bubble-sort';
import { DashboardComponent } from './dashboard';

const routes: Routes = [
    { path: 'home', component: DashboardComponent },
    { path: 'bubble-sort', component: BubbleSortComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
