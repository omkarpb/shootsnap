import { Component, OnInit } from '@angular/core';
import { faUpload, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation-header',
  templateUrl: './navigation-header.component.html',
  styleUrls: ['./navigation-header.component.scss']
})
export class NavigationHeaderComponent implements OnInit {
  logoPath = '';
  faUpload = faUpload;
  faSignInAlt = faSignInAlt;

  constructor() { }
  ngOnInit() {
    this.logoPath = 'src/assets/logo.png';
  }

}
