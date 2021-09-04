import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'csrf-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
