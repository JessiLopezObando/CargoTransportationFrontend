import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Driver } from 'src/app/models/driver';
import { VehicleComponent } from '../../forms/vehicle/vehicle.component';
import { EditVehicleFormComponent } from '../../forms/edit-vehicle-form/edit-vehicle-form.component';

@Component({
  selector: 'app-edit-vehicle-buttom',
  templateUrl: './edit-vehicle-buttom.component.html',
  styleUrls: ['./edit-vehicle-buttom.component.scss']
})
export class EditVehicleButtomComponent {

  @Input() driver:Driver | undefined;
  @Output() infoDriver = new EventEmitter<any>();

  constructor(
    public dialog: MatDialog,
  ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(EditVehicleFormComponent, {
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
