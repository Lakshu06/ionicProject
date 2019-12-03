import { PipeTransform, Pipe } from '@angular/core';
import { createOfflineCompileUrlResolver } from '@angular/compiler';


@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], arrdata:any[]): any[] {

        if (!items || !arrdata) {
            return items;
        }
        let newarr=[];

        items.forEach(element => {
            if(arrdata.includes(element.title)){
                newarr.push(element);
               
            }
        });

        return newarr;

        // return items.filter(item => item.title.indexOf(arrdata.forEach(function(i){
        //     console.log(i);
        //     // item.includes("topwear")
        //   })) !== -1);
        //           debugger;
    }
}
