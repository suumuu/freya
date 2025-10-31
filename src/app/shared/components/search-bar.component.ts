import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  @Input() value: string = '';
  @Input() placeholder: string = 'Search...';
  @Output() valueChange = new EventEmitter<string>();

  onValueChange(val: string) {
    this.value = val;
    this.valueChange.emit(this.value);
  }

  clear() {
    this.value = '';
    this.valueChange.emit(this.value);
  }
}
