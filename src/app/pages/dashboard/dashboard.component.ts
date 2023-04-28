import { Component, OnInit } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Driver } from "src/app/models/driver";
import { ShippingOrder } from "src/app/models/shippingOrder";
import { DriverService } from "src/app/services/driverService/driver.service";
import { ShippingOrderService } from "src/app/services/shippingOrderService/shipping-order.service";
import { TokenService } from "src/app/services/tokenService/token.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  driver: Driver | undefined;
  pendingShippingOrders: ShippingOrder[] = [];
  acceptedShippingOrders: ShippingOrder[] = [];
  loadingIncoming: boolean = false;
  loadingAccepted: boolean = false;

  constructor(
    private driverService: DriverService,
    private shippingOrderService: ShippingOrderService,
    private jwtAuth: JwtHelperService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.refreshData();
  }

  onShippingOrderAccepted(ticketId: string) {
    this.shippingOrderService
      .acceptedShippingOrder(ticketId)
      .subscribe((response: any) => {
        if (response) {
          this.driverService
            .acceptedShippingOrder(response.driverID, response.weight)
            .subscribe((response: any) => {
              this.refreshData();
            });
        }
      });
  }

  onShippingOrderRejected(ticketId: string) {
    this.shippingOrderService
      .refuseShippingOrder(ticketId)
      .subscribe((response: any) => {
        this.refreshData();
      });
  }

  onShippingOrderDelivered(ticketId: string) {
    this.shippingOrderService
      .deliveredShippingOrder(ticketId)
      .subscribe((response: any) => {
        if (response) {
          this.driverService
            .deliveredShippingOrder(response.driverID, response.weight)
            .subscribe((response: any) => {
              this.refreshData();
            });
        }
      });
  }

  refreshData() {
    this.tokenService.loadToken();
    this.tokenService.getToken().subscribe((token) => {
      if (token) {
        this.loadingIncoming = true;
        this.loadingAccepted = true;
        this.driverService
          .getDriverByEmail(this.jwtAuth.decodeToken(token).email)
          .subscribe((customer: Driver) => {
            this.driver = customer;

            this.shippingOrderService
              .getShippingOrdersForDriverByStatus(this.driver.id!, "pending")
              .subscribe((shippingOrders: any) => {
                this.pendingShippingOrders = shippingOrders;
                this.loadingIncoming = false;
              });

            this.shippingOrderService
              .getShippingOrdersForDriverByStatus(this.driver.id!, "accepted")
              .subscribe((shippingOrders: any) => {
                this.acceptedShippingOrders = shippingOrders;
                this.loadingAccepted = false;
              });
          });
      }
    });
  }
}
