import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-generator';

  catchSearch(event:string){
    console.log(event)
  }

  catchRandom(){
    console.log("random")
  }

  catchFilter(filter:string){
    console.log(filter)
  }
}
