import {Component, ElementRef, Input, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
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
import { Paginator, PaginatorModule } from "primeng/paginator";

interface expandedRows {
    [key: string]: boolean;
}

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
    IconFieldModule,
    PaginatorModule
],
    templateUrl: './tabledemo.component.html',
    styleUrls: ['./tabledemo.component.css'],
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

    // Pagination properties
    first: number = 0;
    totalRecords: number = 0;

    // Dropdown options used by the p-select in the table rows
    dropdownOptions: { label: string; value: any }[] = [
        { label: 'Action A', value: 'action_a' },
        { label: 'Action B', value: 'action_b' },
        { label: 'Action C', value: 'action_c' }
    ];

    @ViewChild('filter') filter!: ElementRef;

    @Input() columns: ColumnConfig[] = [];
    @Input() data: any[] = [];
    @Input() scrollable: boolean = true;
    @Input() scrollHeight: string = '400px';
    @Input() paginator: boolean = false;
    @Input() rows: number = 10;
    @Input() rowsPerPageOptions: number[] = [5, 10, 15, 20, 25, 50];

    @Output() dataSelected = new EventEmitter<any[]>();

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
            this.totalRecords = customers.length;
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
            // Set default data if none provided
            if (this.data.length === 0) {
                this.data = this.customers2;
                this.totalRecords = this.data.length;
            }
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

        // Set default columns if none provided
        if (this.columns.length === 0) {
            this.columns = [
                { field: 'id', header: 'SL', sortable: true, width: '80px', frozen: true },
                { field: 'id', header: 'ID', sortable: true, width: '150px' },
                { field: 'country.name', header: 'DESCRIPTION IN ENGLISH', sortable: true, width: '250px' },
                { field: 'representative', header: 'CMR', filterable: true, width: '14rem', filterOptions: this.representatives },
                { field: 'country.name', header: 'DESCRIPTION IN BANGLA', sortable: true, width: '250px' },
                { field: 'types', header: 'TYPE', filterable: true, width: '260px', type: 'chip', filterOptions: this.types },
                { field: 'status', header: 'STATUS', sortable: true, filterable: true, width: '150px', type: 'status', filterOptions: this.statuses },
                { field: 'activityStatus', header: 'ACTIVITY', sortable: true, width: '200px', type: 'activity' },
                { field: 'representative.name', header: 'REPRESENTATIVE', sortable: true, width: '200px' },
                { field: 'image', header: 'IMAGE', width: '85px', type: 'image' },
                { field: 'mediaType', header: 'MEDIA TYPE', width: '85px' },
                { field: 'date', header: 'DATE', width: '85px' },
                { field: 'timeTaken', header: 'TIME TAKEN', width: '85px' },
                { field: 'assignUnit', header: 'ASSIGN UNIT TO', width: '85px' },
                { field: 'dropdownValue', header: 'DROPDOWN', width: '85px', type: 'dropdown', dropdownOptions: this.dropdownOptions },
                { field: 'actions', header: 'ACTION', width: '85px', type: 'action' },
                { field: 'actions', header: 'ACTION', width: '85px', type: 'action', frozen: true, alignFrozen: 'right' }
            ];
        }

        // Set default data if none provided
        if (this.data.length === 0) {
            this.data = this.customers2;
        }
        this.totalRecords = this.data.length;
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

    // Pagination methods
    onPageChange(event: any) {
        this.first = event.first;
        this.rows = event.rows;
    }

    onRowsPerPageChange(rows: number) {
        this.rows = rows;
        this.first = 0; // Reset to first page when changing rows per page
    }

    getCurrentPage(): number {
        return Math.floor(this.first / this.rows) + 1;
    }

    getTotalPages(): number {
        return Math.ceil(this.totalRecords / this.rows);
    }

    goToFirstPage() {
        this.first = 0;
    }

    goToPreviousPage() {
        if (this.first > 0) {
            this.first -= this.rows;
        }
    }

    goToNextPage() {
        if (this.first + this.rows < this.totalRecords) {
            this.first += this.rows;
        }
    }

    goToLastPage() {
        this.first = Math.floor(this.totalRecords / this.rows) * this.rows;
        if (this.first >= this.totalRecords) {
            this.first = Math.max(0, this.totalRecords - this.rows);
        }
    }

    canGoPrevious(): boolean {
        return this.first > 0;
    }

    canGoNext(): boolean {
        return this.first + this.rows < this.totalRecords;
    }

    getDisplayRange(): string {
        const start = this.first + 1;
        const end = Math.min(this.first + this.rows, this.totalRecords);
        return `${start}-${end} of ${this.totalRecords}`;
    }

    sendDataToParent(customer: any) {
        // Emit the selected customer data to parent component
        this.dataSelected.emit([customer]);
    }

    get paginatedData(): any[] {
        if (!this.data) return [];
        const start = this.first;
        const end = start + this.rows;
        return this.data.slice(start, end);
    }
}
