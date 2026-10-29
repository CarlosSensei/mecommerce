import { Routes } from '@angular/router';
import { MainLayoutComponent } from '../shared/layouts/main-layout/main-layout';

export const routes: Routes = [

    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                loadComponent: () =>
                import('../features/home/pages/home')
                    .then(m => m.HomeComponent)
            }
        ]
    }

];
