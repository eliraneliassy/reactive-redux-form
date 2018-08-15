import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './reducers';
import { UpdateForm } from './app.actions';

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
    'Affine': ['bypass', 'scale', 'rotate', 'shear', 'mirror-h', 'mirror-v'],
    'Pixel': ['bypass', 'blur', 'noise', 'recolor'],
    'Custom': ['bypass']
  };

  form: FormGroup;
  steps = 0;
  methods = [];

  valueSubscription: Subscription;

  constructor(private store: Store<AppState>) {

  }


  ngOnInit(): void {
    this.form = new FormGroup({
      'methods': new FormArray([])
    });

    this.methods = (<FormArray>this.form.get('methods')).controls;

    console.log(this.form);

    this.valueSubscription = this.form.valueChanges.subscribe(
      (formValue) => {
        this.store.dispatch(new UpdateForm(formValue));
      }
    );
  }


  addMethod() {
    const group = new FormGroup({
      'methodName': new FormControl(null, Validators.required),
      'operations': new FormArray([])
    });

    (<FormArray>this.form.controls['methods']).push(group);
    console.log(this.form);

  }

  addOption(option, i, checked) {
    const control = (<FormGroup>(<FormArray>this.form.controls['methods']).controls[i]).controls['operations'] as FormArray;
    if (checked) {
      control.push(new FormControl(option));
    } else {
      const index = control.value.findIndex(x => x === option);
      control.removeAt(index);
    }


  }

  ngOnDestroy(): void {
    this.valueSubscription.unsubscribe();
  }
}
