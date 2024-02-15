import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeRoutingModule } from './home-routing.module';
import { PanelModule } from 'primeng/panel';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListFilesComponent } from './components/listFiles/listFiles.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    PanelModule,
    FileUploadModule,
    ToastModule,
    DropdownModule,
    ReactiveFormsModule,
    FormsModule,
    TableModule,
    InputTextModule
  ],
  declarations: [
    DashboardComponent,
    ListFilesComponent
  ]
})
export class HomeModule { }
