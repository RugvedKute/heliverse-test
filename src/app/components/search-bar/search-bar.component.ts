import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  @Output() eventValue = new EventEmitter<string>();

  searchTerm: any;

  ngOnInit(): void {}

  emitSearchValue(event: any) {
    this.eventValue.emit(event.target.value);
  }
}