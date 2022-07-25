import { FaceSnapsService } from './../services/face-snaps.service';
import { Component, OnInit } from "@angular/core";
import { FaceSnap } from "../model/face-snap-model";


@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})

export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  constructor(private FaceSnapsService: FaceSnapsService){}

  ngOnInit() {
    this.faceSnaps = this.FaceSnapsService.getAllFaceSnaps();
  }
}