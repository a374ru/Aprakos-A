import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Ystm } from './modelDB';
import { environment } from '../../environments/environment';
import { observable } from 'rxjs';

interface Strapi {
  data?: { [key: number]: { id: number, attributes: { name?: string } } }
  meta?: []

}


@Component({
  selector: 'app-strapi',
  templateUrl: './strapi.component.html',
  styleUrls: ['./strapi.component.scss']
})
export class StrapiComponent implements OnInit {

  strapi_content = "no data";
  url = 'http://localhost:1337/api/authors/'

  // content$ = this.strapiC();
  content = [""];

  constructor(private http: HttpClient) {

    // try {

    //   // Получение данных от страпи.
    //   fetch(this.url)
    //     .then(loadedJson => loadedJson.text())
    //     .then(loadedJsonText =>
    //       this.strapiContent(JSON.parse(loadedJsonText))

    //       // this.strapiC()


    //     )
    //     .catch((err) => alert(err));
    // } finally {
    //   // this.apstl = "Загрузка..."
    //   this.strapi_content = 'Загрузка...';
    // }

  }

  ngOnInit(): void {

    // Запрос данных с сервера
    this.strapiC()

  }

  strapiContent(loadedJsonTextF: any) {

    if (loadedJsonTextF.data == null) this.strapi_content = loadedJsonTextF.error.message
    else this.strapi_content = loadedJsonTextF.data[0].attributes.ystmtxt;
    // console.log(json);

  }


  strapiC() {

    let rrr = this.http.get<Strapi>(`${environment.apiUrl}/authors/`).subscribe(
      response => {
        // объект получен, но не сохранен !!!
        console.log(response)


        for (const key in response.data) {

          console.log(response.data[Number(key)].id);

          this.content?.push(response.data[Number(key)].attributes.name as string)


        }


        console.log(this.content, "////==/=/=");

      }
    )
    // console.log('--/////--', this.content$);

  }




}
