import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MainService} from '../../_services/main.service'
@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {
  dataitem = [];
  items = [{id:'1', name: 'tom1', text: 'tasty' }, { id:'2',name: 'tom2', text: 'tasty' },
           { id:'3',name: 'tom3', text: 'tasty' },  {id:'4',name: 'tom4', text: 'tasty' },
           { id:'5',name: 'tom5', text: 'tasty' }, {id:'6', name: 'tom6', text: 'tasty' },
           {id:'7', name: 'tom7', text: 'tasty' }, {id:'8', name: 'tom8', text: 'tasty' },
           {id:'9', name: 'tom9', text: 'tasty' },  {id:'10', name: 'tom10', text: 'tasty' },
           { id:'11',name: 'tom11', text: 'tasty' }, {id:'12', name: 'tom12', text: 'tasty' },
           {id:'13', name: 'tom13', text: 'tasty' }, {id:'14', name: 'tom14', text: 'tasty' },
          {id:'15', name: 'tom15', text: 'tasty' },  { id:'16',name: 'tom16', text: 'tasty' },
          {id:'17', name: 'tom17', text: 'tasty' }, {id:'18', name: 'tom18 ', text: 'tasty' },
          { id:'19',name: 'tom19', text: 'tasty' }, {id:'20', name: 'tom20', text: 'tasty' },
          { id:'21',name: 'tom21', text: 'tasty' },  { id:'22',name: 'tom22', text: 'tasty' },
          {id:'23', name: 'tom23', text: 'tasty' }, { id:'24',name: 'tom14', text: 'tasty' },
          {id:'25', name: 'tom25', text: 'tasty' }, {id:'26', name: 'tom26', text: 'tasty' },
          {id:'27', name: 'tom27', text: 'tasty' },  {id:'28', name: 'tom28', text: 'tasty' },
          {id:'29', name: 'tom29', text: 'tasty' }, {id:'30', name: 'tom30', text: 'tasty' },
          {id:'31', name: 'tom31', text: 'tasty' }, {id:'32', name: 'tom32', text: 'tasty' }, 
          {id:'33', name: 'tom33', text: 'tasty' },  {id:'34', name: 'tom34', text: 'tasty' },
          {id:'35', name: 'tom35', text: 'tasty' }, {id:'36', name: 'tom36', text: 'tasty' },
          {id:'37', name: 'tom37', text: 'tasty' }, {id:'38', name: 'tom38', text: 'tasty' },
          {id:'39', name: 'tom39', text: 'tasty' },  {id:'40', name: 'tom40', text: 'tasty' },
          {id:'41', name: 'tom41', text: 'tasty' }, { id:'42', name: 'tom42', text: 'tasty' },
          {id:'43',name: 'tom43', text: 'tasty' }, {id:'44', name: 'tom44', text: 'tasty' },
          {id:'45', name: 'tom45', text: 'tasty' },  { id:'46', name: 'tom46', text: 'tasty' }, 
          {id:'47', name: 'tom47', text: 'tasty' }, {id:'48', name: 'tom48', text: 'tasty' },
          {id:'49', name: 'tom49', text: 'tasty' }, {id:'50', name: 'tom50', text: 'tasty' },
          { id:'51',name: 'tom51', text: 'tasty' },  { id:'52',name: 'tom51', text: 'tasty' },
          {id:'53', name: 'tom52', text: 'tasty' }, {id:'54', name: 'tom53', text: 'tasty' },
          { id:'55', name: 'tom54', text: 'tasty' }, { id:'56',name: 'tom55', text: 'tasty' },
          {id:'57', name: 'tom56', text: 'tasty' }];
  dataList = this.items.slice(0, 10);
  pos = 0;
  dataForm = [];
  constructor(public router: Router, private mainService: MainService) {
  }

  ngOnInit() { }


  loadData(event) {
    setTimeout(() => {
      this.addMoreItems();
      event.target.complete();

      if (this.dataList.length === 50) {
        event.target.disabled = true;
      }
    }, 1000);
  }

  addMoreItems() {
    const k = this.dataList.length;
    if (k <= this.items.length) {
      const x = (k + 5) > (this.items.length) ? this.items.length : (k + 5);
      for (let i = k; i < x; i++) {
        this.dataList.push(this.items[i]);
        console.log(this.dataList);
      }
    }

  }

  doRefresh(event) {
    setTimeout(() => {
      this.removeaddeditems();
      event.target.complete();
    }, 2000);
  }

  removeaddeditems() {
    if (this.dataList.length <= 10) {
      console.log('no change');
    } else {
      for (let i = 1; i <= this.dataList.length; i++) {
        if (i > 10) {
          this.dataForm = this.dataList.slice(0, 10);
        }
      }
      console.log('changes');
    }
    this.dataList = this.dataForm;
  }

  backtohome() {
    this.router.navigateByUrl('/home');
  }

  linktopage(item) {
    this.mainService.currentData = item;
    //console.log('item number ' + this.dataitem);
    //this.router.navigate(['/showdetailsofitems',item]);
    this.router.navigateByUrl(`showdetailsofitems/`+item.id)
    
  }

}
