import { NgModule } from '@angular/core';
import { Route, RouterModule, RouterOutlet } from '@angular/router';
import { FormComponent } from './form/form.component';
import { SuccessComponent } from './success/success.component';

const routes : Route[] = [

    {
        path : '',
        component : FormComponent,
    },
    {
        path: 'success',
        component : SuccessComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterOutlet],
    declarations: [],
    providers: [],
})
export class FormRoutingModule { }
