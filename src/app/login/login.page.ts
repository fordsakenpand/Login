import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formulariologin: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController) {
    this.formulariologin= this.fb.group({
      nombre: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    });

  }

  ngOnInit() {
  }

  async ingresar() {
    const usuario = JSON.parse(localStorage.getItem('usuario'));

    if(usuario.nombre === this.formulariologin.value.nombre && usuario.password === this.formulariologin.value.password){
      console.log('Ingresado');
      localStorage.setItem('ingresado','true');
      this.navCtrl.navigateRoot('home');
    }else{
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Los datos ingresados son incorrectos',
        buttons: ['Aceptar']
      });

      await alert.present();

    }
  }

}
