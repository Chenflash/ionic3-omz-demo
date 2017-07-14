import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'amc-list',
  templateUrl: 'ammic-favorite-list.html'
})
export class AmmicFavoriteListComponent {
  @Input() DataSource = [];
  @Input() TemplateOutlet: any;
  @Output() ItemClick = new EventEmitter<any>();
  @Output() ItemHold = new EventEmitter<any>();
  constructor() { }

  protected onItemHold(item, event) {
    this.ItemHold.emit(item);
  }

  protected onItemClick(item, event) {
    this.ItemClick.emit(item);
  }
}
