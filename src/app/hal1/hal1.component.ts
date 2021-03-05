import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import { GlobvarService } from '../globvar.service';
import { Notes } from '../notes';

@Component({
  selector: 'app-hal1',
  templateUrl: './hal1.component.html',
  styleUrls: ['./hal1.component.css']
})
export class Hal1Component implements OnInit {
  listNotes : Notes[] = []

  inputJudul = ''
  inputIsi = ''
  tglDibuat = new Date()

  constructor(private router: Router, public globVar: GlobvarService) {}

  ngOnInit() {
    this.listNotes = this.globVar.getAllNotes()
  }

  saveNotes() {
    this.globVar.pushNotes(new Notes(
      this.inputJudul,
      this.inputIsi,
      this.tglDibuat
    ))
  }
  goFavorite() {
    this.router.navigate(['hal3'])
  }
  goDetail(judul: String) {
    this.router.navigate(['hal2/' + judul])
  }
}