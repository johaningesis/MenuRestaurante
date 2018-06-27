import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  // inyeccion de dependencias
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  loadMenu(): Observable<Menu[]> {
    return timer(500).pipe(
      map(() => {
        return[
          // tslint:disable-next-line:max-line-length
          {chef: 'Johan', date: new Date(), img: 'https://static.vix.com/es/sites/default/files/styles/large/public/btg/curiosidades.batanga.com/files/10-supuestos-mitos-sobre-la-comida-chatarra-8.jpg?itok=t0lXEea2'},
          // tslint:disable-next-line:max-line-length
          {chef: 'Pablo', date: new Date(), img: 'http://www.panorama.com.ve/__export/1504281241250/sites/panorama/img/pitoquito/2017/09/01/comida-chatarra.jpg_364784457.jpg'},
          // tslint:disable-next-line:max-line-length
          {chef: 'Juan', date: new Date(), img: 'https://static.vix.com/es/sites/default/files/styles/large/public/btg/curiosidades.batanga.com/files/10-supuestos-mitos-sobre-la-comida-chatarra-8.jpg?itok=t0lXEea2'},
          // tslint:disable-next-line:max-line-length
          {chef: 'Nelson', date: new Date(), img: 'https://static.vix.com/es/sites/default/files/styles/large/public/btg/curiosidades.batanga.com/files/10-supuestos-mitos-sobre-la-comida-chatarra-8.jpg?itok=t0lXEea2'},
          // tslint:disable-next-line:max-line-length
          {chef: 'Cesar', date: new Date(), img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTesSB20UDlpjf5uZnIdnNb0gmh2fIXvQ3wH7zU2vuzpQQeBrm0'}
        ];
      })
    );
  }

}

export class Menu {
  constructor(public img: string,
    public chef: string,
    public date: Date) { }
}
