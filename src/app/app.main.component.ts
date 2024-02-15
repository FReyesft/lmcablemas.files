import { Component } from '@angular/core';
import { AppComponent } from './app.component';

@Component({
    selector: 'app-main',
    templateUrl: './app.main.component.html'
})
export class AppMainComponent {
    overlayMenuActive: boolean;

    staticMenuDesktopInactive = false;

    staticMenuMobileActive: boolean;

    sidebarActive = false;

    sidebarStatic = false;

    menuClick: boolean;

    menuHoverActive = false;

    topbarMenuActive: boolean;

    topbarItemClick: boolean;

    activeTopbarItem: any;

    configActive: boolean;

    configClick: boolean;

    rightMenuActive: boolean;

    rightMenuClick: boolean;

    searchActive: boolean;

    searchClick: boolean;

    activeInlineProfile: boolean;

    pinActive: boolean;

    constructor( public app: AppComponent) { }
    onLayoutClick() {
        if (!this.topbarItemClick) {
            this.activeTopbarItem = null;
            this.topbarMenuActive = false;
        }

        if (this.configActive && !this.configClick) {
            this.configActive = false;
        }

        if (this.rightMenuActive && !this.rightMenuClick) {
            this.rightMenuActive = false;
        }

        if (this.searchActive && !this.searchClick) {
            this.searchActive = false;
        }


    }
}

