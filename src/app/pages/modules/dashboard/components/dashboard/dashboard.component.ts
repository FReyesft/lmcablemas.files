import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UploadEvent } from 'src/app/interfaces/uploadEvent.interface';
import { NgxSpinnerService } from 'ngx-spinner';
interface Zones {
  name: string;
  code: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  uploadedFiles: any[] = [];
  selectedZone: string;
  zones: Zones[] | undefined = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];
  constructor(
    private messageService: MessageService,
    private spinner: NgxSpinnerService
    ) { }

  ngOnInit(): void {
  }

  onUpload(event: UploadEvent) {
    this.spinner.show();
    let file: File;
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
    file = this.uploadedFiles[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(reader.result)
    }
    this.spinner.hide();
    this.messageService.add({ severity: 'info', summary: 'Archivo Cargado', detail: '' });
  }

  onZoneInput(event: any) {
    this.selectedZone = event.value;
  }
}
