import {CommonModule} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MessageService} from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast';
import {DialogModule} from 'primeng/dialog';
import {TableDemo} from './tabledemo';
import {CustomerService} from '@/pages/service/customer.service';

// Import the ColumnConfig interface from tabledemo
interface ColumnConfig {
    field: string;
    header: string;
    sortable?: boolean;
    filterable?: boolean;
    width?: string;
    type?: 'text' | 'image' | 'dropdown' | 'action' | 'status' | 'activity' | 'chip' | 'representative' | 'custom';
    frozen?: boolean;
    alignFrozen?: 'left' | 'right';
    filterOptions?: any[];
    dropdownOptions?: { label: string; value: any }[];
}

@Component({
    selector: 'app-messages-demo',
    standalone: true,
    imports: [CommonModule, ToastModule, ButtonModule, InputTextModule, MessageModule, FormsModule, DialogModule, TableDemo],
    templateUrl: './messagesdemo.component.html',
    styleUrls: ['./messagesdemo.component.css'],
    providers: [MessageService, CustomerService]
})
export class MessagesDemo implements OnInit {
    username: string | undefined;

    email: string | undefined;

    // Edit dialog properties
    editDialogVisible: boolean = false;
    editingCustomer: any = null;

    tableConfig: {
        columns: ColumnConfig[];
        data: any[];
        scrollable: boolean;
        scrollHeight: string;
        paginator: boolean;
        rows: number;
        rowsPerPageOptions: number[];
        tableStyle?: { [key: string]: any };
    } = {
        columns: [
            { field: 'sl', header: 'SL', sortable: true, width: '80px', frozen: true },
            { field: 'id', header: 'ID', sortable: true, width: '150px' },
            { field: 'english.description', header: 'DESCRIPTION IN ENGLISH', sortable: true, width: '250px' },
            { field: 'representative', header: 'CMR', filterable: true, width: '14rem' },
            { field: 'status', header: 'STATUS', sortable: true, filterable: true, width: '150px', type: 'status' },
            { field: 'actions', header: 'ACTION', width: '85px', type: 'action' },
            { field: 'actions', header: 'ACTION', width: '85px', type: 'action', frozen: true, alignFrozen: 'right' }
        ],
        data: [],
        scrollable: true,
        scrollHeight: '400px',
        paginator: false,
        rows: 10,
        rowsPerPageOptions: [5, 10, 15, 20, 25, 50]
    };

    constructor(
        private service: MessageService,
        private customerService: CustomerService
    ) {}

    ngOnInit() {
        // Load sample data
        this.customerService.getCustomersMedium().then((customers) => {
            this.tableConfig.data = customers;
        });
    }

    onDataSelected(data: any) {
        if (data && data.length > 0) {
            this.openEditDialog(data[0]);
        }
    }

    openEditDialog(customer: any) {
        this.editingCustomer = { ...customer }; // Create a copy to avoid direct mutation
        this.editDialogVisible = true;
    }

   

    showInfoViaToast() {
        this.service.add({
            severity: 'info',
            summary: 'Info Message',
            detail: 'PrimeNG rocks'
        });
    }

    showWarnViaToast() {
        this.service.add({
            severity: 'warn',
            summary: 'Warn Message',
            detail: 'There are unsaved changes'
        });
    }

    showErrorViaToast() {
        this.service.add({
            severity: 'error',
            summary: 'Error Message',
            detail: 'Validation failed'
        });
    }

    showSuccessViaToast() {
        this.service.add({
            severity: 'success',
            summary: 'Success Message',
            detail: 'Message sent'
        });
    }
}
