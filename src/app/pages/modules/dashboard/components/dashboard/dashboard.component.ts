import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UploadEvent } from 'src/app/interfaces/uploadEvent.interface';
import { NgxSpinnerService } from 'ngx-spinner';
import { CreateFileinvoiceRequest } from 'src/app/interfaces/request/createFileInvoiceRequest.interface';
import { FileService } from '../../services/file.service';
import { ZoneService } from '../../services/zone.service';
import { ZoneElement } from 'src/app/interfaces/responses/zoneResponse.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  uploadedFiles: any[] = [];
  selectedZone: number;
  zones: ZoneElement[];

  constructor(
    private messageService: MessageService,
    private spinner: NgxSpinnerService,
    private fileService: FileService,
    private zonesService: ZoneService
  ) { }

  ngOnInit(): void {
    this.getZones(); // Fetch zones on component initialization
  }

  // Method to handle file upload
  onUpload(event: UploadEvent) {
    this.spinner.show();
    const file: File = event.files[0]; // Get the first file from the event
    this.uploadedFiles.push(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const fileName = file.name;
      const base64Data = reader.result.toString().split(';base64,')[1];
      const fileExtension = fileName.substring(fileName.lastIndexOf('.xl')).toLowerCase();
      const createFileInvoiceRequest: CreateFileinvoiceRequest = {
        idZone: this.selectedZone,
        fileBase64: base64Data,
        dateInvoice: new Date().toISOString(), // Use Date object instead of Date.now()
        fileExtension: fileExtension,
        fileName: fileName
      };
      this.sendFile(createFileInvoiceRequest);
    };
  }

  // Method to send file data to the server
  sendFile(createFileInvoiceRequest: CreateFileinvoiceRequest) {
    this.fileService.createFileInvoice(createFileInvoiceRequest).subscribe(
      (response) => {
        if (!response.isError) {
          this.messageService.add({ severity: 'success', summary: 'Archivo procesado correctamente' });
          this.resetForm();
          setTimeout(() => {
            location.reload();
          }, 1500)
        } else {
          this.messageService.add({ severity: 'error', summary: response.message });
          this.resetForm();
        }
      },
      (error) => {
        this.messageService.add({ severity: 'error', summary: 'Ups... ocurrio un error inesperado, intenta nuevamente' });
        this.resetForm();
      }
    );
  }

  // Method to handle zone selection
  onZoneInput(event: any) {
    this.selectedZone = event.value;
  }

  // Method to fetch zones from the server
  getZones() {
    this.zonesService.getZones().subscribe(
      (response) => {
        if (!response.error.isError) {
          this.zones = response.zones;
        }
      }
    );
  }

  // Method to reset form fields after file upload
  private resetForm() {
    delete this.uploadedFiles;
    this.spinner.hide();
  }
}
