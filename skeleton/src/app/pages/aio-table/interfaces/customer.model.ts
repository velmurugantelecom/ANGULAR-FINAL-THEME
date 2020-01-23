export class Customer {
  id: number;
  imageSrc: string;
  first_name: string;
  lastName: string;
  street: string;
  zipcode: number;
  city: string;
  phoneNumber: string;
  mail: string;
  labels: any;

  constructor(customer) {
    this.id = customer.id;
    this.imageSrc = customer.imageSrc;
    this.first_name = customer.first_name;
    this.lastName = customer.lastName;
    this.street = customer.street;
    this.zipcode = customer.zipcode;
    this.city = customer.city;
    this.phoneNumber = customer.phoneNumber;
    this.mail = customer.mail;
    this.labels = customer.labels;
  }

  get name() {
    let name = '';

    if (this.first_name && this.lastName) {
      name = this.first_name + ' ' + this.lastName;
    } else if (this.first_name) {
      name = this.first_name;
    } else if (this.lastName) {
      name = this.lastName;
    }

    return name;
  }

  set name(value) {
  }

  get address() {
    return `${this.street}, ${this.zipcode} ${this.city}`;
  }

  set address(value) {
  }
}
