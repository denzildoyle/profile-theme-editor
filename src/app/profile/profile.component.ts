import { Component } from '@angular/core';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;

  public user: { name: string, bio: string, twitter: string, instagram: string, linkedin: string, link: string } = {
    name: 'Nick Gerard',
    bio: 'Building Norby',
    twitter: '@nickgerard',
    instagram: 'ngerard',
    linkedin: 'nickgerard',
    link: 'https://google.com'
  };

  public theme: { avatarShape: string, nameColor: string, bioColor: string, linkBRadius: number, linkBGColor: string, linkColor: string} = {
    avatarShape: 'circle',
    nameColor: '#101010',
    bioColor: '#101010',
    linkBRadius: 5,
    linkBGColor: '#101010',
    linkColor: '#FFFFFF'
  };
}