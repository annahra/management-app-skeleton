import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private loadingCtrl: LoadingController,
    private auth: AuthService, private alertCtrl: AlertController, 
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['annah@btt.com', [Validators.required, Validators.email]],
      password: ['654321', [Validators.required, Validators.minLength(8)]]
    });
  }

  async login() {
    let loading = await this.loadingCtrl.create({
      message: 'Loading...'
    });
    await loading.present();

    this.auth.login(this.loginForm.value).subscribe(
      user => {
        loading.dismiss();
        let role = user['role'];
        if (role == 'PRINCIPAL' || role == 'TEACHER') {
          this.router.navigateByUrl('/admin');
        } else if (role == 'STUDENT') {
          this.router.navigateByUrl('/student');
        }
      },
      async err => {
        loading.dismiss();

        let alert = await this.alertCtrl.create({
          header: 'Error',
          message: err.error.message,
          buttons: ['OK']
        });
        alert.present();
      }
    );
  }

}
