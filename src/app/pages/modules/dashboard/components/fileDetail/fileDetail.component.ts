import { Component, OnInit } from '@angular/core';
import { FileService } from '../../services/file.service';
import { ActivatedRoute } from '@angular/router';
import { Table } from 'primeng/table';
import * as XLSX from 'xlsx';
import { NgxSpinnerService } from 'ngx-spinner';
import { FileInvoiceDetail } from 'src/app/interfaces/responses/fileInvoiceDetailResponse.interface';
@Component({
  selector: 'app-fileDetail',
  templateUrl: './fileDetail.component.html',
  styleUrls: ['./fileDetail.component.scss']
})
export class FileDetailComponent implements OnInit {
  fileInvoiceDetails: FileInvoiceDetail[] = [];
  isLoading: boolean = false;
  constructor(
    private fileService: FileService,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.route.params.subscribe((params) => {
      this.getFileDetails(params['id']);
    })
  }

  getFileDetails(id: string) {
    this.fileService.getFileDetails(id).subscribe((response) => {
      this.fileInvoiceDetails = response.fileInvoiceDetail;
      this.isLoading = false;
    });
  }

  exportFile(table: Table) {
    this.spinner.show();
    const fileName = 'fileDetail.xlsx';
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(table.el.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Tabla');
    XLSX.writeFile(wb, fileName);
    this.spinner.hide();
  }
}
