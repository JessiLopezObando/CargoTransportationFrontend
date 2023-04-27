import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Driver } from 'src/app/models/driver';
import { EditDriverFormComponent } from '../../forms/edit-driver-form/edit-driver-form.component';

@Component({
  selector: 'app-edit-driver-buttom',
  templateUrl: './edit-driver-buttom.component.html',
  styleUrls: ['./edit-driver-buttom.component.scss']
})
export class EditDriverButtomComponent {


  @Input() driver:Driver | undefined;
  @Output() infoDriver = new EventEmitter<any>();

  constructor(
    public dialog: MatDialog,
  ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(EditDriverFormComponent, {
      data: {
        driver: this.driver},
        minHeight: '40%',
        minWidth: '30%',
      
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result) this.infoDriver.emit(result);
    });
  }

}
