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

export class FaceSnapListComponent implements OnInit, OnDestroy {
  faceSnaps!: FaceSnap[];
  private destroy$!: Subject<boolean>

  constructor(private FaceSnapsService: FaceSnapsService, private router: Router) { }
  
   ngOnDestroy(): void {
    this.destroy$.next(true);
  }

  ngOnInit() {
    this.faceSnaps = this.FaceSnapsService.getAllFaceSnaps();

    // EXO : Strategies to unsubscribe observable
    
    this.destroy$ = new Subject<boolean>();

    // interval(1000).pipe(
    //   take(3),
    //   tap(console.log)).subscribe();

    interval(1000).pipe(
      tap(console.log),
      takeUntil(this.destroy$)).subscribe();
  }

  goToSingleFace(faceId: number): void {
    this.router.navigateByUrl('/facesnaps/' + faceId)
    console.log("router")
  }
}