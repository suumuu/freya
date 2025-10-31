import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchBarComponent } from './search-bar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-type-filter',
  standalone: true,
  templateUrl: './type-filter.component.html',
  styleUrls: ['./type-filter.component.css'],
  imports: [CommonModule, FormsModule, SearchBarComponent],
})
export class TypeFilterComponent {
  @Input() options: { label: string; value: string }[] = [];
  @Input() selected: string[] = [];
  @Input() selectAll: boolean = false;
  @Input() search: string = '';
  @Output() selectedChange = new EventEmitter<string[]>();
  @Output() selectAllChange = new EventEmitter<boolean>();
  @Output() searchChange = new EventEmitter<string>();
  @Output() applyFilter = new EventEmitter<void>();

  filteredOptions() {
    if (!this.search) return this.options;
    return this.options.filter(opt => opt.label.toLowerCase().includes(this.search.toLowerCase()));
  }

  onSelectAll() {
    if (this.selectAll) {
      this.selected = this.options.map(opt => opt.value);
    } else {
      this.selected = [];
    }
    this.selectedChange.emit(this.selected);
    this.selectAllChange.emit(this.selectAll);
  }

  onTypeChange(value: string, event: any) {
    if (event.target.checked) {
      if (!this.selected.includes(value)) {
        this.selected = [...this.selected, value];
      }
    } else {
      this.selected = this.selected.filter(v => v !== value);
    }
    this.selectAll = this.selected.length === this.options.length && this.options.length > 0;
    this.selectedChange.emit(this.selected);
    this.selectAllChange.emit(this.selectAll);
  }

  apply() {
    this.applyFilter.emit();
  }
}
