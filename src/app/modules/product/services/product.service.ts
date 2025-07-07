import {inject, Injectable} from '@angular/core';
import {ProductCard} from '../visualise-products/product-card.model';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {environment} from '../../../../environments/environments';
import {GenericTable} from '../../../shared/models/generic-table';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API_URL = environment.api_url;

  private http: HttpClient = inject(HttpClient);

  getProducts(page: number, size: number): Observable<GenericTable<ProductCard>> {
    return this.http.get<GenericTable<ProductCard>>(`${this.API_URL}/products?page=${page}&size=${size}`);
  }
}
