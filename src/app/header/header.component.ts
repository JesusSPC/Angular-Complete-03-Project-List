import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pro-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();
  collapsed = true;

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}