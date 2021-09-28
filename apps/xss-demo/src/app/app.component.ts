import { ChangeDetectionStrategy, Component } from '@angular/core';

import { NavbarLink } from '@angular-web-security/shared/ui-navbar';

@Component({
  selector: 'xss-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  links: NavbarLink[] = [
    {
      title: 'Default Sanitization',
      link: '/default-sanitization',
    },
    {
      title: 'Bypass Security',
      link: '/bypass-security',
    },
  ];
}
