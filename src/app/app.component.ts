import { Component, OnInit } from '@angular/core';
import { AuthGuard } from './infra/auth/guard/auth.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userlogged: boolean = false;

  constructor(private auth: AuthGuard) {
    this.auth.mostrarMenuEmitter.subscribe( mostrar => {
      console.log(mostrar)
       this.userlogged = mostrar
      });
   }

  ngOnInit(): void {

  }
}
