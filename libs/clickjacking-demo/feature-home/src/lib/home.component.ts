import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'clickjacking-demo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  isTransferred: boolean = false;

  transfer(): void {
    this.isTransferred = true;
  }
}
