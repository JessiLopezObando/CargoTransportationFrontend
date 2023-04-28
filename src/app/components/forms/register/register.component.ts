import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
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
export class RegisterComponent implements OnInit {
  firstFormGroup: FormGroup = new FormGroup({});
  secondFormGroup: FormGroup = new FormGroup({});
  isLinear = true;

  constructor(
    private loginService: LoginService,
    private driverService: DriverService,
    private tokenService: TokenService,
    private router: Router,
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.firstFormGroup =  this.formBuilder.group({
      name: ['', [Validators.required],]
    });
    this.secondFormGroup =  this.formBuilder.group({
      plate: ['', [Validators.required],]
    });
  }

  

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

      this.driverService
        .registerDriver(driver)
        .toPromise()
        .then(async (data) => {
          if (data) {
            this.loginService.register(credentials).then(async (data) => {  
            token = (await data?.user.getIdToken()) || "";
              localStorage.setItem("token", token);
              setTimeout(() => {
                this.tokenService.setToken(token);
                this.router.navigateByUrl("/dashboard");
              }, 500);
            })
          }
        })
        .catch((error: HttpErrorResponse) => {
          this.snackBar.open( error.error, "Cerrar", {
            duration: 3000,
          });
        });
    
  }

 
}
