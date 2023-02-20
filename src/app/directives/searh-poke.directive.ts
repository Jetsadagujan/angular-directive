import {
  Directive,
  Input,
  ElementRef,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, switchMap } from 'rxjs';

@Directive({
  selector: '[appSearhPoke]',
})
export class SearhPokeDirective {
  @Input() idPokemon = '';
  @Output() resImage = new EventEmitter<Object>();

  onSearchPoke = new Subject<Number>();
  originalHTML = '';
  constructor(private el: ElementRef, private http: HttpClient) {
    this.onSearchPoke
      .pipe(
        switchMap((search: Number) => {
          return this.http.get(
            `https://pokeapi.co/api/v2/pokemon-form/${search ? search : 1}`,
            {
              headers: { 'Content-Type': 'application/json' },
            }
          );
        })
      )
      .subscribe((value: any) => {
        this.resImage.emit(value.sprites.front_default);
        this.el.nativeElement.setAttribute('src', value.sprites.front_default);
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    const { currentValue } = changes['idPokemon'];
    this.onSearchPoke.next(currentValue);
  }
}
