import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BackendCallService } from 'src/app/services/backend-call.service';
import { Game } from 'src/types/Game.type';
@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss'],
})
export class GamePageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private backend: BackendCallService,
    private router: Router
  ) {}

  title: string;
  game: Game;
  IMG_URL: string = '';

  ngOnInit() {
    this.title = this.route.snapshot.paramMap.get('title')!;

    this.backend.getOneGame(this.title).subscribe((data) => {
      this.game = data;
      this.IMG_URL = `https://images.igdb.com/igdb/image/upload/t_720p/${this.game.pic_id}.jpg`;
      // this.IMG_URL = `https://images.igdb.com/igdb/image/upload/t_cover_big/${this.game.pic_id}.jpg`;
    });
  }
}
