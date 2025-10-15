import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      [class]="getButtonClasses()" 
      [disabled]="disabled"
      (click)="handleClick($event)"
      [type]="type">
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() disabled: boolean = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() fullWidth: boolean = false;
  @Input() rounded: boolean = false;
  @Input() loading: boolean = false;
  
  @Output() onClick = new EventEmitter<Event>();

  handleClick(event: Event): void {
    if (!this.disabled && !this.loading) {
      this.onClick.emit(event);
    }
  }

  getButtonClasses(): string {
    const baseClass = 'custom-btn';
    const variantClass = `custom-btn--${this.variant}`;
    const sizeClass = `custom-btn--${this.size}`;
    const disabledClass = this.disabled ? 'custom-btn--disabled' : '';
    const fullWidthClass = this.fullWidth ? 'custom-btn--full-width' : '';
    const roundedClass = this.rounded ? 'custom-btn--rounded' : '';
    const loadingClass = this.loading ? 'custom-btn--loading' : '';

    return [
      baseClass,
      variantClass,
      sizeClass,
      disabledClass,
      fullWidthClass,
      roundedClass,
      loadingClass
    ].filter(Boolean).join(' ');
  }
}