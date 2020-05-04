import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {GlobSerService} from '../glob-ser.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private route: ActivatedRoute, public varglob: GlobSerService) { }

  namajurusan = "";
  penjelasanjurusan = "";

  ngOnInit() {
  }

  editJurusan(namajurusan, penjelasanjurusan){
    this.varglob.updateJurusan(namajurusan, penjelasanjurusan);
    this.namajurusan = "";
    this.penjelasanjurusan = "";
  }
}