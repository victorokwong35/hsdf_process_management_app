import { Component } from '@angular/core';

@Component({
  selector: 'app-header-right-panel',
  templateUrl: './header-right-panel.component.html',
  styleUrls: ['./header-right-panel.component.css']
})
export class HeaderRightPanelComponent {
  title: string = "Dashboard"
  profileName: string = "Victor Okwong"
  user_role: string = "Admin"
}
