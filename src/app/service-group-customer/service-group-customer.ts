import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service-bai18/customer-service';

@Component({
  selector: 'app-service-group-customer',
  standalone: false,
  styleUrl: './service-group-customer.css',
  templateUrl: './service-group-customer.html',
})
export class ServiceGroupCustomer implements OnInit {
  public customerGroup: any[]=[];
  public errMessage: string='';
  constructor(private _service: CustomerService){}
  ngOnInit(): void {
    this._service.getGroupCustomers().subscribe({
      next: (data) => {
        this.customerGroup = data;
      },
      error: (err) => {
        this.errMessage = err.message || err;
      }
    })
  }
}
