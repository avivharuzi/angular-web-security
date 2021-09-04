import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'xss-demo-default-sanitization',
  templateUrl: './default-sanitization.component.html',
  styleUrls: ['./default-sanitization.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultSanitizationComponent {
  injectHTML = `Simple <b>XSS attack</b> <img src="" alt="" onerror="alert('XSS Attack using HTML img')" />`;
  attackerURL = `javascript:alert('XSS Attack using URL')`;
  resourceURL = 'https://www.youtube.com/embed/AwjhMPbeD0Y';
}
