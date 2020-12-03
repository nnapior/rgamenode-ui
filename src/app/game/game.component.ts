import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../services/game.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})

export class GameComponent implements OnInit {

  isLoaded = false;
  game;
  name;
  creatorID;
  ownerID;
  creator;
  owner;
  creditIDs;
  creditNames = [];
  thumbnail;
  gamefiles;  //Not sure how this piece is gonna be implemented yet but we'll figure it out


  constructor(private route: ActivatedRoute, private api: GameService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.getGameByID(params.get('gameID'));
    });
  }

  getGameByID(gameID: string) {
    this.api.getGameByID(gameID).subscribe((data) => {
      console.log(data)
      this.game = data["data"];
      console.log(this.game)
      this.name = this.game["name"];
      console.log(this.name);
      this.creditIDs = this.game["credits"];
      for(let credit of this.creditIDs) {
        console.log(credit["id"]);
        this.api.getCreator(credit["id"]).subscribe((data) => {
          console.log('credit data -->', data);
          this.creditNames.push(data["data"]);
          console.log(this.creditNames);
    })}
    this.isLoaded = true;
  })
}
}

