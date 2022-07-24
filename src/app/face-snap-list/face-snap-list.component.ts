import { Component, OnInit } from "@angular/core";
import { FaceSnap } from "../model/face-snap-model";


@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})

export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  ngOnInit() {
    const mySnap:FaceSnap = {
      title: "Trofis",
      description: "My hero !",
      createdDate: new Date(),
      snaps: 5,
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'
    }

    const mySnap1:FaceSnap = {
      title: "Leverbeux",
      description: "My boy 1",
      createdDate: new Date(),
      snaps: 10,
      imageUrl: 'https://media.gettyimages.com/photos/mallard-duck-walking-in-ice-picture-id155358150?s=612x612'
    }

    const mySnap2:FaceSnap= {
      title: "Totos",
      description: "My boy2",
      createdDate: new Date(),
      snaps: 2,
      imageUrl: 'https://resize.prod.docfr.doc-media.fr/s/1200/img/var/doctissimo/storage/images/fr/www/animaux/diaporamas/ratons-laveurs/2271842-1-fre-FR/Top-10-des-ratons-laveurs-les-plus-adorables.jpg'
    }

    this.faceSnaps = [mySnap, mySnap1, mySnap2];
  }
}