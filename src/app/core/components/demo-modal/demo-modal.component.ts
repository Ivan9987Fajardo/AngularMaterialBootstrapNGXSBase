import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-demo-modal',
  templateUrl: './demo-modal.component.html',
  styleUrls: ['./demo-modal.component.scss'],
})
export class DemoModalComponent implements OnInit {
  @Input() user!: User;
  @Output() readonly passEntry: EventEmitter<any> = new EventEmitter();

  constructor(public activeModal: NgbActiveModal) {}
  /**
   * Initializes the DemoModalComponent
   */
  ngOnInit(): void {}
  /**
   * Returns the user object back to the parent component
   */
  returnUser() {
    this.passEntry.emit(this.user);
  }
}
