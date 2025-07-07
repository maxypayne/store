import {Component, inject, OnInit, Signal, signal, WritableSignal} from '@angular/core';
import {ProductCard} from './product-card.model';
import {ProductService} from '../services/product.service';
import {MatCard, MatCardContent, MatCardImage} from '@angular/material/card';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-visualise-products',
  imports: [
    MatCard,
    MatCardImage,
    MatCardContent,
    MatButton
  ],
  templateUrl: './visualise-products.html',
  styleUrl: './visualise-products.scss'
})
export class VisualiseProducts implements OnInit {
  products: WritableSignal<ProductCard[]> = signal([]);
  private productService = inject(ProductService);
  ngOnInit(): void {
    this.productService.getProducts(
      0, 50
    ).subscribe(table => {
      this.products.set(table.data);
    });
  }
}
