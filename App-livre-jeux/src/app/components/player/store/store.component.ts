import { Component, OnInit } from '@angular/core';
import { Livre } from '../../../_models/livre.model';
import { Livres } from '../../../_models/mock-livre';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  livres = Livres;
  livre: Livre = {
    id: 1,
    name: 'Livre 1',
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationnon proident."
  }
  constructor() { }

  ngOnInit(): void {
  }

}
