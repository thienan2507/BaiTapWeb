import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService13 } from '../services/product-service13';


@Component({
  selector: 'app-service-product-image-even',
  standalone: false,
  styleUrl: './service-product-image-even.css',
  templateUrl: './service-product-image-even.html',
})
export class ServiceProductImageEven {
    public products:any
    constructor(pservice: ProductService13,private router:Router){
      this.products=pservice.getProductsWithImages()
    }
    viewDetail(f:any)
    {
      this.router.navigate(['service-product-image-event',f.ProductId])
    }
}
