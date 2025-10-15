import {Component, computed, inject} from '@angular/core';
import {LayoutService} from '@/layout/service/layout.service';
import {DrawerModule} from 'primeng/drawer';
import {ButtonModule} from 'primeng/button';
import {CommonModule} from '@angular/common';

@Component({
    selector: '[app-right-menu]',
    standalone: true,
    imports: [CommonModule, DrawerModule, ButtonModule],
    template: `
        <p-drawer [visible]="menuActive()" (onHide)="hideMenu()" position="right" styleClass="layout-profile-sidebar w-full sm:!w-[25rem]">
            <div class="p-0 py-3 weather-section">
                <div class="flex items-center justify-between mb-4">
                    <h6 class="m-0 text-md font-bold">Today</h6>
                </div>
                <div
                    class="weather flex items-center py-4 px-6 bg-center bg-no-repeat bg-cover rounded-lg"
                    style="box-shadow: 0px 10px 40 rgba(#293241, 6%); background-image: url('/demo/images/rightpanel/asset-weather.png')"
                >
                    <img src="/demo/images/rightpanel/icon-sun.svg" alt="freya-layout" style="height: 60px" />
                    <div class="ml-4">
                        <h6 class="m-0 mb-1 text-md font-bold" style="color: rgb(83 88 99)">Ankara, 22 May</h6>
                        <h1 class="m-0 text-4xl font-bold" style="color: rgb(83 88 99)">24º</h1>
                    </div>
                </div>
            </div>

            <div class="rightpanel-section mt-6">
                <div class="flex items-center justify-between mb-4">
                    <h6 class="m-0 text-md font-bold">My list</h6>
                    <p-button type="button" icon="pi pi-plus" severity="secondary" text rounded></p-button>
                </div>
                <ul class="list-none p-0 m-0 overflow-auto" style="max-height: 340px">
                    <li class="p-4 rounded-lg bg-surface-0 dark:bg-surface-900 mb-4 flex items-center justify-between">
                        <div>
                            <h6 class="m-0 mb-2 text-md font-bold text-surface-700 dark:text-surface-0">Perform usability testing for P15 MVP</h6>
                            <span class="text-surface-400 dark:text-surface-400 leading-normal block font-medium">-Public pages</span>
                            <span class="text-surface-400 dark:text-surface-400 leading-normal block font-medium">-Product pages</span>
                        </div>
                    </li>
                    <li class="p-4 rounded-lg bg-surface-0 dark:bg-surface-900 mb-4 flex items-center justify-between">
                        <div>
                            <h6 class="m-0 mb-2 text-md font-bold text-surface-700 dark:text-surface-0">Buy puzzle set from Amazon</h6>
                            <span class="text-surface-400 dark:text-surface-400 leading-normal block font-medium">Ravensburger Seurat, 2000</span>
                        </div>
                    </li>
                    <li class="opacity-50 p-4 rounded-lg bg-surface-0 dark:bg-surface-900 mb-4 flex items-center justify-between">
                        <div>
                            <h6 class="m-0 mb-2 text-md font-bold text-surface-700 dark:text-surface-0 line-through">Morning Run</h6>
                        </div>
                        <i class="pi pi-check"></i>
                    </li>
                    <li class="opacity-50 p-4 rounded-lg bg-surface-0 dark:bg-surface-900 mb-4 flex items-center justify-between">
                        <div>
                            <h6 class="m-0 mb-2 text-md font-bold text-surface-700 dark:text-surface-0 line-through">Morning Run</h6>
                        </div>
                        <i class="pi pi-check"></i>
                    </li>
                </ul>
            </div>

            <div class="p-0 favorites-section mt-6">
                <div class="flex items-center justify-between mb-4">
                    <h6 class="m-0 text-md font-bold">Favorites</h6>
                </div>
                <div class="favorite-items flex items-center flex-wrap" style="margin: -7px">
                    <a
                        href="#"
                        class="favorite-item hover:bg-surface-50 dark:hover:bg-surface-800 bg-surface-0 dark:bg-surface-900 flex items-center justify-center rounded-xl m-2 transition-all duration-200"
                        style="
                        width: 80px;
                        height: 80px;
                        box-shadow:
                            0px 0px 2px rgba(41, 50, 65, 0.3),
                            0px 1px 2px rgba(41, 50, 65, 0.2);
                        background-color: rgba(41, 127, 255, 0.03);
                    "
                    >
                        <img src="/demo/images/rightpanel/github.svg" alt="freya-layout" />
                    </a>
                    <a
                        href="#"
                        class="favorite-item hover:bg-surface-50 dark:hover:bg-surface-800 bg-surface-0 dark:bg-surface-900 flex items-center justify-center rounded-xl m-2 transition-all duration-200"
                        style="
                        width: 80px;
                        height: 80px;
                        box-shadow:
                            0px 0px 2px rgba(41, 50, 65, 0.3),
                            0px 1px 2px rgba(41, 50, 65, 0.2);
                        background-color: rgba(41, 127, 255, 0.03);
                    "
                    >
                        <img src="/demo/images/rightpanel/slack.svg" alt="freya-layout" />
                    </a>
                    <a
                        href="#"
                        class="favorite-item hover:bg-surface-50 dark:hover:bg-surface-800 bg-surface-0 dark:bg-surface-900 flex items-center justify-center rounded-xl m-2 transition-all duration-200"
                        style="
                        width: 80px;
                        height: 80px;
                        box-shadow:
                            0px 0px 2px rgba(41, 50, 65, 0.3),
                            0px 1px 2px rgba(41, 50, 65, 0.2);
                        background-color: rgba(41, 127, 255, 0.03);
                    "
                    >
                        <img src="/demo/images/rightpanel/aws.svg" alt="freya-layout" />
                    </a>
                    <a
                        href="#"
                        class="favorite-item hover:bg-surface-50 dark:hover:bg-surface-800 bg-surface-0 dark:bg-surface-900 flex items-center justify-center rounded-xl m-2 transition-all duration-200"
                        style="
                        width: 80px;
                        height: 80px;
                        box-shadow:
                            0px 0px 2px rgba(41, 50, 65, 0.3),
                            0px 1px 2px rgba(41, 50, 65, 0.2);
                        background-color: rgba(41, 127, 255, 0.03);
                    "
                    >
                        <img src="/demo/images/rightpanel/jenkins.svg" alt="freya-layout" />
                    </a>
                    <a
                        href="#"
                        class="favorite-item hover:bg-surface-50 dark:hover:bg-surface-800 bg-surface-0 dark:bg-surface-900 flex items-center justify-center rounded-xl m-2 transition-all duration-200"
                        style="
                        width: 80px;
                        height: 80px;
                        box-shadow:
                            0px 0px 2px rgba(41, 50, 65, 0.3),
                            0px 1px 2px rgba(41, 50, 65, 0.2);
                        background-color: rgba(41, 127, 255, 0.03);
                    "
                    >
                        <img src="/demo/images/rightpanel/jira.svg" alt="freya-layout" />
                    </a>
                    <a
                        href="#"
                        class="favorite-item hover:bg-surface-50 dark:hover:bg-surface-800 bg-surface-0 dark:bg-surface-900 flex items-center justify-center rounded-xl m-2 transition-all duration-200 border border-dashed border-surface-200 dark:border-surface-700"
                        style="width: 80px; height: 80px; background-color: rgba(41, 127, 255, 0.03)"
                    >
                        <i class="pi pi-plus"></i>
                    </a>
                </div>
            </div>

            <div class="p-0 py-3 chat-section chat"></div>
        </p-drawer>
    `
})
export class AppRightMenu {
    layoutService = inject(LayoutService);

    menuActive = computed(() => this.layoutService.layoutState().rightMenuActive);

    hideMenu() {
        this.layoutService.hideRightMenu();
    }
}
