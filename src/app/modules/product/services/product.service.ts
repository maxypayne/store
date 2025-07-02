import {inject, Injectable} from '@angular/core';
import {ProductCard} from '../visualise-products/product-card.model';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http: HttpClient = inject(HttpClient);

  getProducts(): Observable<ProductCard[]> {
    return of([
      {id: 1, description: "Description", title: "Name", imageUrl: 'url'}
    ]);
  }
}
