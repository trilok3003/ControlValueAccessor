import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-control-value-accessor',
  templateUrl: './control-value-accessor.component.html',
  styleUrls: ['./control-value-accessor.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ControlValueAccessorComponent),
      multi: true
    }
  ]
})
export class ControlValueAccessorComponent implements ControlValueAccessor {
  value: string;
  constructor() {}

  onChange = (_: any) => {};
  onTouch = () => {};
  isDisabled: boolean;

  // Valor inicial
  writeValue(value: any): void {
    if (value) {
      this.value = value;
    }
  }

  // Registro un cambio
  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  // Registra un toque sobre el input
  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

  // Setea el estado
  setDisabledState(isDisabled: boolean) {
    this.isDisabled = isDisabled;
  }

  onChangeInput(event) {
    this.value = event.target.value;
    this.onTouch();
    this.onChange(this.value);
  }
}
