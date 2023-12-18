import { Component } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent {
  modalRef!: BsModalRef;

  constructor(private modalService: BsModalService) { }

  closeModal() {
    this.modalService.hide();
  }
}

