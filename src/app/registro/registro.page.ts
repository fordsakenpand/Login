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
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formulariologin: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController) {
    this.formulariologin= this.fb.group({
      nombre: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      confimacionpassword: new FormControl('',Validators.required)
      });
    }

  ngOnInit() {
  }

  async crear() {
    if(this.formulariologin.invalid){
      const alert = await this.alertController.create({
        header: 'Datos imcompletos',
        message: 'Se deben completar todos los campos',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }

    const usuario = {
      nombre: this.formulariologin.value.nombre,
      password: this.formulariologin.value.password
    };

    localStorage.setItem('usuario',JSON.stringify(usuario));
    console.log('Creado');
    this.navCtrl.navigateRoot('login');
  }
}
