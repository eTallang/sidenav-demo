import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StubComponent } from './stub/stub.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: StubComponent
    },
    {
        path: 'sheets',
        component: StubComponent
    },
    {
        path: 'work-assignments',
        component: StubComponent
    },
    {
        path: 'sent-assignments',
        component: StubComponent
    },
    {
        path: 'add-assignment',
        component: StubComponent
    },
    {
        path: 'personal-stuff',
        component: StubComponent
    },
    {
        path: 'some-other-stuff',
        component: StubComponent
    },
    {
        path: 'some-other-menu-item',
        component: StubComponent
    },
    {
        path: 'final-item',
        component: StubComponent
    },
    {
        path: 'favorites',
        component: StubComponent
    },
    {
        path: 'profile',
        component: StubComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
