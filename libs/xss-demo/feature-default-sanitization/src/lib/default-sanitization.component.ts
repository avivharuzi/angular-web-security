import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'xss-demo-default-sanitization',
  templateUrl: './default-sanitization.component.html',
  styleUrls: ['./default-sanitization.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultSanitizationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
