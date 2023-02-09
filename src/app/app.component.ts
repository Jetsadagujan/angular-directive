import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-attribute-directive-example';
  searchText = '';
  searchPoke = '';
  data: any =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';

  constructor(private http: HttpClient) {}

  async ngOnInit(): Promise<void> {}

  setImage(e: any) {
    this.data = e;
  }
}
