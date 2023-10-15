import { Route } from '@angular/router';
import { BaseComponent } from './components/base/base.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const appRoutes: Route[] = [
    {
        path: '',
        component: BaseComponent,
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
