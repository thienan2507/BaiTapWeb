import { Component } from '@angular/core';
import { CatalogService } from '../service-bai14/catalog-service';

@Component({
  selector: 'app-product-catalog',
  standalone: false,
  styleUrl: './product-catalog.css',
  templateUrl: './product-catalog.html',
})
export class ProductCatalog {
  public categories: any;
  constructor(private cservices: CatalogService){
    this.categories = cservices.getCategories();
  }
}
