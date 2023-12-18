import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalContentComponent } from './modal-content/modal-content.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  modalRef!: BsModalRef;


  constructor(private modalService: BsModalService) { }

  openModal() {
    this.modalRef = this.modalService.show(ModalContentComponent, {
      class: 'modal-lg', // Use 'modal-lg' for a large modal
      backdrop: 'static',
      keyboard: false,
    });

  }
}
