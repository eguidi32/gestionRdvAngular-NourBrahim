import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginRequest} from '@core/models/user.model';
import { SecurityService } from '@core/services/security.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  UserLogin: UserLoginRequest = {
    email: '',
    password: ''
  }

  constructor(private securityService: SecurityService,
    private router: Router) {

  }
  errorMessage: string = '';
  Onlogin(formCtrl:NgForm): void {
    if (formCtrl.invalid) {
      this.errorMessage = 'Veuillez remplir correctement le form.';
      return;
    }
    const logiResult = this.securityService.login(this.UserLogin);
    if (logiResult != null) {
      this.router.navigate(['/private/dash']);
    }
  }

  isFieldInvalid(fieldName: string, formCtrl: NgForm): boolean{
    const fieldCtrl = formCtrl?.controls[fieldName];
    return !!(fieldCtrl && fieldCtrl.invalid && (fieldCtrl.dirty || fieldCtrl.touched));
  }


}
