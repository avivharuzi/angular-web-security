import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'csp-demo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  scriptInjection = `<h1>Trying to fetch</h1><img src="" alt="" onerror="fetch('https://jsonplaceholder.typicode.com/posts')" />`;
  safeScriptInjection: SafeHtml;

  constructor(private domSanitizer: DomSanitizer) {
    this.safeScriptInjection = this.domSanitizer.bypassSecurityTrustHtml(
      this.scriptInjection
    );
  }
}
