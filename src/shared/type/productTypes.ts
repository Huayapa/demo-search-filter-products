import type { API } from "nouislider";

export type Category = ''| 'Sport' | 'Technology' | 'Clothing' | 'Food' | 'Health';
export const categorySelect: Category[] = ['Sport' , 'Technology' , 'Clothing' ,'Food', 'Health'];

export type Brand = ''| 'Samsung' | 'Adidas' | 'Zara' | 'San Fernando' | 'Avon';
export const brandSelect: Brand[] = ['Samsung', 'Adidas','Zara', 'San Fernando', 'Avon'];

export type Tags =
  ''
  | 'new'
  | 'sale'
  | 'bestseller'
  | 'limited'
  | 'featured'
  | 'out-of-stock'
  | 'pre-order';
export const tagsSelect: Tags[] = ['new', 'sale', 'bestseller', 'limited', 'featured', 'out-of-stock', 'pre-order'];

export interface IProduct {
  id: number;
  name: string;
  brand: Brand;
  stock: number;
  price: number;
  category: Category;
  discount?: number;
  createdAt: Date;
  tags?: Tags[];
}

export interface IProductFilterElements {
  search: HTMLInputElement;
  brand: HTMLSelectElement;
  category: HTMLSelectElement;
  tag: HTMLSelectElement;
  priceRange: API;
}