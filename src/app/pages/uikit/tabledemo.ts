import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {InputTextModule} from 'primeng/inputtext';
import {MultiSelectModule} from 'primeng/multiselect';
import {SelectModule} from 'primeng/select';
import {SliderModule} from 'primeng/slider';
import {Table, TableModule} from 'primeng/table';
import {ProgressBarModule} from 'primeng/progressbar';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {ToastModule} from 'primeng/toast';
import {TooltipModule} from 'primeng/tooltip';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';
import {InputIconModule} from 'primeng/inputicon';
import {IconFieldModule} from 'primeng/iconfield';
import {TagModule} from 'primeng/tag';
import {ChipModule} from 'primeng/chip';
import {CheckboxModule} from 'primeng/checkbox';
import {Customer, CustomerService, Representative} from '@/pages/service/customer.service';
import {Product, ProductService} from '@/pages/service/product.service';

interface expandedRows {
    [key: string]: boolean;
}
@Component({
    selector: 'app-table-demo',
    imports: [
        TableModule,
        MultiSelectModule,
        SelectModule,
        InputIconModule,
        TagModule,
        ChipModule,
        CheckboxModule,
        InputTextModule,
        SliderModule,
        ProgressBarModule,
        ToggleButtonModule,
        ToastModule,
        TooltipModule,
        CommonModule,
        FormsModule,
        ButtonModule,
        RatingModule,
        RippleModule,
        IconFieldModule
    ],
    styles: [`
        * {
            font-family: 'Inter', sans-serif !important;
        }

        /* Preserve icon fonts for sorting and UI icons */
        .pi, [class*="pi-"], .ri, [class*="ri-"] {
            font-family: 'primeicons', 'remixicon' !important;
        }

        /* Ensure sorting icons are visible and properly styled */
        .pi.pi-angle-up, .pi.pi-angle-down {
            font-family: 'primeicons' !important;
            font-size: 12px !important;
            display: inline-block !important;
        }

        .ri-expand-up-down-line {
            font-family: 'remixicon' !important;
            font-size: 14px !important;
            display: inline-block !important;
            width: 14px !important;
            height: 14px !important;
        }

        /* Column header styling for single line and auto width */
        ::ng-deep .p-datatable thead th {
            white-space: nowrap !important;
            width: auto !important;
            min-width: auto !important;
            padding: 12px 16px !important;
            height: 44px !important;
            max-height: 44px !important;
            box-sizing: border-box !important;
            vertical-align: middle !important;
        }

        ::ng-deep .p-datatable thead tr {
            height: 44px !important;
        }

        ::ng-deep .p-datatable thead th > div {
            white-space: nowrap !important;
            overflow: visible !important;
            text-overflow: initial !important;
        }

        /* Ensure header content stays in one line */
        ::ng-deep .p-datatable thead th .flex {
            flex-wrap: nowrap !important;
        }

        /* Type column data - keep chips in single line */
        ::ng-deep .p-datatable tbody td {
            white-space: nowrap !important;
        }

        ::ng-deep .p-datatable tbody td .flex {
            flex-wrap: nowrap !important;
            overflow: hidden !important;
        }

        /* Specific styling for chip container in TYPE column */
        .chip-container {
            display: flex !important;
            flex-wrap: nowrap !important;
            gap: 4px !important;
            align-items: center !important;
            overflow: hidden !important;
            max-width: 100% !important;
        }

        ::ng-deep .p-column-filter-menu .p-column-filter-buttonbar {
            display: none !important;
        }

        /* Vertically center the filter icon */
        ::ng-deep .p-column-filter {
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
        }

        ::ng-deep .p-column-filter .p-button {
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            padding: 0 !important;
            margin: 0 !important;
        }

        ::ng-deep .p-chip {
            background: #dcfce7;
            color: #111928;
            font-weight: 500;
            border-radius: 6px !important;
            padding: 2px 10px !important;
        }

        ::ng-deep .chip-count .p-chip {
            background: #e2e8f0;
            color: #111928;
            font-weight: 500;
        }

        ::ng-deep .chip-count:hover .p-chip {
            background: #cbd5e1;
        }

        ::ng-deep .p-tooltip .p-tooltip-text {
            white-space: normal !important;
            max-width: 300px !important;
            min-height: auto !important;
            max-height: 200px !important;
            overflow-y: auto !important;
            line-height: 1.5 !important;
            padding: 8px 12px !important;
        }

        ::ng-deep .p-tooltip .p-tooltip-text .p-chip {
            margin-right: 4px;
            display: inline-block;
        }

        ::ng-deep .p-tooltip {
            z-index: 9999 !important;
        }

        /* Activity status circles */
        .activity-circle {
            width: 10px !important;
            height: 10px !important;
            border-radius: 12px !important;
            display: inline-block !important;
            flex-shrink: 0 !important;
        }

        .active-circle {
            background-color: #0E9F6E !important; /* Green color for Active */
        }

        .inactive-circle {
            background-color: #F05252 !important; /* Red color for Inactive */
        }

        /* Action button icon colors */
        ::ng-deep .action-pencil .pi {
            color: #6875F5 !important; /* Pencil color */
        }

        ::ng-deep .action-trash .pi {
            color: #F05252 !important; /* Trash color */
        }

        /* Custom Status Tag Colors */
        ::ng-deep .p-tag.p-tag-success {
            background-color: #dcfce7 !important; /* green-100 */
            color: #166534 !important; /* green-800 */
            border: none !important;
        }

        ::ng-deep .p-tag.p-tag-danger {
            background-color: #fee2e2 !important; /* red-100 */
            color: #991b1b !important; /* red-800 */
            border: none !important;
        }

        ::ng-deep .p-tag.p-tag-warn {
            background-color: #fef3c7 !important; /* yellow-100 */
            color: #92400e !important; /* yellow-800 */
            border: none !important;
        }

        ::ng-deep .p-tag.p-tag-info {
            background-color: #e5e7eb !important; /* gray-100 */
            color: #1f2937 !important; /* gray-800 */
            border: none !important;
        }

        /* Purple status using secondary */
        ::ng-deep .p-tag.p-tag-secondary {
            background-color: #f3e8ff !important; /* purple-100 */
            color: #581c87 !important; /* purple-800 */
            border: none !important;
        }
    `],
    template: ` 

    <!-- Custom Table -->

      <div class="card">
            <div class="font-semibold text-xl mb-4">Frozen Columns</div>
            <p-togglebutton [(ngModel)]="balanceFrozen" [onIcon]="'pi pi-lock'" offIcon="pi pi-lock-open" [onLabel]="'ON'" offLabel='OFF' />

            <p-table [value]="customers2" [scrollable]="true" scrollHeight="400px" styleClass="mt-4">
                <ng-template #header>
                    <tr>
                        <th style="min-width:80px" pFrozenColumn class="font-bold" pSortableColumn="name" ngClass="flex">
                             <div class="flex items-center">
                                SL
                            <div class="flex flex-col" style="margin-left: 6px;">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="rgba(107,114,128,1)"><path d="M18.2072 9.0428 12.0001 2.83569 5.793 9.0428 7.20721 10.457 12.0001 5.66412 16.793 10.457 18.2072 9.0428ZM5.79285 14.9572 12 21.1643 18.2071 14.9572 16.7928 13.543 12 18.3359 7.20706 13.543 5.79285 14.9572Z"></path></svg>
                            </div>
                            </div>
                        </th>
                        <th style="min-width:150px" pSortableColumn="id">
                            <div class="flex items-center">
                                REASON CODE
                                <div class="flex flex-col" style="margin-left: 6px;">
                                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="rgba(107,114,128,1)"><path d="M18.2072 9.0428 12.0001 2.83569 5.793 9.0428 7.20721 10.457 12.0001 5.66412 16.793 10.457 18.2072 9.0428ZM5.79285 14.9572 12 21.1643 18.2071 14.9572 16.7928 13.543 12 18.3359 7.20706 13.543 5.79285 14.9572Z"></path></svg>
                                </div>
                            </div>
                        </th>
                        <th style="min-width:250px" pSortableColumn="country.name">
                            <div class="flex items-center">
                                DESCRIPTION IN ENGLISH
                                <div class="flex flex-col" style="margin-left: 6px;">
                                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="rgba(107,114,128,1)"><path d="M18.2072 9.0428 12.0001 2.83569 5.793 9.0428 7.20721 10.457 12.0001 5.66412 16.793 10.457 18.2072 9.0428ZM5.79285 14.9572 12 21.1643 18.2071 14.9572 16.7928 13.543 12 18.3359 7.20706 13.543 5.79285 14.9572Z"></path></svg>
                                </div>
                            </div>
                        </th>
                          <th style="min-width: 14rem">
                            <div class="flex items-center"> 
                                <p-columnFilter field="representative" matchMode="in" display="menu" [showMatchModes]="false" [showOperator]="false" [showAddButton]="false" class="p-0">
                                    <ng-template #header>
                                        <div class="px-4 pt-4 pb-0">
                                            <span class="font-bold">Agent Picker</span>
                                        </div>
                                    </ng-template>
                                    <ng-template #filter let-value let-filter="filterCallback">
                                        <p-multi-select [ngModel]="value" [options]="representatives" placeholder="Any" (onChange)="filter($event.value)" optionLabel="name" styleClass="w-full">
                                            <ng-template let-option #item>
                                                <div class="flex items-center gap-2 w-44">
                                                    <img [alt]="option.label" src="/demo/images/avatar/{{ option.image }}" width="32" />
                                                    <span>{{ option.name }}</span>
                                                </div>
                                            </ng-template>
                                        </p-multi-select>
                                    </ng-template>
                                </p-columnFilter>
                                CMR
                                <div class="flex flex-col" style="margin-left: 6px;">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="rgba(107,114,128,1)"><path d="M18.2072 9.0428 12.0001 2.83569 5.793 9.0428 7.20721 10.457 12.0001 5.66412 16.793 10.457 18.2072 9.0428ZM5.79285 14.9572 12 21.1643 18.2071 14.9572 16.7928 13.543 12 18.3359 7.20706 13.543 5.79285 14.9572Z"></path></svg>
                                </div>
                            </div>
                        </th>
                        <th style="min-width:250px" pSortableColumn="date">
                            <div class="flex items-center">
                                DESCRIPTION IN BANGLA
                                <div class="flex flex-col" style="margin-left: 6px;">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="rgba(107,114,128,1)"><path d="M18.2072 9.0428 12.0001 2.83569 5.793 9.0428 7.20721 10.457 12.0001 5.66412 16.793 10.457 18.2072 9.0428ZM5.79285 14.9572 12 21.1643 18.2071 14.9572 16.7928 13.543 12 18.3359 7.20706 13.543 5.79285 14.9572Z"></path></svg>
                                </div>
                            </div>
                        </th>
                        <th style="min-width:260px" pSortableColumn="company">
                            <div class="flex items-center" style="gap: 0;">
                                <div class="flex items-center" style="gap: 0;">
                                    <p-columnFilter field="company" matchMode="in" display="menu" [showMatchModes]="false" [showOperator]="false" [showAddButton]="false" [showClearButton]="false" [showApplyButton]="false">
                                            <ng-template #header>
                                                <div class="p-3">
                                                    <div class="flex justify-between items-center mb-3">
                                                        <span class="font-medium text-sm">Select Item(s)</span>
                                                        <label class="flex items-center cursor-pointer">
                                                            <p-checkbox [(ngModel)]="selectAllTypes" (onChange)="onSelectAllTypes()" styleClass="mr-2 text-indigo-600"></p-checkbox>
                                                            <span class="text-indigo-600 text-sm font-medium">Select All</span>
                                                        </label>
                                                    </div>
                                                    <div class="relative">
                                                        <i class="pi pi-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                                                        <input type="text" placeholder="Search here" class="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm">
                                                    </div>
                                                </div>
                                            </ng-template>
                                            <ng-template #filter let-value let-filter="filterCallback">
                                                <div class="p-3 pt-0">
                                                    <div class="space-y-2">
                                                        <div *ngFor="let type of types" class="flex items-center">
                                                            <p-checkbox [inputId]="type.value" [value]="type.value" [(ngModel)]="selectedTypes" (onChange)="onTypeSelectionChange(type.value, $event)" styleClass="mr-3 text-indigo-600"></p-checkbox>
                                                            <label [for]="type.value" class="text-sm cursor-pointer">{{ type.label }}</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </ng-template>
                                            <ng-template #footer let-filter="filterCallback">
                                                <div class="p-1">
                                                    <div class="flex justify-start border-t border-gray-200">
                                                        <p-button label="Apply Filter" size="small" (onClick)="filter(selectedTypes)" styleClass="p-button-sm w-full" />
                                                    </div>
                                                </div>
                                            </ng-template>
                                        </p-columnFilter>
                                    TYPE
                                </div>
                                <div class="flex flex-col" style="margin-left: 6px;">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="rgba(107,114,128,1)"><path d="M18.2072 9.0428 12.0001 2.83569 5.793 9.0428 7.20721 10.457 12.0001 5.66412 16.793 10.457 18.2072 9.0428ZM5.79285 14.9572 12 21.1643 18.2071 14.9572 16.7928 13.543 12 18.3359 7.20706 13.543 5.79285 14.9572Z"></path></svg>
                                </div>
                            </div>
                        </th>
                        <th style="min-width:150px" pSortableColumn="status">
                            <div class="flex justify-between items-center">
                                <p-columnFilter field="status" matchMode="equals" display="menu">
                                    <ng-template #filter let-value let-filter="filterCallback">
                                        <p-select [ngModel]="value" [options]="statuses" (onChange)="filter($event.value)" placeholder="Any" [style]="{ 'min-width': '12rem' }">
                                            <ng-template let-option #item>
                                                <span [class]="'customer-badge status-' + option.value">{{ option.label }}</span>
                                            </ng-template>
                                        </p-select>
                                    </ng-template>
                                </p-columnFilter>
                                STATUS
                                <div class="flex flex-col" style="margin-left: 6px;">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="rgba(107,114,128,1)"><path d="M18.2072 9.0428 12.0001 2.83569 5.793 9.0428 7.20721 10.457 12.0001 5.66412 16.793 10.457 18.2072 9.0428ZM5.79285 14.9572 12 21.1643 18.2071 14.9572 16.7928 13.543 12 18.3359 7.20706 13.543 5.79285 14.9572Z"></path></svg>
                                </div>
                            </div>
                        </th>
                        <th style="min-width:200px" pSortableColumn="activity">
                            <div class="flex items-center">
                                ACTIVITY
                                <div class="flex flex-col" style="margin-left: 6px;">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="rgba(107,114,128,1)"><path d="M18.2072 9.0428 12.0001 2.83569 5.793 9.0428 7.20721 10.457 12.0001 5.66412 16.793 10.457 18.2072 9.0428ZM5.79285 14.9572 12 21.1643 18.2071 14.9572 16.7928 13.543 12 18.3359 7.20706 13.543 5.79285 14.9572Z"></path></svg>
                                </div>
                            </div>
                        </th>
                        <th style="min-width:200px" pSortableColumn="representative.name">
                            <div class="flex items-center">
                                REPRESENTATIVE
                                <div class="flex flex-col" style="margin-left: 6px;">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="rgba(107,114,128,1)"><path d="M18.2072 9.0428 12.0001 2.83569 5.793 9.0428 7.20721 10.457 12.0001 5.66412 16.793 10.457 18.2072 9.0428ZM5.79285 14.9572 12 21.1643 18.2071 14.9572 16.7928 13.543 12 18.3359 7.20706 13.543 5.79285 14.9572Z"></path></svg>
                                </div>
                            </div>
                        </th>
                        <th style="min-width:85px">
                            <div class="flex justify-between items-center">
                               IMAGE
                            </div>
                        </th>
                        <th style="min-width:85px">
                            <div class="flex justify-between items-center">
                               DATE
                            </div>
                        </th>
                         <th style="min-width:85px">
                            <div class="flex justify-between items-center">
                              TIME TAKEN
                            </div>
                        </th>
                         <th style="min-width:85px">
                            <div class="flex justify-between items-center">
                                ASSIGN UNIT TO
                            </div>
                        </th>
                        <th style="min-width:85px">
                            <div class="flex justify-between items-center">
                                ACTION
                            </div>
                        </th>
                        <th style="min-width:85px" alignFrozen="right" pFrozenColumn [frozen]="balanceFrozen" [ngClass]="{ 'font-bold': balanceFrozen }">
                            <div class="flex justify-between items-center">
                                ACTION
                            </div>
                        </th>
                    </tr>
                </ng-template>
                <ng-template #body let-customer let-rowIndex="rowIndex">
                    <tr>
                        <td pFrozenColumn class="">
                            {{ rowIndex + 1 }}
                        </td>
                        <td style="min-width:100px">{{ customer.id }}</td>
                        <td>{{ customer.country.name }}</td>
                         <td>
                            <div class="flex items-center gap-2">
                                <img [alt]="customer.representative.name" src="/demo/images/avatar/{{ customer.representative.image }}" width="32" style="vertical-align: middle" />
                                <span class="image-text">{{ customer.representative.name }}</span>
                            </div>
                        </td>
                        <td>
                            <span
                                pTooltip="পর্যাপ্ত পিওএসএম এক্সেকিউট করা আছে, রিপ্লেনিশমেন্টের প্রয়োজন নেই, যদি প্রয়োজন হয় তবে  রিপ্লেনিশমেন্টের জন্য অর্ডার করুন"
                                tooltipPosition="top"
                                style="display:inline-block; max-width:18rem; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;"
                            >
                                পর্যাপ্ত পিওএসএম এক্সেকিউট করা আছে, রিপ্লেনিশমেন্টের প্রয়োজন নেই, যদি প্রয়োজন হয় তবে  রিপ্লেনিশমেন্টের জন্য অর্ডার করুন
                            </span>
                        </td>
                        <td>
                            <div class="chip-container">
                                <ng-container *ngIf="customer.types && customer.types.length > 0; else noTypes">
                                    <ng-container *ngFor="let type of getVisibleChips(customer.types, 1).visible">
                                        <p-chip 
                                            [label]="type" 
                                            styleClass="text-xs">
                                        </p-chip>
                                    </ng-container>
                                    <p-chip 
                                        *ngIf="getVisibleChips(customer.types, 1).remaining > 0"
                                        [label]="getVisibleChips(customer.types, 1).remaining + '+'"
                                        styleClass="text-xs cursor-pointer chip-count"
                                        [pTooltip]="getVisibleChips(customer.types, 1).tooltip"
                                        tooltipPosition="top">
                                    </p-chip>
                                </ng-container>
                                <ng-template #noTypes>
                                    <p-chip label="No types" styleClass="text-xs chip-secondary"></p-chip>
                                </ng-template>
                            </div>
                        </td>
                        <td>
                            <p-tag [value]="customer.status.toLowerCase()" [severity]="getSeverity(customer.status)" />
                        </td>
                        <td>
                            <div class="flex items-center gap-2">
                                <div 
                                    class="activity-circle"
                                    [ngClass]="{
                                        'active-circle': customer.activityStatus === 'Active',
                                        'inactive-circle': customer.activityStatus === 'Inactive'
                                    }">
                                </div>
                                <span>{{ customer.activityStatus || 'Unknown' }}</span>
                            </div>
                        </td>
                        <td>{{ customer.representative.name }}</td>
                        <td>
                            <img [alt]="'Test Image ' + (rowIndex + 1)" [src]="getTestImage(rowIndex)" width="48" height="48" style="vertical-align: middle;" />
                        </td>
                        <td>{{ customer.date | date: 'd MMMM y' }}</td>
                        <td>
                            <span 
                                [ngClass]="{
                                    'text-red-500': customer.timeTaken > 20,
                                    'text-green-500': customer.timeTaken <= 20
                                }"
                                class="font-normal">
                                {{ customer.timeTaken > 20 ? customer.timeTaken  : customer.timeTaken  }}
                            </span>
                        </td>
                        <td>
                            <input type="text" pInputText placeholder="" style="width: 180px;" />
                        </td>
                        <td>
                            <button pButton type="button" icon="pi pi-pencil" class="p-button-text p-button-plain action-pencil"></button>
                            <button pButton type="button" icon="pi pi-trash" class="p-button-text p-button-plain action-trash"></button>
                        </td>
                        <td alignFrozen="right" pFrozenColumn [frozen]="balanceFrozen" [ngClass]="{ 'font-bold': balanceFrozen }">
                            <span class="flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 24 24" fill="rgba(6,148,162,1)"><path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path></svg>
                            </span>
                        </td>
                    </tr>
                </ng-template>
            </p-table>
        </div>
    
    <div class="card">
            <div class="font-semibold text-xl mb-4">Filtering</div>
            <p-table
                #dt1
                [value]="customers1"
                dataKey="id"
                [rows]="10"
                [loading]="loading"
                [rowHover]="true"
                [showGridlines]="true"
                [paginator]="true"
                [globalFilterFields]="['name', 'country.name', 'representative.name', 'status']"
                responsiveLayout="scroll"
            >
                <ng-template #caption>
                    <div class="flex justify-end items-center">
                        <p-iconfield iconPosition="left">
                            <p-inputicon>
                                <i class="pi pi-search"></i>
                            </p-inputicon>
                            <input pInputText type="text" (input)="onGlobalFilter(dt1, $event)" placeholder="Search keyword" />
                        </p-iconfield>
                    </div>
                </ng-template>
                <ng-template #header>
                    <tr>
                        <th style="min-width: 12rem">
                            <div class="flex justify-between items-center">
                                Name
                                <p-columnFilter type="text" field="name" display="menu" placeholder="Search by name"></p-columnFilter>
                            </div>
                        </th>
                        <th style="min-width: 12rem">
                            <div class="flex justify-between items-center">
                                Country
                                <p-columnFilter type="text" field="country.name" display="menu" placeholder="Search by country"></p-columnFilter>
                            </div>
                        </th>
                        <th style="min-width: 14rem">
                            <div class="flex justify-between items-center">
                                Agent
                                <p-columnFilter field="representative" matchMode="in" display="menu" [showMatchModes]="false" [showOperator]="false" [showAddButton]="false">
                                    <ng-template #header>
                                        <div class="px-4 pt-4 pb-0">
                                            <span class="font-bold">Agent Picker</span>
                                        </div>
                                    </ng-template>
                                    <ng-template #filter let-value let-filter="filterCallback">
                                        <p-multi-select [ngModel]="value" [options]="representatives" placeholder="Any" (onChange)="filter($event.value)" optionLabel="name" styleClass="w-full">
                                            <ng-template let-option #item>
                                                <div class="flex items-center gap-2 w-44">
                                                    <img [alt]="option.label" src="/demo/images/avatar/{{ option.image }}" width="32" />
                                                    <span>{{ option.name }}</span>
                                                </div>
                                            </ng-template>
                                        </p-multi-select>
                                    </ng-template>
                                </p-columnFilter>
                            </div>
                        </th>
                        <th style="min-width: 10rem">
                            <div class="flex justify-between items-center">
                                Date
                                <p-columnFilter type="date" field="date" display="menu" placeholder="mm/dd/yyyy"></p-columnFilter>
                            </div>
                        </th>
                        <th style="min-width: 10rem">
                            <div class="flex justify-between items-center">
                                Balance
                                <p-columnFilter type="numeric" field="balance" display="menu" currency="USD"></p-columnFilter>
                            </div>
                        </th>
                        <th style="min-width: 12rem">
                            <div class="flex justify-between items-center">
                                Status
                                <p-columnFilter field="status" matchMode="equals" display="menu">
                                    <ng-template #filter let-value let-filter="filterCallback">
                                        <p-select [ngModel]="value" [options]="statuses" (onChange)="filter($event.value)" placeholder="Any" [style]="{ 'min-width': '12rem' }">
                                            <ng-template let-option #item>
                                                <span [class]="'customer-badge status-' + option.value">{{ option.label }}</span>
                                            </ng-template>
                                        </p-select>
                                    </ng-template>
                                </p-columnFilter>
                            </div>
                        </th>
                        <th style="min-width: 12rem">
                            <div class="flex justify-between items-center">
                                Activity
                                <p-columnFilter field="activity" matchMode="between" display="menu" [showMatchModes]="false" [showOperator]="false" [showAddButton]="false">
                                    <ng-template #filter let-filter="filterCallback">
                                        <p-slider [ngModel]="activityValues" [range]="true" (onSlideEnd)="filter($event.values)" styleClass="m-4" [style]="{ 'min-width': '12rem' }"></p-slider>
                                        <div class="flex items-center justify-between px-2">
                                            <span>{{ activityValues[0] }}</span>
                                            <span>{{ activityValues[1] }}</span>
                                        </div>
                                    </ng-template>
                                </p-columnFilter>
                            </div>
                        </th>
                        <th style="min-width: 8rem">
                            <div class="flex justify-between items-center">
                                Verified
                                <p-columnFilter type="boolean" field="verified" display="menu"></p-columnFilter>
                            </div>
                        </th>
                    </tr>
                </ng-template>
                <ng-template #body let-customer>
                    <tr>
                        <td>
                            {{ customer.name }}
                        </td>
                        <td>
                            <div class="flex items-center gap-2">
                                <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + customer.country.code" width="30" />
                                <span>{{ customer.country.name }}</span>
                            </div>
                        </td>
                        <td>
                            <div class="flex items-center gap-2">
                                <img [alt]="customer.representative.name" src="/demo/images/avatar/{{ customer.representative.image }}" width="32" style="vertical-align: middle" />
                                <span class="image-text">{{ customer.representative.name }}</span>
                            </div>
                        </td>
                        <td>
                            {{ customer.date | date: 'd MMMM y' }}
                        </td>
                        <td>
                            {{ customer.balance | currency: 'USD' : 'symbol' }}
                        </td>
                        <td>
                            <p-tag [value]="customer.status.toLowerCase()" [severity]="getSeverity(customer.status)" />
                        </td>
                        <td>
                            <p-progressbar [value]="customer.activity" [showValue]="false" [style]="{ height: '0.5rem' }" />
                        </td>
                        <td>
                            <span class="flex justify-center items-center">
                                <i
                                    class="pi"
                                    [ngClass]="{
                                        'text-green-500 pi-check-circle': customer.verified,
                                        'text-red-500 pi-times-circle': !customer.verified
                                    }"
                                ></i>
                            </span>
                        </td>
                    </tr>
                </ng-template>
                <ng-template #emptymessage>
                    <tr>
                        <td colspan="8">No customers found.</td>
                    </tr>
                </ng-template>
                <ng-template #loadingbody>
                    <tr>
                        <td colspan="8">Loading customers data. Please wait.</td>
                    </tr>
                </ng-template>
            </p-table>
        </div>

        <div class="card">
            <div class="font-semibold text-xl mb-4">Frozen Columns</div>
            <p-togglebutton [(ngModel)]="balanceFrozen" [onIcon]="'pi pi-lock'" offIcon="pi pi-lock-open" [onLabel]="'Balance'" offLabel="Balance" />

            <p-table [value]="customers2" [scrollable]="true" scrollHeight="400px" styleClass="mt-4">
                <ng-template #header>
                    <tr>
                        <th style="min-width:200px" pFrozenColumn class="font-bold" pSortableColumn="name">Name</th>
                        <th style="min-width:100px">Id</th>
                        <th style="min-width:200px">Country</th>
                        <th style="min-width:200px">Date</th>
                        <th style="min-width:200px">Company</th>
                        <th style="min-width:200px">Status</th>
                        <th style="min-width:200px">Activity</th>
                        <th style="min-width:200px">Representative</th>
                        <th style="min-width:200px" alignFrozen="right" pFrozenColumn [frozen]="balanceFrozen" [ngClass]="{ 'font-bold': balanceFrozen }">Balance</th>
                    </tr>
                </ng-template>
                <ng-template #body let-customer>
                    <tr>
                        <td pFrozenColumn class="font-bold">
                            {{ customer.name }}
                        </td>
                        <td style="min-width:100px">{{ customer.id }}</td>
                        <td>{{ customer.country.name }}</td>
                        <td>{{ customer.date | date: 'd MMMM y' }}</td>
                        <td>{{ customer.company }}</td>
                        <td>{{ customer.status }}</td>
                        <td>{{ customer.activity }}</td>
                        <td>{{ customer.representative.name }}</td>
                        <td alignFrozen="right" pFrozenColumn [frozen]="balanceFrozen" [ngClass]="{ 'font-bold': balanceFrozen }">
                            {{ formatCurrency(customer.balance) }}
                        </td>
                    </tr>
                </ng-template>
            </p-table>
        </div>

        <div class="card">
            <div class="font-semibold text-xl mb-4">Row Expansion</div>
            <p-table [value]="products" dataKey="id" [tableStyle]="{ 'min-width': '60rem' }" [expandedRowKeys]="expandedRows">
                <ng-template #caption>
                    <div class="flex flex-wrap justify-end gap-2">
                        <p-button label="Expand All" icon="pi pi-plus" text (onClick)="expandAll()" />
                        <p-button label="Collapse All" icon="pi pi-minus" text (onClick)="collapseAll()" />
                    </div>
                </ng-template>
                <ng-template #header>
                    <tr>
                        <th style="width: 5rem"></th>
                        <th pSortableColumn="name">Name <p-sortIcon field="name" /></th>
                        <th>Image</th>
                        <th pSortableColumn="price">Price <p-sortIcon field="price" /></th>
                        <th pSortableColumn="category">Category <p-sortIcon field="category" /></th>
                        <th pSortableColumn="rating">Reviews <p-sortIcon field="rating" /></th>
                        <th pSortableColumn="inventoryStatus">Status <p-sortIcon field="inventoryStatus" /></th>
                    </tr>
                </ng-template>
                <ng-template #body let-product let-expanded="expanded">
                    <tr>
                        <td>
                            <p-button type="button" pRipple [pRowToggler]="product" [text]="true" [rounded]="true" [plain]="true" [icon]="expanded ? 'pi pi-chevron-down' : 'pi pi-chevron-right'" />
                        </td>
                        <td>{{ product.name }}</td>
                        <td>
                            <img [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + product.image" [alt]="product.name" width="50" class="shadow-lg" />
                        </td>
                        <td>{{ product.price | currency: 'USD' }}</td>
                        <td>{{ product.category }}</td>
                        <td>
                            <p-rating [ngModel]="product.rating" [readonly]="true" />
                        </td>
                        <td>
                            <p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)" />
                        </td>
                    </tr>
                </ng-template>
                <ng-template #expandedrow let-product>
                    <tr>
                        <td colspan="7">
                            <div class="p-4">
                                <h5>Orders for {{ product.name }}</h5>
                                <p-table [value]="product.orders" dataKey="id">
                                    <ng-template #header>
                                        <tr>
                                            <th pSortableColumn="id">Id <p-sortIcon field="id" /></th>
                                            <th pSortableColumn="customer">
                                                Customer
                                                <p-sortIcon field="customer" />
                                            </th>
                                            <th pSortableColumn="date">Date <p-sortIcon field="date" /></th>
                                            <th pSortableColumn="amount">
                                                Amount
                                                <p-sortIcon field="amount" />
                                            </th>
                                            <th pSortableColumn="status">
                                                Status
                                                <p-sortIcon field="status" />
                                            </th>
                                            <th style="width: 4rem"></th>
                                        </tr>
                                    </ng-template>
                                    <ng-template #body let-order>
                                        <tr>
                                            <td>{{ order.id }}</td>
                                            <td>{{ order.customer }}</td>
                                            <td>{{ order.date }}</td>
                                            <td>
                                                {{ order.amount | currency: 'USD' }}
                                            </td>
                                            <td>
                                                <p-tag [value]="order.status" [severity]="getSeverity(order.status)" />
                                            </td>
                                            <td>
                                                <p-button type="button" icon="pi pi-search" />
                                            </td>
                                        </tr>
                                    </ng-template>
                                    <ng-template #emptymessage>
                                        <tr>
                                            <td colspan="6">There are no order for this product yet.</td>
                                        </tr>
                                    </ng-template>
                                </p-table>
                            </div>
                        </td>
                    </tr>
                </ng-template>
            </p-table>
        </div>

        <div class="card">
            <div class="font-semibold text-xl mb-4">Grouping</div>
            <p-table [value]="customers3" sortField="representative.name" sortMode="single" [scrollable]="true" scrollHeight="400px" rowGroupMode="subheader" groupRowsBy="representative.name" [tableStyle]="{ 'min-width': '60rem' }">
                <ng-template #header>
                    <tr>
                        <th>Name</th>
                        <th>Country</th>
                        <th>Company</th>
                        <th>Status</th>
                        <th>Date</th>
                    </tr>
                </ng-template>
                <ng-template #groupheader let-customer>
                    <tr pRowGroupHeader>
                        <td colspan="5">
                            <div class="flex items-center gap-2">
                                <img [alt]="customer.representative.name" src="/demo/images/avatar/{{ customer.representative.image }}" width="32" style="vertical-align: middle" />
                                <span class="font-bold">{{ customer.representative.name }}</span>
                            </div>
                        </td>
                    </tr>
                </ng-template>
                <ng-template #groupfooter let-customer>
                    <tr>
                        <td colspan="5" class="text-right font-bold pr-12">
                            Total Customers:
                            {{ calculateCustomerTotal(customer.representative.name) }}
                        </td>
                    </tr>
                </ng-template>
                <ng-template #body let-customer let-rowIndex="rowIndex">
                    <tr>
                        <td>
                            {{ customer.name }}
                        </td>
                        <td>
                            <div class="flex items-center gap-2">
                                <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + customer.country.code" style="width: 20px" />
                                <span>{{ customer.country.name }}</span>
                            </div>
                        </td>
                        <td>
                            {{ customer.company }}
                        </td>
                        <td>
                            <p-tag [value]="customer.status" [severity]="getSeverity(customer.status)" />
                        </td>
                        <td>
                            {{ customer.date | date: 'd MMMM y' }}
                        </td>
                    </tr>
                </ng-template>
            </p-table>
        </div>`,
    providers: [ConfirmationService, MessageService, CustomerService, ProductService]
})
export class TableDemo implements OnInit {
    customers1: Customer[] = [];

    customers2: Customer[] = [];

    customers3: Customer[] = [];

    selectedCustomers1: Customer[] = [];

    selectedCustomer: Customer = {};

    representatives: Representative[] = [];

    statuses: any[] = [];

    types: any[] = [];

    selectedTypes: string[] = [];

    selectAllTypes: boolean = false;

    products: Product[] = [];

    rowGroupMetadata: any;

    expandedRows: expandedRows = {};

    activityValues: number[] = [0, 100];

    isExpanded: boolean = false;

    balanceFrozen: boolean = false;

    loading: boolean = true;

    @ViewChild('filter') filter!: ElementRef;

    constructor(
        private customerService: CustomerService,
        private productService: ProductService,
        private messageService: MessageService
    ) {}

    ngOnInit() {
        this.customerService.getCustomersLarge().then((customers) => {
            this.customers1 = customers;
            this.loading = false;

            // @ts-ignore
            this.customers1.forEach((customer) => (customer.date = new Date(customer.date)));
        });
        this.customerService.getCustomersMedium().then((customers) => {
            this.customers2 = customers;
            // Add sample types data to each customer
            this.customers2.forEach((customer, index) => {
                const sampleTypes = [
                    'Customer survey',
                    'POSM distribution', 
                    'Consumer Survey',
                    'Pending',
                    'Geo Fencing',
                    'Audit',
                    'Information',
                    'Communication'
                ];
                // Assign 3-6 random types to each customer
                const numTypes = Math.floor(Math.random() * 4) + 3;
                customer.types = sampleTypes.slice(0, numTypes);
                
                // Add activity status - randomly assign Active or Inactive
                customer.activityStatus = Math.random() > 0.5 ? 'Active' : 'Inactive';
                
                // Add random time taken (5 to 35 minutes)
                customer.timeTaken = Math.floor(Math.random() * 31) + 5;
            });
        });
        this.customerService.getCustomersLarge().then((customers) => (this.customers3 = customers));
        this.productService.getProductsWithOrdersSmall().then((data) => (this.products = data));

        this.representatives = [
            { name: 'Amy Elsner', image: 'amyelsner.png' },
            { name: 'Anna Fali', image: 'annafali.png' },
            { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
            { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
            { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
            { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
            { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
            { name: 'Onyama Limba', image: 'onyamalimba.png' },
            { name: 'Stephen Shaw', image: 'stephenshaw.png' },
            { name: 'XuXue Feng', image: 'xuxuefeng.png' }
        ];

        this.statuses = [
            { label: 'Unqualified', value: 'unqualified' },
            { label: 'Qualified', value: 'qualified' },
            { label: 'New', value: 'new' },
            { label: 'Negotiation', value: 'negotiation' },
            { label: 'Renewal', value: 'renewal' },
            { label: 'Proposal', value: 'proposal' }
        ];

        this.types = [
            { label: 'Customer Survey (2)', value: 'customer-survey', count: 2 },
            { label: 'Consumer Survey (1)', value: 'consumer-survey', count: 1 },
            { label: 'POSM Distribution (0)', value: 'posm-distribution', count: 0 },
            { label: 'Communication (6)', value: 'communication', count: 6 },
            { label: 'Information (3)', value: 'information', count: 3 },
            { label: 'Audit (1)', value: 'audit', count: 1 },
            { label: 'Geo Fencing (1)', value: 'geo-fencing', count: 1 }
        ];
    }

    onSort() {
        this.updateRowGroupMetaData();
    }

    updateRowGroupMetaData() {
        this.rowGroupMetadata = {};

        if (this.customers3) {
            for (let i = 0; i < this.customers3.length; i++) {
                const rowData = this.customers3[i];
                const representativeName = rowData?.representative?.name || '';

                if (i === 0) {
                    this.rowGroupMetadata[representativeName] = {
                        index: 0,
                        size: 1
                    };
                } else {
                    const previousRowData = this.customers3[i - 1];
                    const previousRowGroup = previousRowData?.representative?.name;
                    if (representativeName === previousRowGroup) {
                        this.rowGroupMetadata[representativeName].size++;
                    } else {
                        this.rowGroupMetadata[representativeName] = {
                            index: i,
                            size: 1
                        };
                    }
                }
            }
        }
    }

    formatCurrency(value: number) {
        return value.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        });
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    clear(table: Table) {
        table.clear();
        this.filter.nativeElement.value = '';
    }

    getSeverity(status: string) {
        switch (status) {
            case 'qualified':
            case 'instock':
            case 'INSTOCK':
            case 'DELIVERED':
            case 'delivered':
                return 'success';

            case 'negotiation':
            case 'lowstock':
            case 'LOWSTOCK':
            case 'PENDING':
            case 'pending':
                return 'warn';

            case 'unqualified':
            case 'outofstock':
            case 'OUTOFSTOCK':
            case 'CANCELLED':
            case 'cancelled':
                return 'danger';

            case 'renewal':
            case 'proposal':
                return 'secondary';

            default:
                return 'info';
        }
    }

    calculateCustomerTotal(name: string) {
        let total = 0;

        if (this.customers2) {
            for (let customer of this.customers2) {
                if (customer.representative?.name === name) {
                    total++;
                }
            }
        }

        return total;
    }

    expandAll() {
        this.expandedRows = this.products.reduce(
            (acc, p) => {
                if (p.id) {
                    acc[p.id] = true;
                }
                return acc;
            },
            {} as { [key: string]: boolean }
        );
    }

    collapseAll() {
        this.expandedRows = {};
    }

    onSelectAllTypes() {
        if (this.selectAllTypes) {
            this.selectedTypes = this.types.map(type => type.value);
        } else {
            this.selectedTypes = [];
        }
    }

    onTypeSelectionChange(typeValue: string, event: any) {
        if (event.target.checked) {
            if (!this.selectedTypes.includes(typeValue)) {
                this.selectedTypes.push(typeValue);
            }
        } else {
            this.selectedTypes = this.selectedTypes.filter(value => value !== typeValue);
        }
        
        // Update Select All checkbox state
        this.selectAllTypes = this.selectedTypes.length === this.types.length;
    }

    getVisibleChips(types: string[], maxVisible: number = 2): { visible: string[], remaining: number, tooltip: string } {
        if (!types || types.length === 0) {
            return { visible: [], remaining: 0, tooltip: '' };
        }

        const visible = types.slice(0, maxVisible);
        const remaining = Math.max(0, types.length - maxVisible);
        const hiddenTypes = types.slice(maxVisible);
        
        let tooltip = '';
        if (remaining > 0) {
            tooltip = hiddenTypes.join(', ');
        }

        return { visible, remaining, tooltip };
    }

    getTestImage(index: number): string {
        const testImages = [
            '/demo/images/avatar/square/avatar-f-1.jpg',
            '/demo/images/avatar/square/avatar-f-2.jpg',
            '/demo/images/avatar/square/avatar-m-1.jpg',
            '/demo/images/avatar/square/avatar-f-1@2x.jpg',
            '/demo/images/avatar/square/avatar-f-2@2x.jpg',
            '/demo/images/avatar/square/avatar-m-1@2x.jpg'
        ];
        
        return testImages[index % testImages.length];
    }
}
