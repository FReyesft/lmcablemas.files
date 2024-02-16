import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { Router } from '@angular/router';
import { FileService } from '../../services/file.service';
import { MessageService } from 'primeng/api';
import { PaginatorFile } from 'src/app/interfaces/request/fileListRequest.interface';
import { Paginator } from 'src/app/interfaces/paginator.interface';
import { FileInvoice } from 'src/app/interfaces/responses/fileListResponse.interface';
@Component({
  selector: 'app-listFiles',
  templateUrl: './listFiles.component.html',
  styleUrls: ['./listFiles.component.scss']
})
export class ListFilesComponent implements OnInit {
  @ViewChild('dt') table: Table;
  isLoading: boolean = false;
  paginator: Paginator;
  fileInvoices: FileInvoice[] = [];
  constructor(
    private router: Router,
    private fileService: FileService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getListFileInvoice({ page: 1, size: 11 });
  }

  goToDetail(id: string) {
    this.router.navigate([`home/${id}`]);
  }

  getListFileInvoice(paginatorFile: PaginatorFile) {
    this.isLoading = true;
    this.fileService.getListFiles(paginatorFile).subscribe((response) => {
      if (!response.error.isError) {
        this.paginator = response.paginator;
        this.fileInvoices = response.fileInvoices;
        this.isLoading = false;
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: response.error.message });
        this.isLoading = false;
      }
    }, (error) => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al obtener los archivos' });
      this.isLoading = false;
    });
  }

  paginate(event) {
    console.log(event)
    let paginatorFile: PaginatorFile = {
      page: event.page + 1,
      size: event.rows
    }
    this.getListFileInvoice(paginatorFile);
  }
}
