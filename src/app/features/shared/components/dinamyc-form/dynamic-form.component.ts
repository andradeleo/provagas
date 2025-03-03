import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, forwardRef, inject, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { LocalStorageService } from '../../../../../core/localstorage/local-storage.service';
import { LocalStorageKeys } from '../../../../constants/local-storage-keys';

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
export class DynamicFormComponent implements AfterViewInit, ControlValueAccessor  {
  @Input() buttonText: string = "Adicionar";

  public storage = inject(LocalStorageService);

  public dynamicData: string[] = [];

  public ngAfterViewInit(): void {
    if(!this.storage.get(LocalStorageKeys.professionalFormData)) {
      this.addDynamicData();
    }
  }

  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(obj: any): void {
    this.dynamicData = obj || [];
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  addDynamicData(): void {
    this.dynamicData.push("");
    this.onChange(this.dynamicData);
  }

  // Remove um link pelo índice
  removeDynamicData(index: number): void {
    this.dynamicData.splice(index, 1);
    this.onChange(this.dynamicData);
  }

  // Atualiza o valor do link individual
  atualizar(index: number, value: string): void {
    this.dynamicData[index] = value;
    this.onChange(this.dynamicData);
  }

  trackByIndex(index: number, item: any): number {
    return index;
  }
}
