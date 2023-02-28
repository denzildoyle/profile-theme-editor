import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  
  public show:boolean = false;
  
  toggle() {
    this.show = !this.show;
  }

  @Input() public user!: any;
  @Output() userChange = new EventEmitter<any>();
  
  changeUser(){
    this.userChange.emit(this.user);
  }

  @Input() public theme!: any;
  @Output() themeChange = new EventEmitter<any>();
  
  changeTheme(){
    this.themeChange.emit(this.theme);
  }
}