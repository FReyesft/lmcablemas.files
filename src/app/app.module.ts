import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// Application Components
import { AppComponent } from './app.component';

import { AppMainComponent } from './app.main.component';
import { LoginComponent } from './pages/login/login.component';
import { MenubarComponent } from './shared/menubar/menubar.component';

//* PrimeNG Modules
import { InputTextModule } from 'primeng/inputtext'
import { ButtonModule } from 'primeng/button'
import { TokenValidatorService } from './services/tokenValidator.service';
import { ToastModule } from 'primeng/toast';
import { MenubarModule } from 'primeng/menubar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import { PanelModule } from 'primeng/panel';

//* Libraries 
import { NgxSpinnerModule } from 'ngx-spinner';

//* PrimeNg Services
import { MessageService } from 'primeng/api';
import { AppBreadcrumbService } from './services/breadcrumb.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        CommonModule,
        ReactiveFormsModule,
        InputTextModule,
        ButtonModule,
        ToastModule,
        MenubarModule, 
        ProgressSpinnerModule,
        BreadcrumbModule,
        PanelModule,
        NgxSpinnerModule
    ],
    declarations: [
        AppComponent,
        AppMainComponent,
        LoginComponent,
        MenubarComponent,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenValidatorService,
            multi: true
        },
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        MessageService, AppBreadcrumbService

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
