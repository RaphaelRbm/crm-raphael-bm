import { Component, OnInit } from '@angular/core';

import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { faHome} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faPhone} from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;
  faGoogle = faGoogle;
  faFacebookF = faFacebookF
  faTwitter = faTwitter;
  faHome = faHome;
  faEnvelope = faEnvelope;
  faPhone = faPhone;

  constructor() { }

  ngOnInit(): void {
  }

}
