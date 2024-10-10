import { CommonModule } from "@angular/common";
import { TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { IonicModule } from "@ionic/angular";
import { firstValueFrom } from "rxjs";
import { AppRoutingModule } from "src/app/app-routing.module";
import { AuthenticationService } from "src/app/services/authentication/authentication.service";
import { StatesService } from "src/app/services/states/states.service";
import { LoginPage } from "./login.page";

describe("LoginPage", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, IonicModule, AppRoutingModule, FormsModule],
      declarations: [LoginPage],
      providers: [StatesService, AuthenticationService],
    }).compileComponents();
  });

  it("should create", () => {
    let fixture = TestBed.createComponent(LoginPage);
    let component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it("should log in successfully", async () => {
    let fixture = TestBed.createComponent(LoginPage);

    var user = {
      nome: "Lorem ipsum",
      email: "lorem@ipsum.com",
      foto: "",
    };

    var authenticationServiceSpy = spyOn(TestBed.get(AuthenticationService), "signIn");
    authenticationServiceSpy.and.returnValue(user);

    var ionButton = fixture.debugElement.query(By.css("ion-button"));
    expect(ionButton).toBeTruthy();

    var stateService = TestBed.inject(StatesService);
    ionButton.nativeElement.click();

    var currentUser = await firstValueFrom(stateService.currentUser$);
    expect(currentUser).toBeTruthy();
  });
});
