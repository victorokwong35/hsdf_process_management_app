import { Component } from '@angular/core';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent {

  dashboardIcon: string = "../../../assets/images/icons/layout.png"
  allRequestIcon: string = "../../../assets/images/icons/quote-request.png"
  pendingRequestIcon: string = "../../../assets/images/icons/pending-tasks.png"
  approvedRequestIcon: string = "../../../assets/images/icons/approval.png"
  disbursedIcon: string = "../../../assets/images/icons/credit-card.png"
  logoutIcon: string = "../../../assets/images/icons/exit.png"
}
