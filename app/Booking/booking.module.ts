import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BookingHomeComponent } from './Component/bookinghome.component';

@NgModule({
    imports: [ 
        RouterModule.forChild([
            { path: 'booking', component: BookingHomeComponent }
        ])
    ],
    declarations: [ BookingHomeComponent ]
})

export class BookingModule {

}