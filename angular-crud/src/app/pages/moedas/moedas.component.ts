import { Component, OnInit } from '@angular/core';
import { MoedasService } from 'src/app/services/moedas.service';
import { Coins } from 'src/app/model/coins';
import { Order } from 'src/app/model/coins';

@Component({
  selector: 'app-moedas',
  templateUrl: './moedas.component.html',
  styleUrls: ['./moedas.component.scss']
})
export class MoedasComponent implements OnInit {
  public listPrice: Coins;
  public listOrder: Order;

  constructor( private moedasService: MoedasService ) { }

  public ngOnInit() {
    this.loadPriceCoin();
    this.loadOrderbook();
  }

  public loadPriceCoin() {
    this.moedasService.getCoins('BTC')
      .subscribe(res => this.listPrice = res)
  }

  public loadOrderbook() {
    this.moedasService.getOrderbook('BTC')
      .subscribe(res => this.listOrder = res)
  }

}
