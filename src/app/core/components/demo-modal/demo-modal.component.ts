import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-demo-modal',
  templateUrl: './demo-modal.component.html',
  styleUrls: ['./demo-modal.component.scss'],
})
export class DemoModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DemoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) {}

  /**
   * Triggers when the user clicks outside the modal
   */
  onNoClick(): void {
    this.dialogRef.close();
  }
  /**
   * Initializes the DemoModalComponent
   */
  ngOnInit(): void {}
}
