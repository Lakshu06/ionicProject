import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

 data: object =  { "categories": [{ "title" : "winterwear"},{"title": "topwear" },{"title":"bottomwear"},
                                            { "title":"flats" },{ "title":"heels" },{ "title":"shoes" }
],
                                 
                           "pricerange" : [{ "title" :"500" },{ "title" :"1000" },{ "title" :"10000" }],
                   
                  
               "color" : [{ "title" :" black"},{ "title" :" blue"},{ "title" :" green"} ]
                              
               };
   public filteritem : any;
  constructor() { }
 
 }
