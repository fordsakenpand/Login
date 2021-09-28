import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public fb: FormBuilder) {

   const usuario = JSON.parse(localStorage.getItem('usuario'));

  }

    ngOnInit() {
  }

}
