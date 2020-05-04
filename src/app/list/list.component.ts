import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {GlobSerService} from '../glob-ser.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  temp: any[];
  constructor(private route: ActivatedRoute, public varglob: GlobSerService) {}

  ngOnInit() {
    this.temp = this.varglob.getJurusan();
  }

}