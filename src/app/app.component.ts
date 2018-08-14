import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  

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

  valueSubscription: Subscription;


  ngOnInit(): void {
    this.form = new FormGroup({
      'methods': new FormArray([])
    });

    this.valueSubscription = this.form.valueChanges.subscribe(
      (formValue) => {
        console.log(formValue);
      }
    );

    console.log(this.form);
  }


  addMethod() {
    const group = new FormGroup({
      'methodName': new FormControl(null, Validators.required),
      'operations': new FormArray([])
    });

    (<FormArray>this.form.controls['methods']).push(group);


    console.log(this.form);

  }

  ngOnDestroy(): void {
    this.valueSubscription.unsubscribe();
  }
}
