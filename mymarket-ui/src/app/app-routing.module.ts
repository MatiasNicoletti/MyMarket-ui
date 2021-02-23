import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './presentation/views/home/home.component';
import { ProductSelectionComponent } from './presentation/views/product-selection/product-selection.component';

const routes: Routes = [
    { 
        path: '', 
        redirectTo: '/inicio', 
        pathMatch: 'full' 
    },
    {
        path: 'inicio',
        component: HomeComponent
    },
    {
        path: 'ofertas',
        component: ProductSelectionComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }