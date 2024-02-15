import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {
  items: MenuItem[] | undefined;
  
  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: 'home/dashboard'
      }
    ];
  }

  signOut() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
