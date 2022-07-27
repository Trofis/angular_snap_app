import { FaceSnapsService } from './../services/face-snaps.service';
import { Component, OnDestroy, OnInit } from "@angular/core";
import { FaceSnap } from "../model/face-snap-model";
import { Router } from '@angular/router';
import { interval, Subject, take, takeUntil, tap } from 'rxjs';


@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})

export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  constructor(private FaceSnapsService: FaceSnapsService, private router: Router) { }

  ngOnInit() {
    this.faceSnaps = this.FaceSnapsService.getAllFaceSnaps();
  }

  goToSingleFace(faceId: number): void {
    this.router.navigateByUrl('/facesnaps/' + faceId)
  }
}