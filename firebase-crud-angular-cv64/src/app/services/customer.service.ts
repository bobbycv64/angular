import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private angularFireDatabase: AngularFireDatabase) { }

  customerList: AngularFireList<any>;

  form = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
    location: new FormControl('')
  });

  getCustomers() {

    // retreive all customers from the firebase database from the customers node
    this.customerList = this.angularFireDatabase.list('customers');

    // return from an observable (snapshotChanges) from customerList
    return this.customerList.snapshotChanges();
  }

  // create unique key for the firebase database
  insertCustomer(customer) {
    this.customerList.push({
      fullName: customer.fullName,
      email: customer.email,
      mobile: customer.mobile,
      location: customer.location
    });
  }

  populateForm(customer) {
    this.form.setValue(customer);
  }

  updateCustomer(customer) {
    this.customerList.update(customer.$key,
      {
        fullName: customer.fullName,
        email: customer.email,
        mobile: customer.mobile,
        location: customer.location
      });
  }

  deleteCustomer($key: string) {
    this.customerList.remove($key);
  }
}
