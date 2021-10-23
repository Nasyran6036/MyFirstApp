import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
public items: any=[];

  constructor() {
    this.items = [
      {title: "kelantan",image:"assets/kelantan.JPG", link: "kelantan"},
      {title: "terengganu",image:"assets/terengganu.JPG", link: "terengganu"},
      {title: "perak", image:"assets/perak.JPG", link: "perak"},
      {title: "selangor",image:"assets/selangor.JPG", link: "selangor"},
      {title: "kuala lumpur",image:"assets/kuala lumpur.JPG", link: "kuala-lumpur"},
    ];
   }

filterItems(searchTerm) {
  return this.items.filter(item => {
    return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
  });
 }
}