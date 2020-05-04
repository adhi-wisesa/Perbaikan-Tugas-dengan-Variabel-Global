import { Injectable } from '@angular/core';

@Injectable()
export class GlobSerService {

  private jurusan: any[]=[
    {nama: "Informatika", penjelasan: "Jurusan yang berhubunang dengan data dan pemograman"},
    {nama: "Sistem Informasi Bisnis", penjelasan: "Jurusan yang berhubunang dengan data, pemograman dan bisnis"},
  ]
  private jurusans: any[];
  constructor() { }

  public getJurusan(){
    return this.jurusan;
  }

  public addJurusan(namajur, penjelasanjur){
    this.jurusan.push({nama: namajur, penjelasan: penjelasanjur});
  }

  public updateJurusan(namajur, penjelasanjur){
    this.jurusan.forEach((jurusan)=>{
      if(jurusan.nama == namajur){
        jurusan.penjelasan = penjelasanjur;
      }
    })
  }
  // updateJurusan(namajur, penjelasanjur) {
  //   this.jurusans.push({nama: namajur, penjelasan: penjelasanjur})

  //   let jurusanMap = {
  //     get(nama): any {
  //       return this[nama];
  //     },
  //     set(jurusans) {
  //       this[jurusans.nama] = jurusans;
  //     }
  //   };

  //   this.jurusans.forEach((jurusans) => {
  //     jurusanMap.set(jurusans);
  //   });

  //   this.jurusan.forEach((jurusans) => {
  //     if(jurusanMap.get(jurusans.nama) && (jurusans.nama === jurusanMap.get(jurusans.nama).nama)) {
  //       jurusans.penjelasan = jurusanMap.get(jurusans.nama).penjelasan;
  //     }
  //   });
  // };
}