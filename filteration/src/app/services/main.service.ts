import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  filterdata: object =  {
    categories: [{"title": "winterwear"},{"title": "topwear" },
                   {"title":"bottomwear"},{"title":"footwear" }],
                                 
    pricerange : [{ "range" :"123" },{ "range" :"342" },{ "range" :"57654" }],
                   
                  
      color: [{ "colorType" :" black"},{ "colorType" :" black"},{ "colorType" :" black"},{ "colorType" :" black"} ]
                              
               };
  constructor() { }
}
