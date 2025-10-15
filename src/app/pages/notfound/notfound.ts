import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { AppConfigurator } from '@/layout/components/app.configurator';

@Component({
    selector: 'app-notfound',
    standalone: true,
    imports: [RouterModule, ButtonModule, AppConfigurator],
    template: ` <app-configurator [simple]="true" />
        <div class="bg-surface-50 dark:bg-surface-950 h-screen w-screen flex items-center justify-center">
            <div class="bg-surface-0 dark:bg-surface-900 py-16 px-8 sm:px-16 shadow flex flex-col w-11/12 sm:w-[30rem]" style="border-radius: 14px">
                <h1 class="font-bold text-2xl mt-0 mb-2">NOT FOUND</h1>
                <p class="text-muted-color mb-6">Looks like you are lost. You may try these or go back to <a [routerLink]="['/']" class="font-bold text-primary hover:underline" style="cursor: pointer">dashboard</a>.</p>

                <ul class="list-none p-0 m-0">
                    <li>
                        <a [routerLink]="['/help']" class="flex items-center py-2 px-4 hover:bg-emphasis transition-colors duration-150" style="cursor: pointer">
                            <span class="inline-flex items-center justify-center shrink-0 rounded-border bg-yellow-500 text-white w-12 h-12">
                                <i class="pi pi-compass text-2xl"></i>
                            </span>
                            <span class="ml-4">
                                <span class="mb-2 font-bold text-color">Help Center</span>
                                <p class="m-0 text-muted-color">Access knowledge base</p>
                            </span>
                            <i class="ml-auto pi pi-chevron-right text-color"></i>
                        </a>
                    </li>
                    <li>
                        <a [routerLink]="['/help']" class="flex items-center py-2 px-4 hover:bg-emphasis transition-colors duration-150" style="cursor: pointer">
                            <span class="inline-flex items-center justify-center shrink-0 rounded-border bg-teal-500 text-white w-12 h-12">
                                <i class="pi pi-user text-2xl"></i>
                            </span>
                            <span class="ml-4">
                                <span class="mb-2 font-bold text-color">Customer Services</span>
                                <p class="m-0 text-muted-color">Get instant answers</p>
                            </span>
                            <i class="ml-auto pi pi-chevron-right text-color"></i>
                        </a>
                    </li>
                </ul>

                <p-button [routerLink]="['/']" label="Go to Dashboard" class="mt-6"></p-button>
            </div>
        </div>`
})
export class Notfound {}
