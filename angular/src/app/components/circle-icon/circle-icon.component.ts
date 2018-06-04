import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-circle-icon',
  templateUrl: './circle-icon.component.html',
  styleUrls: ['./circle-icon.component.scss']
})
export class CircleIconComponent implements OnInit {
  @Input()
  public icon = '';

  @Input()
  public alt = '';

  constructor() { }

  ngOnInit() {
  }
}
