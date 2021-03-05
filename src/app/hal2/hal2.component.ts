import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobvarService } from '../globvar.service';
import { Notes } from '../notes';

@Component({
  selector: 'app-hal2',
  templateUrl: './hal2.component.html',
  styleUrls: ['./hal2.component.css']
})
export class Hal2Component implements OnInit {
  allNotes : Notes[] = []

  judulNote : String
  isiNote : String
  tglDibuat : Date
  status : Boolean
  constructor(private activatedRoute: ActivatedRoute, public globVar: GlobvarService, private router: Router) { }

  ngOnInit() {
    this.allNotes = this.globVar.getAllNotes()
    this.judulNote = this.activatedRoute.snapshot.paramMap.get('judulNote')
    for(var idx = 0; idx < this.allNotes.length; idx++) {
      if (this.judulNote == this.allNotes[idx].getJudul()) {
        this.isiNote = this.allNotes[idx].getIsi()
        this.tglDibuat = this.allNotes[idx].getTglDibuat()
        this.status = this.allNotes[idx].getStatus()
      }
    }
  }
  goBack() {
    this.router.navigate([''])
  }

  unFav() {
    this.globVar.setStatusGlobal(this.judulNote)
  }

  fav() {
    this.globVar.setStatusGlobal(this.judulNote)
  }

  goFavorite() {
    this.router.navigate(['hal3'])
  }
}