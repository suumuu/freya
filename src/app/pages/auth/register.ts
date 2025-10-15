import {Component} from '@angular/core';
import {IconField} from 'primeng/iconfield';
import {InputIcon} from 'primeng/inputicon';
import {Password} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {InputText} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import {AppConfigurator} from "@/layout/components/app.configurator";

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [IconField, InputIcon, Password, ButtonModule, RouterModule, FormsModule, InputText, CheckboxModule, AppConfigurator],
    template: `
        <div class="bg-surface-0 dark:bg-surface-900">
            <div class="flex items-center justify-between flex-col h-screen">
                <div class="flex flex-col items-center justify-center w-full md:w-4/12 h-full text-center py-12 px-6">
                    <a [routerLink]="['/']" class="mb-12" style="cursor: pointer">
                        <svg height="56" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0H6.00019V3.82345L17 1.66667V6.66667L6.00019 8.82345V10.4901L17 8.33333V13.3333L6.00019 15.4901V20H0V0Z" fill="url(#paint0_linear)" />
                            <defs>
                                <linearGradient id="paint0_linear" x1="3.33335" y1="3.08442e-08" x2="8.49995" y2="20" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="var(--p-primary-400)" />
                                    <stop offset="1" stop-color="var(--p-primary-700)" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </a>
                    <div class="mb-6">
                        <div class="text-surface-900 dark:text-surface-0 text-xl font-bold mb-2">Register</div>
                        <span class="text-surface-600 dark:text-surface-200 font-medium">Let's get started</span>
                    </div>
                    <div class="flex flex-col">
                        <p-icon-field class="w-full mb-6">
                            <p-inputicon class="pi pi-user" />
                            <input pInputText type="text" placeholder="Username" class="w-full md:w-[25rem] text-surface-500 dark:text-surface-400 bg-surface-50 dark:bg-surface-800 border-surface-200 dark:border-surface-600" />
                        </p-icon-field>

                        <p-icon-field class="w-full mb-6">
                            <p-inputicon class="pi pi-envelope" />
                            <input pInputText type="text" placeholder="Email" class="w-full md:w-[25rem] text-surface-500 dark:text-surface-400 bg-surface-50 dark:bg-surface-800 border-surface-200 dark:border-surface-600" />
                        </p-icon-field>

                        <p-icon-field class="w-full mb-6">
                            <p-inputicon class="pi pi-key z-20" />
                            <p-password
                                id="password"
                                placeholder="Password"
                                styleClass="w-full md:w-[25rem] border-surface-200 dark:border-surface-600"
                                [(ngModel)]="value"
                                [inputStyle]="{ paddingLeft: '2.5rem' }"
                                inputStyleClass="w-full text-surface-500 dark:text-surface-400 bg-surface-50 dark:bg-surface-800"
                                [toggleMask]="true"
                            ></p-password>
                        </p-icon-field>

                        <div class="mb-6 flex flex-wrap items-center">
                            <p-checkbox name="checkbox" value="val" [(ngModel)]="confirmed" class="mr-2"></p-checkbox>
                            <label for="checkbox" class="text-surface-900 dark:text-surface-0 font-medium mr-2"> I have read the</label>
                            <a class="text-surface-600 dark:text-surface-200 hover:text-primary cursor-pointer">Terms and Conditions</a>
                        </div>
                        <p-button label="Sign Up" styleClass="w-full mb-6" [routerLink]="['/']"></p-button>
                        <span class="font-medium text-surface-600 dark:text-surface-200"
                            >Already have an account? <a class="font-semibold cursor-pointer text-surface-900 dark:text-surface-0 hover:text-primary transition-colors duration-300">Login</a></span
                        >
                    </div>
                </div>
                <div class="flex flex-wrap items-center pb-20 px-6">
                    <span class="text-2xl font-semiboldm-0 mr-8" style="line-height: 22px">freya</span>
                    <span class="m-0 font-medium text-surface-300 dark:text-surface-500" style="line-height: 17px">Copyright Ⓒ PrimeTek Informatics</span>
                </div>
            </div>
        </div>
        <app-configurator [simple]="true"/>
    `
})
export class Register {
    value: string = '';

    confirmed: boolean = false;
}
