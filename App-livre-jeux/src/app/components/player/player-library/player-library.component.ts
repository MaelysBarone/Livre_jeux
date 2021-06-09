import { Component, OnInit } from '@angular/core';
import { Livres } from 'src/app/_models/mock-livre';
import { Livre } from 'src/app/_models/livre.model';

@Component({
  selector: 'app-player-library',
  templateUrl: './player-library.component.html',
  styleUrls: ['./player-library.component.scss']
})
export class PlayerLibraryComponent implements OnInit {

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
