import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'csrf-demo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
