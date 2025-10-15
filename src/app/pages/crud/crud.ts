import {Component, OnInit, signal, ViewChild} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Table, TableModule} from 'primeng/table';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {RatingModule} from 'primeng/rating';
import {InputTextModule} from 'primeng/inputtext';
import {TextareaModule} from 'primeng/textarea';
import {SelectModule} from 'primeng/select';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import {DialogModule} from 'primeng/dialog';
import {TagModule} from 'primeng/tag';
import {InputIconModule} from 'primeng/inputicon';
import {IconFieldModule} from 'primeng/iconfield';
import {Product, ProductService} from '@/pages/service/product.service';

interface Column {
    field: string;
    header: string;
    customExportHeader?: string;
}

interface ExportColumn {
    title: string;
    dataKey: string;
}

@Component({
    selector: 'app-crud',
    standalone: true,
    imports: [
        CommonModule,
        TableModule,
        FormsModule,
        ButtonModule,
        RippleModule,
        ToastModule,
        ToolbarModule,
        RatingModule,
        InputTextModule,
        TextareaModule,
        SelectModule,
        RadioButtonModule,
        InputNumberModule,
        DialogModule,
        TagModule,
        InputIconModule,
        IconFieldModule
    ],
    template: `
        <div>
            <div class="card">
                <p-toolbar styleClass="mb-6">
                    <ng-template #start>
                        <p-button label="New" icon="pi pi-plus" severity="secondary" class="mr-2" (onClick)="openNew()" />
                        <p-button severity="secondary" label="Delete" icon="pi pi-trash" (onClick)="confirmDeleteSelected()" [disabled]="!selectedProducts || !selectedProducts.length" />
                    </ng-template>

                    <ng-template #end>
                        <p-button label="Export" icon="pi pi-upload" severity="secondary" (onClick)="exportCSV()" />
                    </ng-template>
                </p-toolbar>

                <p-table
                    #dt
                    [value]="products()"
                    [rows]="10"
                    [columns]="cols"
                    [paginator]="true"
                    [globalFilterFields]="['name', 'country.name', 'representative.name', 'status']"
                    [tableStyle]="{ 'min-width': '75rem' }"
                    [(selection)]="selectedProducts"
                    [rowHover]="true"
                    dataKey="id"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                    [showCurrentPageReport]="true"
                    [rowsPerPageOptions]="[10, 20, 30]"
                >
                    <ng-template #caption>
                        <div class="flex items-center justify-between">
                            <h5 class="m-0">Manage Products</h5>
                            <p-iconfield>
                                <p-inputicon styleClass="pi pi-search" />
                                <input pInputText type="text" (input)="onGlobalFilter(dt, $event)" placeholder="Search..." />
                            </p-iconfield>
                        </div>
                    </ng-template>
                    <ng-template #header>
                        <tr>
                            <th style="width: 3rem">
                                <p-tableHeaderCheckbox />
                            </th>
                            <th style="min-width: 16rem">Code</th>
                            <th pSortableColumn="name" style="min-width:16rem">
                                Name
                                <p-sortIcon field="name" />
                            </th>
                            <th>Image</th>
                            <th pSortableColumn="price" style="min-width: 8rem">
                                Price
                                <p-sortIcon field="price" />
                            </th>
                            <th pSortableColumn="category" style="min-width:10rem">
                                Category
                                <p-sortIcon field="category" />
                            </th>
                            <th pSortableColumn="rating" style="min-width: 12rem">
                                Reviews
                                <p-sortIcon field="rating" />
                            </th>
                            <th pSortableColumn="inventoryStatus" style="min-width: 12rem">
                                Status
                                <p-sortIcon field="inventoryStatus" />
                            </th>
                            <th style="min-width: 12rem"></th>
                        </tr>
                    </ng-template>
                    <ng-template #body let-product>
                        <tr>
                            <td style="width: 3rem">
                                <p-tableCheckbox [value]="product" />
                            </td>
                            <td style="min-width: 12rem">{{ product.code }}</td>
                            <td style="min-width: 16rem">{{ product.name }}</td>
                            <td>
                                <img [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + product.image" [alt]="product.name" style="width: 64px" class="rounded" />
                            </td>
                            <td>{{ product.price | currency: 'USD' }}</td>
                            <td>{{ product.category }}</td>
                            <td>
                                <p-rating [(ngModel)]="product.rating" [readonly]="true" />
                            </td>
                            <td>
                                <p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)" />
                            </td>
                            <td>
                                <p-button icon="pi pi-pencil" class="mr-2" [rounded]="true" [outlined]="true" (onClick)="editProduct(product)" />
                                <p-button icon="pi pi-trash" severity="danger" [rounded]="true" [outlined]="true" (onClick)="confirmDeleteProduct(product)" />
                            </td>
                        </tr>
                    </ng-template>
                </p-table>
            </div>

            <p-dialog [(visible)]="productDialog" [style]="{ width: '450px' }" header="Product Details" [modal]="true">
                <ng-template #content>
                    <div class="flex flex-col gap-6">
                        <img [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + product.image" [alt]="product.image" class="block m-auto pb-4" *ngIf="product.image" />
                        <div>
                            <label for="name" class="block font-bold mb-3">Name</label>
                            <input type="text" pInputText id="name" [(ngModel)]="product.name" required autofocus fluid />
                            <small class="text-red-500" *ngIf="submitted && !product.name">Name is required.</small>
                        </div>
                        <div>
                            <label for="description" class="block font-bold mb-3">Description</label>
                            <textarea id="description" pTextarea [(ngModel)]="product.description" required rows="3" cols="20" fluid></textarea>
                        </div>

                        <div>
                            <label for="inventoryStatus" class="block font-bold mb-3">Inventory Status</label>
                            <p-select [(ngModel)]="product.inventoryStatus" inputId="inventoryStatus" [options]="statuses" optionLabel="label" optionValue="label" placeholder="Select a Status" fluid />
                        </div>

                        <div>
                            <span class="block font-bold mb-4">Category</span>
                            <div class="grid grid-cols-12 gap-4">
                                <div class="flex items-center gap-2 col-span-6">
                                    <p-radiobutton id="category1" name="category" value="Accessories" [(ngModel)]="product.category" />
                                    <label for="category1">Accessories</label>
                                </div>
                                <div class="flex items-center gap-2 col-span-6">
                                    <p-radiobutton id="category2" name="category" value="Clothing" [(ngModel)]="product.category" />
                                    <label for="category2">Clothing</label>
                                </div>
                                <div class="flex items-center gap-2 col-span-6">
                                    <p-radiobutton id="category3" name="category" value="Electronics" [(ngModel)]="product.category" />
                                    <label for="category3">Electronics</label>
                                </div>
                                <div class="flex items-center gap-2 col-span-6">
                                    <p-radiobutton id="category4" name="category" value="Fitness" [(ngModel)]="product.category" />
                                    <label for="category4">Fitness</label>
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-12 gap-4">
                            <div class="col-span-6">
                                <label for="price" class="block font-bold mb-3">Price</label>
                                <p-inputnumber id="price" [(ngModel)]="product.price" mode="currency" currency="USD" locale="en-US" fluid />
                            </div>
                            <div class="col-span-6">
                                <label for="quantity" class="block font-bold mb-3">Quantity</label>
                                <p-inputnumber id="quantity" [(ngModel)]="product.quantity" fluid />
                            </div>
                        </div>
                    </div>
                </ng-template>

                <ng-template #footer>
                    <p-button label="Cancel" icon="pi pi-times" text (onClick)="hideDialog()" />
                    <p-button label="Save" icon="pi pi-check" (onClick)="saveProduct()" />
                </ng-template>
            </p-dialog>

            <p-dialog [(visible)]="deleteProductDialog" [style]="{ width: '450px' }" header="Confirm" [modal]="true">
                <div class="flex items-center gap-4">
                    <i class="pi pi-exclamation-triangle !text-3xl"></i>
                    <span *ngIf="product"
                        >Are you sure you want to delete <b>{{ product.name }}</b
                        >?</span
                    >
                </div>
                <ng-template #footer>
                    <p-button label="No" icon="pi pi-times" text (onClick)="deleteProductDialog = false" />
                    <p-button label="Yes" icon="pi pi-check" (onClick)="deleteProduct()" />
                </ng-template>
            </p-dialog>

            <p-dialog [(visible)]="deleteProductsDialog" [style]="{ width: '450px' }" header="Confirm" [modal]="true">
                <div class="flex items-center gap-4">
                    <i class="pi pi-exclamation-triangle !text-3xl"></i>
                    <span>Are you sure you want to delete the selected products?</span>
                </div>
                <ng-template #footer>
                    <p-button label="No" icon="pi pi-times" text (onClick)="deleteProductsDialog = false" />
                    <p-button label="Yes" icon="pi pi-check" text (onClick)="deleteSelectedProducts()" />
                </ng-template>
            </p-dialog>
        </div>
    `,
    providers: [MessageService, ProductService, ConfirmationService]
})
export class Crud implements OnInit {
    productDialog: boolean = false;

    deleteProductDialog: boolean = false;

    deleteProductsDialog: boolean = false;

    products = signal<Product[]>([]);

    product!: Product;

    selectedProducts!: Product[] | null;

    submitted: boolean = false;

    statuses!: any[];

    @ViewChild('dt') dt!: Table;

    exportColumns!: ExportColumn[];

    cols!: Column[];

    constructor(
        private productService: ProductService,
        private messageService: MessageService
    ) {}

    exportCSV() {
        this.dt.exportCSV();
    }

    ngOnInit() {
        this.loadDemoData();
    }

    loadDemoData() {
        this.productService.getProducts().then((data) => {
            this.products.set(data);
        });

        this.statuses = [
            { label: 'INSTOCK', value: 'instock' },
            { label: 'LOWSTOCK', value: 'lowstock' },
            { label: 'OUTOFSTOCK', value: 'outofstock' }
        ];

        this.cols = [
            {
                field: 'code',
                header: 'Code',
                customExportHeader: 'Product Code'
            },
            { field: 'name', header: 'Name' },
            { field: 'image', header: 'Image' },
            { field: 'price', header: 'Price' },
            { field: 'category', header: 'Category' }
        ];

        this.exportColumns = this.cols.map((col) => ({
            title: col.header,
            dataKey: col.field
        }));
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    openNew() {
        this.product = {};
        this.submitted = false;
        this.productDialog = true;
    }

    editProduct(product: Product) {
        this.product = { ...product };
        this.productDialog = true;
    }

    confirmDeleteProduct(prod: Product) {
        this.product = prod;
        this.deleteProductDialog = true;
    }

    confirmDeleteSelected() {
        this.deleteProductsDialog = true;
    }

    deleteSelectedProducts() {
        this.products.update((products) => products.filter((val) => !(this.selectedProducts ?? []).includes(val)));
        this.deleteProductsDialog = false;
        this.selectedProducts = null;

        this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Products Deleted',
            life: 3000
        });
    }

    hideDialog() {
        this.productDialog = false;
        this.submitted = false;
    }

    deleteProduct() {
        this.products.update((products) => products.filter((val) => val.id !== this.product.id));
        this.deleteProductDialog = false;
        this.product = {};
        this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Products Deleted',
            life: 3000
        });
    }

    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.products().length; i++) {
            if (this.products()[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    createId(): string {
        let id = '';
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }

    getSeverity(status: string) {
        switch (status) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warn';
            case 'OUTOFSTOCK':
                return 'danger';
            default:
                return 'info';
        }
    }

    saveProduct() {
        this.submitted = true;
        let _products = this.products();
        if (this.product.name?.trim()) {
            if (this.product.id) {
                _products[this.findIndexById(this.product.id)] = this.product;
                this.products.set([..._products]);
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Product Updated',
                    life: 3000
                });
            } else {
                this.product.id = this.createId();
                this.product.image = 'product-placeholder.svg';
                this.product.inventoryStatus = this.product.inventoryStatus || 'INSTOCK';
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Product Created',
                    life: 3000
                });
                this.products.set([..._products, this.product]);
            }

            this.productDialog = false;
            this.product = {};
        }
    }
}
