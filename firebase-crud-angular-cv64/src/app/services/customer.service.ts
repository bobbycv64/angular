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

    // retreive all customers from the firebase database from the customers node collection
    this.customerList = this.angularFireDatabase.list('customers');

    let rootRef = this.angularFireDatabase.list('customers', ref => ref);

    //let oneRef = rootRef.limitToFirst(2);
    this.customerList = this.angularFireDatabase.list('customers', ref => ref.limitToFirst(2));
    this.customerList = this.angularFireDatabase.list('customers', ref => ref.orderByChild('email').equalTo('bobby@test.com'));
    this.customerList = this.angularFireDatabase.list('customers', ref => ref.orderByKey().limitToFirst(2));
    this.customerList = this.angularFireDatabase.list('customers', ref => ref.orderByChild('fullName').startAt('b').endAt('D\uf8ff'));
    this.customerList = this.angularFireDatabase.list('customers', ref => ref.orderByChild('location').endAt('3333'));
    this.customerList = this.angularFireDatabase.list('customers', ref => ref.orderByChild('location').startAt('2222'));
    this.customerList = this.angularFireDatabase.list('customers', ref => ref.orderByChild('location').startAt('2222').endAt('3333'));
    //this.customerList = this.angularFireDatabase.list('customers', ref => ref.orderByChild('age_location').equalTo('22_2222'));

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
