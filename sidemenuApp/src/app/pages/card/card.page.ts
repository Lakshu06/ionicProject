import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {
  dataitem = [];
  items = [{ name: 'tom1', text: 'tasty' }, { name: 'tom2', text: 'tasty' }, { name: 'tom3', text: 'tasty' },
  { name: 'tom4', text: 'tasty' }, { name: 'tom5', text: 'tasty' }, { name: 'tom6', text: 'tasty' },
  { name: 'tom7', text: 'tasty' }, { name: 'tom8', text: 'tasty' }, { name: 'tom9', text: 'tasty' },
  { name: 'tom10', text: 'tasty' }, { name: 'tom11', text: 'tasty' }, { name: 'tom12', text: 'tasty' },
  { name: 'tom13', text: 'tasty' }, { name: 'tom14', text: 'tasty' }, { name: 'tom15', text: 'tasty' },
  { name: 'tom16', text: 'tasty' }, { name: 'tom17', text: 'tasty' }, { name: 'tom18 ', text: 'tasty' },
  { name: 'tom19', text: 'tasty' }, { name: 'tom20', text: 'tasty' }, { name: 'tom21', text: 'tasty' },
  { name: 'tom22', text: 'tasty' }, { name: 'tom23', text: 'tasty' }, { name: 'tom14', text: 'tasty' },
  { name: 'tom25', text: 'tasty' }, { name: 'tom26', text: 'tasty' }, { name: 'tom27', text: 'tasty' },
  { name: 'tom28', text: 'tasty' }, { name: 'tom29', text: 'tasty' }, { name: 'tom30', text: 'tasty' },
  { name: 'tom31', text: 'tasty' }, { name: 'tom32', text: 'tasty' }, { name: 'tom33', text: 'tasty' },
  { name: 'tom34', text: 'tasty' }, { name: 'tom35', text: 'tasty' }, { name: 'tom36', text: 'tasty' },
  { name: 'tom37', text: 'tasty' }, { name: 'tom38', text: 'tasty' }, { name: 'tom39', text: 'tasty' },
  { name: 'tom40', text: 'tasty' }, { name: 'tom41', text: 'tasty' }, { name: 'tom42', text: 'tasty' },
  { name: 'tom43', text: 'tasty' }, { name: 'tom44', text: 'tasty' }, { name: 'tom45', text: 'tasty' },
  { name: 'tom46', text: 'tasty' }, { name: 'tom47', text: 'tasty' }, { name: 'tom48', text: 'tasty' },
  { name: 'tom49', text: 'tasty' }, { name: 'tom50', text: 'tasty' }, { name: 'tom51', text: 'tasty' },
  { name: 'tom51', text: 'tasty' }, { name: 'tom52', text: 'tasty' }, { name: 'tom53', text: 'tasty' },
  { name: 'tom54', text: 'tasty' }, { name: 'tom55', text: 'tasty' }, { name: 'tom56', text: 'tasty' }];
  dataList = this.items.slice(0, 10);
  pos = 0;
  dataForm = [];
  constructor(public router: Router) {
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
    console.log('item number ' + this.dataitem);
    this.router.navigate(['/showdetailsofitems']);
  }

}
