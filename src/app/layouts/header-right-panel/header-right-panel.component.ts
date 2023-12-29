import { Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Subscription } from 'rxjs';
import { Userdata } from 'src/app/model/userdata';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-header-right-panel',
  templateUrl: './header-right-panel.component.html',
  styleUrls: ['./header-right-panel.component.css']
})
export class HeaderRightPanelComponent {
  constructor(private tokenService: TokenService, private auth: AuthService, private jwtHelper: JwtHelperService) {

  }
  // private userDataSubscription: Subscription | undefined;
  title: string = "Dashboard"
  user_role: string = "Admin"
  userData: any
  userName!: any
  userEmail!: any
  user_id: number | undefined

  ngOnInit() {
    this.auth.getUserData(this.userData).subscribe((data: any) => {
      localStorage.setItem('user_name', data.name)
      localStorage.setItem('user_email', data.email)
      localStorage.setItem('user_id', data.id)

      this.userName = localStorage.getItem("user_name")
      this.userEmail = localStorage.getItem("user_email")
    })

  }


}
