import { Component, OnInit } from '@angular/core';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;

  public user!: { name: string, bio: string, twitter: string, instagram: string, linkedin: string, link: string };
  public theme!: { avatarShape: string, nameColor: string, bioColor: string, linkBRadius: number, linkBGColor: string, linkColor: string};

  ngOnInit() {
    this.user = {
      name: 'Nick Gerard',
      bio: 'Building Norby',
      twitter: '@nickgerard',
      instagram: 'ngerard',
      linkedin: 'nickgerard',
      link: 'https://google.com'
    };

    this.theme = {
      avatarShape: 'circle',
      nameColor: '#2a464b',
      bioColor: '#717a7c',
      linkBRadius: 5,
      linkBGColor: '#023741',
      linkColor: '#FFFFFF'
    };  
  }
}