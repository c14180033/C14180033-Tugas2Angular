import { Component, OnInit } from '@angular/core';
import { GlobvarService } from '../globvar.service';
import { Notes } from '../notes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hal3',
  templateUrl: './hal3.component.html',
  styleUrls: ['./hal3.component.css']
})
export class Hal3Component implements OnInit {

  allFavNotes : Notes[] = []

  constructor(private router: Router , public globVar : GlobvarService) { }

  ngOnInit() {
    this.allFavNotes = this.globVar.getAllFavNotes()
  }

  goDetail(judul: String) {
    this.router.navigate(['hal2/' + judul])
  }
  goBack() {
    this.router.navigate([''])
  }
}