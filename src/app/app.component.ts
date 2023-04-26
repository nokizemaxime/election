import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'electionfrontend';
  n:number = 15;

  factoriel(n:number): any{
    if(n == 0 )
    return 1;
    return n * this.factoriel(n-1);
  }

  reset(){
    this.n = 5;
  }
}
