import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './Component/login.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: "security", component: LoginComponent }
        ])
    ]
})

export class SecurityModule {

}

