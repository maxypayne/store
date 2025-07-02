import {Component, inject, OnInit} from '@angular/core';
import {ProductCard} from './product-card.model';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-visualise-products',
  imports: [],
  templateUrl: './visualise-products.html',
  styleUrl: './visualise-products.scss'
})
export class VisualiseProducts implements OnInit {
  products: ProductCard[] = [];
  private productService = inject(ProductService);
  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => this.products = products);
  }
}
