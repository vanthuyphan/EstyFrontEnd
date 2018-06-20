import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations'
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
     animations :[routerTransition()]
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
