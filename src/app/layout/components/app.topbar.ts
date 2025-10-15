import {Component, ElementRef, inject, ViewChild} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {StyleClassModule} from 'primeng/styleclass';
import {LayoutService} from '@/layout/service/layout.service';
import {InputText} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {IconField} from 'primeng/iconfield';
import {InputIcon} from 'primeng/inputicon';
import {FormsModule} from '@angular/forms';
import {AppSidebar} from './app.sidebar';

@Component({
    selector: '[app-topbar]',
    standalone: true,
    imports: [RouterModule, CommonModule, StyleClassModule, FormsModule, AppSidebar, InputText, ButtonModule, IconField, InputIcon],
    template: `
        <div class="topbar-start">
            <button pButton #menubutton type="button" class="topbar-menubutton p-trigger duration-300" (click)="onMenuButtonClick()">
                <i class="pi pi-bars"></i>
            </button>
        </div>
        <div class="layout-topbar-menu-section">
            <div app-sidebar></div>
        </div>
        <div class="topbar-end">
            <ul class="topbar-menu">
                <li [class]="layoutService.isHorizontal() ? 'topbar-search hidden' : 'topbar-search hidden sm:block'">
                    <p-iconfield>
                        <p-inputicon class="pi pi-search" />
                        <input pInputText type="text" placeholder="Search" class="w-48 sm:w-full" />
                    </p-iconfield>
                </li>
                <li [class]="layoutService.isHorizontal() ? 'block topbar-item' : 'block sm:!hidden topbar-item'">
                    <a pStyleClass="@next" enterFromClass="!hidden" enterActiveClass="animate-scalein" leaveToClass="!hidden" leaveActiveClass="animate-fadeout" [hideOnOutsideClick]="true">
                        <p-button type="button" icon="pi pi-search" text severity="secondary"></p-button>
                    </a>
                    <ul class="!hidden topbar-menu active-topbar-menu !p-4 w-60 z-5">
                        <p-iconfield class="w-full">
                            <p-inputicon class="pi pi-search" />
                            <input pInputText type="text" placeholder="Search" class="w-full" />
                        </p-iconfield>
                    </ul>
                </li>
                <li class="topbar-item">
                    <a pStyleClass="@next" enterFromClass="!hidden" enterActiveClass="animate-scalein" leaveToClass="!hidden" leaveActiveClass="animate-fadeout" [hideOnOutsideClick]="true" class="cursor-pointer">
                        <img class="rounded-xl w-8 h-8" src="/images/avatar-m-1.jpg" alt="Profile" />
                    </a>
                    <ul [class]="'topbar-menu active-topbar-menu !p-6 w-60 z-50 !hidden'">
                        <li role="menuitem" class="!m-0 !mb-4">
                            <a
                                (click)="onTopbarItemClick()"
                                class="cursor-pointer flex items-center hover:text-primary-500 duration-200"
                                pStyleClass="@grandparent"
                                enterFromClass="!hidden"
                                enterActiveClass="animate-scalein"
                                leaveToClass="!hidden"
                                leaveActiveClass="animate-fadeout"
                                [hideOnOutsideClick]="true"
                            >
                                <i class="pi pi-fw pi-lock mr-2"></i>
                                <span>Privacy</span>
                            </a>
                        </li>
                        <li role="menuitem" class="!m-0 !mb-4">
                            <a
                                (click)="onTopbarItemClick()"
                                class="cursor-pointer flex items-center hover:text-primary-500 duration-200"
                                pStyleClass="@grandparent"
                                enterFromClass="!hidden"
                                enterActiveClass="animate-scalein"
                                leaveToClass="!hidden"
                                leaveActiveClass="animate-fadeout"
                                [hideOnOutsideClick]="true"
                            >
                                <i class="pi pi-fw pi-cog mr-2"></i>
                                <span>Settings</span>
                            </a>
                        </li>
                        <li role="menuitem" class="!m-0">
                            <a
                                (click)="onTopbarItemClick()"
                                class="cursor-pointer flex items-center hover:text-primary-500 duration-200"
                                pStyleClass="@grandparent"
                                enterFromClass="!hidden"
                                enterActiveClass="animate-scalein"
                                leaveToClass="!hidden"
                                leaveActiveClass="animate-fadeout"
                                [hideOnOutsideClick]="true"
                            >
                                <i class="pi pi-fw pi-sign-out mr-2"></i>
                                <span>Logout</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <button pButton type="button" icon="pi pi-cog" class="flex-shrink-0 !rounded-xl !w-8 !h-8" (click)="onConfigButtonClick()"></button>
                </li>
                <li>
                    <button pButton type="button" icon="pi pi-arrow-left" class="flex-shrink-0" text severity="secondary" (click)="onRightMenuButtonClick()"></button>
                </li>
            </ul>
        </div>
    `,
    host: {
        class: 'layout-topbar'
    }
})
export class AppTopbar {
    layoutService = inject(LayoutService);

    el = inject(ElementRef);

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild(AppSidebar) appSidebar!: AppSidebar;


    onMenuButtonClick() {
        this.layoutService.onMenuToggle();
    }

    onConfigButtonClick() {
        this.layoutService.toggleConfigSidebar();
    }

    onRightMenuButtonClick() {
        this.layoutService.showRightMenu();
    }

    onTopbarItemClick() {
        document.body.click();
    }
}
