import {Component, OnInit} from "@angular/core";
import API from "../../API/API";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  orders = [];

  constructor() { }

  ngOnInit() {
    API.getOrders(orders => {
      this.orders = orders;
    })
  }

  proceedOrder(orderId, productId) {
      API.proceedOrder(orderId, productId, () => {
        API.getOrders(orders => {
          this.orders = orders;
        })
      })
  }

}
