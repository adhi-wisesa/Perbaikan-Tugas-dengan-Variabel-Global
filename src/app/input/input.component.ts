import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {GlobSerService} from '../glob-ser.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(private route: ActivatedRoute, public varglob: GlobSerService) { }

  namajurusan = "";
  penjelasanjurusan = "";

  ngOnInit() {
  }

  addJurusan(namajurusan, penjelasanjurusan){
    this.varglob.addJurusan(namajurusan, penjelasanjurusan);
    this.namajurusan = "";
    this.penjelasanjurusan = "";
  }
}