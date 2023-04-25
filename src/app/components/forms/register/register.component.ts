import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Driver } from "src/app/models/driver";
import { DriverService } from "src/app/services/driverService/driver.service";
import { LoginService } from "src/app/services/loginService/login.service";
import { TokenService } from "src/app/services/tokenService/token.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent {
  firstFormGroup: FormGroup = new FormGroup({});
  secondFormGroup: FormGroup = new FormGroup({});
  isLinear = true;

  constructor(
    private loginService: LoginService,
    private driverService: DriverService,
    private tokenService: TokenService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  driverInfo(myForm: FormGroup) {
    this.firstFormGroup = myForm;
  }

  vehicleInfo(myForm: FormGroup) {
    this.secondFormGroup = myForm;
  }

  async registerDriver() {
    let token: string;
    const driver: Driver = {
      name: this.firstFormGroup.get("name")?.value,
      lastName: this.firstFormGroup.get("lastName")?.value,
      email: this.firstFormGroup.get("email")?.value,
      dni: this.firstFormGroup.get("dni")?.value,
      phone: this.firstFormGroup.get("phone")?.value,
      age: this.firstFormGroup.get("age")?.value,
      vehicle: {
        plate: this.secondFormGroup.get("plate")?.value,
        brand: this.secondFormGroup.get("brand")?.value,
        model: this.secondFormGroup.get("model")?.value,
        color: this.secondFormGroup.get("color")?.value,
        type: this.secondFormGroup.get("type")?.value,
        totalCapacity: this.secondFormGroup.get("totalCapacity")?.value,
      },
    };

    const credentials = {
      email: this.firstFormGroup.get("email")?.value,
      password: this.firstFormGroup.get("password")?.value,
    };

    let checkDriver = await this.verifyEmailDriver(credentials.email);

    if (!checkDriver) {
      this.loginService
        .register(credentials)
        .then(async (data) => {
          if (data) {
            token = (await data?.user.getIdToken()) || "";
            this.driverService.registerDriver(driver).subscribe((data) => {
              localStorage.setItem("token", token);
              setTimeout(() => {
                this.tokenService.setToken(token);
                this.router.navigateByUrl("/dashboard");
              }, 500);
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  async verifyEmailDriver(email: string) {
    let checkDriver: boolean = false;
    try {
      await this.driverService
        .getDriverByEmail(email)
        .toPromise()
        .then((data) => {
          if (data) {
            checkDriver = true;
            this.snackBar.open("Email already exist", "Cerrar", {
              duration: 3000,
            });
          }
        });
    } catch (error) {
      console.error("OK");
    }
    return checkDriver;
  }
}
