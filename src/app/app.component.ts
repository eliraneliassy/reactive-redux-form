import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  methodOption = [{ label: 'affine', value: 'Affine' },
  { label: 'pixel', value: 'Pixel' },
  { label: 'custom', value: 'Custom' }];
  map = {
    'affine': ['bypass', 'scale', 'rotate', 'shear', 'mirror-h', 'mirror-v'],
    'pixel': ['bypass', 'blur', 'noise', 'recolor'],
    'custom': ['bypass']
  };

  form: FormGroup;
  steps = 0;


  ngOnInit(): void {
    this.form = new FormGroup({});
  }


  addMethod() {
    const group = new FormGroup({
      'method': new FormControl(null, Validators.required),
      'operations': new FormArray([])
    });

    this.form.addControl('steps ' + this.steps++, group);

    console.log(this.form);

  }
}
