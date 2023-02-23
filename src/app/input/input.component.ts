import { ChangeDetectionStrategy, Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    }
  ]
})
export class InputComponent implements OnInit, ControlValueAccessor {
  public inputControl = new FormControl();
  public onChange!: any;
  public onTouched!: any;
  ngOnInit(): void {
    this.inputControl.valueChanges.subscribe((val) => {
      if (this.onChange) {
        this.onChange(val);
      }
    });
  }

  writeValue(val: string | undefined): void {
    this.inputControl.setValue(val)
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
