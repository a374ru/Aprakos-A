import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


/**
 * 
 *  Конвертирование григорианского года
 *  от 1000-го и далее в Церковный славянский (цсл).
 *  
 *  Требуется подключенный цсл. шрифт.
 * 
 */
export class DateYearService {

  constructor() { }

  currentYearGRG: number = new Date().getFullYear()

  massYearsCSL = {

    tschi: "¤",
    cifri: ['', 'а', "в", 'г', 'д', 'є', 's', 'з', 'и', 'f'],
    desyatki: ['', 'i', 'к', 'л', 'м', 'н', '…', 'o', 'п', 'ч'],

    // FIXME: В шрифте отсутствует глиф числа 400 – у.
    sotni: ['', 'р', 'с', 'т', 'u', 'f', 'х', 'p', 't', 'ц']

  }

  currentYearCSl(): string {

    let yearInsert = this.massYearsCSL.tschi

    let tsch = this.massYearsCSL.tschi

    let yearString = String(this.currentYearGRG)

    if (yearString.length == 3) {

      yearString = "0" + yearString
      tsch = ""

    }


    // Считываем цифру тысяч
    let tscha = Number(yearString.slice(0, 1))

    // Считываем цифру сотен
    let sotnya = Number(yearString.slice(1, 2))

    // Считываем цифру десятков
    let desyatok = Number(yearString.slice(2, 3))

    // Считываем цифру единиц
    let edinica = Number(yearString.slice(-1))

    if (sotnya != 0) {

      // реализация сотен
      yearInsert += this.massYearsCSL.cifri[tscha] + this.massYearsCSL.sotni[sotnya]
        + this.massYearsCSL.desyatki[desyatok] + "7" + this.massYearsCSL.cifri[edinica]

    }
    else {

      // реализация десятков
      yearInsert += this.massYearsCSL.cifri[tscha] + this.massYearsCSL.desyatki[desyatok]
        + "7" + this.massYearsCSL.cifri[edinica]

    }

    // для годов второго десятка (10…19)
    if (Number(yearString.slice(2, 4)) < 20) {

      yearInsert = tsch + this.massYearsCSL.cifri[tscha]
        + this.massYearsCSL.sotni[sotnya]
        + this.massYearsCSL.cifri[edinica] + "7" + this.massYearsCSL.desyatki[desyatok]

    }

    
    
    return yearInsert;
  }
  
  
  // insertYearCSL(){
  //   document.getElementById('ystm-date')!.innerHTML = this.currentYearCSl();
  // document.getElementById('ystm-date')!.setAttribute('title', `${this.currentYearGRG} год`) 
  // }


  ttst(param: string): string{
   let a: string = param +", Hi"
    return a

 } 


}
