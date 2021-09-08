import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

import { User } from '@angular-web-security/csrf-api/data-access-users';

@Component({
  selector: 'csrf-demo-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  @Input() user: User | null = null;
  @Output() logout: EventEmitter<void> = new EventEmitter<void>();
}
