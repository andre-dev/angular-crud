import { Component, OnInit } from '@angular/core';
import { MoedasService } from 'src/app/services/moedas.service';
import { Coins, Order } from 'src/app/model/coins';

@Component({
  selector: 'app-moedas',
  templateUrl: './moedas.component.html',
  styleUrls: ['./moedas.component.scss']
})
export class MoedasComponent implements OnInit {
  public listPrice: Coins;
  public listOrder: Order;

  constructor( private moedasService: MoedasService ) { }

  moedas: string[] = ["SELECIONE SUA MOEDA AQUI: ","BTC","ETH","USDC"];
  moedaSelecionada: string;

  public ngOnInit() {
    this.loadPriceCoin();
    this.loadOrderbook();
  }

  public loadPriceCoin() {
    this.moedasService.getCoins(this.moedaSelecionada)
      .subscribe(res => this.listPrice = res)
  }

  public loadOrderbook() {
    this.moedasService.getOrderbook(this.moedaSelecionada)
      .subscribe(res => this.listOrder = res)
  }

  public selecionouMoeda(event: any){
    this.moedaSelecionada = event.target.value;
    this.loadPriceCoin();
    this.loadOrderbook();
  }

}
