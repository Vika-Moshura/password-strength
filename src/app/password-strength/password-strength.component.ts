import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss']
})
export class PasswordStrengthComponent implements OnInit, OnChanges {
  @Input() password!: string;
  private colors = ['red', 'yellow', 'green', 'gray'];
  private matches = 0;
  public section0!: string;
  public section1!: string;
  public section2!: string;

  ngOnInit(): void {
    this.section0 = 'gray';
    this.section1 = 'gray';
    this.section2 = 'gray';
  }

  ngOnChanges(): void {
    this.checkPassword(this.password);
  }

  checkPassword(password: string): void {
    const listOfSymbols = /[$-/:-?{-~!"^_@`\[\]]+/;
    const letters = /[A-Za-z]+/.test(password);
    const numbers = /[0-9]+/.test(password);
    const symbols = listOfSymbols.test(password);
    const flags = [letters, numbers, symbols];

    this.setColors(3, 'gray');
    this.matches = 0;

    if (!password) {
      this.setColors(3, 'gray');
    }
    else if (password && password.length < 8) {
      this.section0 = 'red';
      this.section1 = 'red';
      this.section2 = 'red';
    }

    for (let flag of flags) {
      this.matches += flag === true ? 1 : 0;
    }

    if (password && password.length >= 8) {
      let color = this.getColor();
      this.setColors(color.index, color.name);
    }
  }

  getColor() {
    return {
      index: this.matches,
      name: this.colors[this.matches - 1]
    };
  }

  setColors(count: number, color: string) {
    for (let i = 0; i < count; i++) {
      (this as any)['section' + i] = color;
    }
  }
}
