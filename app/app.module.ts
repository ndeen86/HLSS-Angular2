import { NgModule } from '@angular/core';
import  { FormsModule } from '@angular/forms';
import  { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './Security/Component/login.component';
import { BookingModule } from './Booking/booking.module';
import { SecurityModule } from './Security/security.module';

@NgModule({
        imports : [ FormsModule, BrowserModule, HttpModule,
            /** Application Module Initialization */
            BookingModule,
            SecurityModule,
            /** Route configuration for intial loading */
            RouterModule.forRoot([
                { path: 'security', component: LoginComponent },
                { path: '', redirectTo: 'security', pathMatch: 'full' },
                { path: '**', redirectTo: 'security', pathMatch: 'full' }
            ])
            ],
        declarations : [ AppComponent, LoginComponent ],
        bootstrap: [ AppComponent ]   
    })

export class AppModule
{  

}