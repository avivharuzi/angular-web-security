import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  DomSanitizer,
  SafeHtml,
  SafeResourceUrl,
  SafeUrl,
} from '@angular/platform-browser';

@Component({
  selector: 'xss-demo-bypass-security',
  templateUrl: './bypass-security.component.html',
  styleUrls: ['./bypass-security.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BypassSecurityComponent {
  injectHTML = `Simple <b>XSS attack</b> <img src="" alt="" onerror="alert('XSS Attack using HTML img')" />`;
  attackerURL = `javascript:alert('XSS Attack using URL')`;
  resourceURL = 'https://www.youtube.com/embed/e7HBypw4lhY';

  bypassInjectedHTML: SafeHtml;
  bypassAttackerURL: SafeUrl;
  bypassResourceURL: SafeResourceUrl;

  constructor(private domSanitizer: DomSanitizer) {
    this.bypassInjectedHTML = this.domSanitizer.bypassSecurityTrustHtml(
      this.injectHTML
    );
    this.bypassAttackerURL = this.domSanitizer.bypassSecurityTrustUrl(
      this.attackerURL
    );
    this.bypassResourceURL = this.domSanitizer.bypassSecurityTrustResourceUrl(
      this.resourceURL
    );
  }
}
