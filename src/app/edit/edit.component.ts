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


  //profile

  @Input() public name!: string;
  @Output() nameChange = new EventEmitter<string>();
  
  changeName(name: string){
    this.nameChange.emit(name);
  }

  @Input() public bio!: string;
  @Output() bioChange = new EventEmitter<string>();
  
  changeBio(bio: string){
    this.bioChange.emit(bio);
  }

  @Input() public twitter!: string;
  @Output() twitterChange = new EventEmitter<string>();
  
  changeTwitter(twitter: string){
    this.twitterChange.emit(twitter);
  }

  @Input() public instagram!: string;
  @Output() instagramChange = new EventEmitter<string>();
  
  changeInstagram(instagram: string){
    this.instagramChange.emit(instagram);
  }

  @Input() public linkedin!: string;
  @Output() linkedinChange = new EventEmitter<string>();
  
  changeLinkedin(linkedin: string){
    this.linkedinChange.emit(linkedin);
  }

  @Input() public link!: string;
  @Output() linkChange = new EventEmitter<string>();
  
  changeLink(link: string){
    this.linkChange.emit(link);
  }


  //theme

  @Input() public nameColor!: string;
  @Output() nameColorChange = new EventEmitter<string>();
  
  changeNameColor(nameColor: string){
    this.nameColorChange.emit(nameColor);
  }

  @Input() public avatarShape!: string;
  @Output() avatarShapeChange = new EventEmitter<string>();
  
  changeAvatarShape(avatarShape: string){
    this.avatarShapeChange.emit(avatarShape);
  }

  @Input() public bioColor!: string;
  @Output() bioColorChange = new EventEmitter<string>();
  
  changeBioColor(bioColor: string){
    this.bioColorChange.emit(bioColor);
  }

  @Input() public linkBRadius!: number;
  @Output() linkBRadiusChange = new EventEmitter<number>();
  
  changeLinkBRadius(linkBRadius: number){
    this.linkBRadiusChange.emit(linkBRadius);
  }

  @Input() public linkBGColor!: string;
  @Output() linkBGColorChange = new EventEmitter<string>();
  
  changeLinkBGColor(linkBGColor: string){
    this.linkBGColorChange.emit(linkBGColor);
  }

  @Input() public linkColor!: string;
  @Output() linkColorChange = new EventEmitter<string>();
  
  changeLinkColor(linkColor: string){
    this.linkColorChange.emit(linkColor);
  }
}