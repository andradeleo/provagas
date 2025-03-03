import { CommonModule } from '@angular/common';
import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'dynamic-form',
  imports: [CommonModule, NzButtonModule, NzIconModule, NzInputModule, FormsModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DynamicFormComponent),
      multi: true,
    },
  ]
})
export class DynamicFormComponent implements OnInit, ControlValueAccessor  {
  public links: string[] = [];

  public ngOnInit(): void {
    this.links = ["https://andrleo.com"];
  }

  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(obj: any): void {
    this.links = obj || [];
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  addLink(): void {
    this.links.push("");
    this.onChange(this.links);
  }

  // Remove um link pelo índice
  removeLink(index: number): void {
    this.links.splice(index, 1);
    this.onChange(this.links);
  }

  // Atualiza o valor do link individual
  atualizar(index: number, value: string): void {
    this.links[index] = value;
    this.onChange(this.links);
  }

  trackByIndex(index: number, item: any): number {
    return index;
  }
}
