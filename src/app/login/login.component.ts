import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AuthenticationService } from '../../../node_modules/@alfresco/adf-core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private location: Location, private auth: AuthenticationService) {}

  ngOnInit() {
    if (this.auth.isEcmLoggedIn()) {
      this.location.forward();
    }
  }
}
