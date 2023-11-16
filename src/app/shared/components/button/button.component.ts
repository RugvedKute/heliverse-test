import { Component, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Output() buttonClick = new EventEmitter<any>();
  @Input() customLabel:any; 

  onSubmit() {
    this.buttonClick.emit('')
  }

}



