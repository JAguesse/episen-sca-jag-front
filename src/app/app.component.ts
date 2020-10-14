import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FrontConnexionService } from './front-connexion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'episen-sca-jag-front';
  chat:string; 

  constructor(private router:Router,
    private activatedRoute:ActivatedRoute,
    private frontConnextionService:FrontConnexionService){
  }


  onSubmit():void {
    this.frontConnextionService.postChat(this.chat);
  }
}