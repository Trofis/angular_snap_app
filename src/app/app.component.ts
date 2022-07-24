import { FaceSnap } from './model/face-snap-model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.mySnap = new FaceSnap(
      "Trofis",
      "My hero !",
      new Date(),
      5,
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'
    )

    this.mySnap1 = new FaceSnap(
      "Leverbeux",
      "My boy 1",
      new Date(),
      10,
      'https://media.gettyimages.com/photos/mallard-duck-walking-in-ice-picture-id155358150?s=612x612'
    )

    this.mySnap2 = new FaceSnap(
      "Totos",
      "My boy2",
      new Date(),
      2,
      'https://resize.prod.docfr.doc-media.fr/s/1200/img/var/doctissimo/storage/images/fr/www/animaux/diaporamas/ratons-laveurs/2271842-1-fre-FR/Top-10-des-ratons-laveurs-les-plus-adorables.jpg'
    )
  }
  mySnap!: FaceSnap;
  mySnap1!: FaceSnap;
  mySnap2!: FaceSnap;



}
