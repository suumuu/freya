import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent, ButtonVariant, ButtonSize } from '../../components/custom-button/custom-button.component';

@Component({
  selector: 'app-custom-button-demo',
  standalone: true,
  imports: [CommonModule, CustomButtonComponent],
  template: `
    <div class="flex flex-col gap-8 p-6">
      <div class="card">
        <h1 class="text-3xl font-bold text-gray-800 mb-6">Custom Button Component Demo</h1>
        
        <!-- Button Variants -->
        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-700 mb-4">Button Variants</h2>
          <div class="flex flex-wrap gap-4">
            <app-custom-button variant="primary" (onClick)="handleClick('Primary')">
              Primary
            </app-custom-button>
            <app-custom-button variant="secondary" (onClick)="handleClick('Secondary')">
              Secondary
            </app-custom-button>
            <app-custom-button variant="success" (onClick)="handleClick('Success')">
              Success
            </app-custom-button>
            <app-custom-button variant="danger" (onClick)="handleClick('Danger')">
              Danger
            </app-custom-button>
            <app-custom-button variant="warning" (onClick)="handleClick('Warning')">
              Warning
            </app-custom-button>
            <app-custom-button variant="info" (onClick)="handleClick('Info')">
              Info
            </app-custom-button>
            <app-custom-button variant="light" (onClick)="handleClick('Light')">
              Light
            </app-custom-button>
            <app-custom-button variant="dark" (onClick)="handleClick('Dark')">
              Dark
            </app-custom-button>
            <app-custom-button variant="outline" (onClick)="handleClick('Outline')">
              Outline
            </app-custom-button>
          </div>
        </section>

        <!-- Button Sizes -->
        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-700 mb-4">Button Sizes</h2>
          <div class="flex flex-wrap items-center gap-4">
            <app-custom-button size="sm" (onClick)="handleClick('Small')">
              Small
            </app-custom-button>
            <app-custom-button size="md" (onClick)="handleClick('Medium')">
              Medium
            </app-custom-button>
            <app-custom-button size="lg" (onClick)="handleClick('Large')">
              Large
            </app-custom-button>
            <app-custom-button size="xl" (onClick)="handleClick('Extra Large')">
              Extra Large
            </app-custom-button>
          </div>
        </section>

        <!-- Button States -->
        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-700 mb-4">Button States</h2>
          <div class="flex flex-wrap gap-4">
            <app-custom-button variant="primary" (onClick)="handleClick('Normal')">
              Normal
            </app-custom-button>
            <app-custom-button variant="primary" [disabled]="true">
              Disabled
            </app-custom-button>
            <app-custom-button variant="primary" [loading]="isLoading" (onClick)="toggleLoading()">
              {{ isLoading ? 'Loading...' : 'Click to Load' }}
            </app-custom-button>
          </div>
        </section>

        <!-- Button Modifiers -->
        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-700 mb-4">Button Modifiers</h2>
          <div class="space-y-4">
            <div class="flex gap-4">
              <app-custom-button variant="success" [rounded]="true" (onClick)="handleClick('Rounded')">
                Rounded Button
              </app-custom-button>
              <app-custom-button variant="info" [rounded]="true" size="sm" (onClick)="handleClick('Small Rounded')">
                Small Rounded
              </app-custom-button>
            </div>
            <div>
              <app-custom-button variant="secondary" [fullWidth]="true" (onClick)="handleClick('Full Width')">
                Full Width Button
              </app-custom-button>
            </div>
          </div>
        </section>

        <!-- Interactive Examples -->
        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-700 mb-4">Interactive Examples</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="p-4 bg-gray-50 rounded-lg">
              <h3 class="text-lg font-medium mb-3">Counter Example</h3>
              <div class="flex items-center gap-4">
                <app-custom-button variant="danger" size="sm" (onClick)="decrement()">
                  -
                </app-custom-button>
                <span class="text-xl font-bold">{{ counter }}</span>
                <app-custom-button variant="success" size="sm" (onClick)="increment()">
                  +
                </app-custom-button>
              </div>
            </div>
            <div class="p-4 bg-gray-50 rounded-lg">
              <h3 class="text-lg font-medium mb-3">Form Actions</h3>
              <div class="flex gap-2">
                <app-custom-button variant="primary" type="submit" (onClick)="handleSubmit()">
                  Submit
                </app-custom-button>
                <app-custom-button variant="light" type="reset" (onClick)="handleReset()">
                  Reset
                </app-custom-button>
              </div>
            </div>
          </div>
        </section>

        <!-- Click Results -->
        <section *ngIf="lastClickedButton" class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-700 mb-4">Last Action</h2>
          <div class="p-4 bg-blue-50 border-l-4 border-blue-400">
            <p class="text-blue-700">
              <strong>{{ lastClickedButton }}</strong> button was clicked!
            </p>
          </div>
        </section>
      </div>
    </div>
  `
})
export class CustomButtonDemoComponent {
  lastClickedButton: string = '';
  counter: number = 0;
  isLoading: boolean = false;

  handleClick(buttonName: string): void {
    this.lastClickedButton = buttonName;
    console.log(`${buttonName} button clicked!`);
  }

  increment(): void {
    this.counter++;
    this.handleClick('Increment');
  }

  decrement(): void {
    this.counter--;
    this.handleClick('Decrement');
  }

  handleSubmit(): void {
    this.handleClick('Submit Form');
    // Add form submission logic here
  }

  handleReset(): void {
    this.counter = 0;
    this.lastClickedButton = '';
    this.handleClick('Reset Form');
  }

  toggleLoading(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.handleClick('Loading Complete');
    }, 2000);
  }
}