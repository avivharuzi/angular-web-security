import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { NavbarLink } from './navbar-link';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  @Input() title: string = '';
  @Input() navbarLinks: NavbarLink[] = [];
  @Output() navbarAction: EventEmitter<string> = new EventEmitter<string>();
}
