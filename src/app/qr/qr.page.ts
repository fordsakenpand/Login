import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QRPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async scaner() {
    const alert = await this.alertController.create({
      header: 'Funcion no disponible',
      buttons: ['Aceptar']
    });

    await alert.present();

    console.log('hola');
  }

}
