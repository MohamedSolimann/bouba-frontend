import { Component, OnInit } from '@angular/core';
import { DataTransferService } from 'src/app/data-transfer.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css'],
})
export class OrderPageComponent implements OnInit {
  constructor(public dataTransfer: DataTransferService) {}

  public cartProducts: Array<any> = this.dataTransfer.cart;

  ngOnInit(): void {}
}
