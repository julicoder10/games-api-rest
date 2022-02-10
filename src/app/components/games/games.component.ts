import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service'

interface game{
  "internalName": string,
  "title": string,
  "metacriticLink": string,
  "dealID": string,
  "storeID": number,
  "gameID": number,
  "salePrice": number,
  "normalPrice": number,
  "lastChange": number,
  "dealRating": number,
  "thumb":string,
}

interface juegoFiltrado{
"cheapest": number,
"external": string,
"gameID": number,
"internalName": string,
"steamAppID": number,
"thumb": string,
}
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  games:game[] = [];
  juegosFiltrados:juegoFiltrado[] = []
  tituloDeJuego:string = '';
  constructor(private apiService:ApiService) { }


  ngOnInit(): void {
      this.apiService.getData().subscribe(data => {
       this.games = data;
      },err =>{
      console.log(err)
    })
  }

  buscarJuego(){
    this.apiService.searchData(this.tituloDeJuego).subscribe(data =>{
      this.juegosFiltrados = data;
    },err =>{
      console.log(err)
    })
  }
}
