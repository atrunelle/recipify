import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nutrition-macro',
  templateUrl: './nutrition-macro.component.html',
  styleUrls: ['./nutrition-macro.component.scss']
})
export class NutritionMacroComponent implements OnInit {
  @Input()
  public totalNutrients: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
