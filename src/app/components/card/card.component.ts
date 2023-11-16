import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() data:any;
  @Output() onClickid = new EventEmitter<string>();


  onClick(id:string) {
   this.onClickid.emit(id);
  }
 
}
