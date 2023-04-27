import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Driver } from "src/app/models/driver";
import { DriverService } from "src/app/services/driverService/driver.service";
import { ShippingOrderService } from "src/app/services/shippingOrderService/shipping-order.service";
import { MatStepper } from "@angular/material/stepper";

@Component({
  selector: "app-delivery-page",
  templateUrl: "./delivery-page.component.html",
  styleUrls: ["./delivery-page.component.scss"],
})
export class DeliveryPageComponent implements OnInit {
  requestDeliveryForm: FormGroup = new FormGroup({});
  drivers: Driver[] = [];
  cost: number = 0;

  @ViewChild("stepper") stepper: MatStepper | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private driverService: DriverService,
    private shippingOrderService: ShippingOrderService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.requestDeliveryForm = this.formBuilder.group({
      driverID: [""],
      customerName: ["", Validators.required],
      customerEmail: ["", [Validators.required, Validators.email]],
      origin: ["", Validators.required],
      destination: ["", Validators.required],
      packageReceiver: ["", Validators.required],
      weight: ["", Validators.required],
      minutes: ["", Validators.required],
      description: ["", Validators.required],
    });
  }

  get customerName() {
    return this.requestDeliveryForm.get("customerName");
  }

  get customerEmail() {
    return this.requestDeliveryForm.get("customerEmail");
  }

  get origin() {
    return this.requestDeliveryForm.get("origin");
  }

  get destination() {
    return this.requestDeliveryForm.get("destination");
  }

  get packageReceiver() {
    return this.requestDeliveryForm.get("packageReceiver");
  }

  get weight() {
    return this.requestDeliveryForm.get("weight");
  }

  get minutes() {
    return this.requestDeliveryForm.get("minutes");
  }

  get description() {
    return this.requestDeliveryForm.get("description");
  }

  setDriverId(driverId: string) {
    this.requestDeliveryForm.get("driverID")?.setValue(driverId);
  }

  getAvailableVehicles() {
    console.log(this.requestDeliveryForm.value);
    this.driverService
      .getAvailableDriversWihtCapacity(
        this.requestDeliveryForm.get("weight")?.value
      )
      .subscribe((response: any) => {
        this.drivers = response;
      });
  }

  getQuote() {
    this.shippingOrderService
      .quoteShippingOrder(
        this.requestDeliveryForm.get("minutes")?.value,
        this.requestDeliveryForm.get("weight")?.value
      )
      .subscribe((res) => {
        this.cost = Number(res);
      });
  }

  generateOrder() {
    this.shippingOrderService
      .generateShippingOrder(this.requestDeliveryForm.value)
      .subscribe((response: any) => {
        this.snackBar.open("Order send", "Cerrar", {
          duration: 3000,
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      });
  }
}
