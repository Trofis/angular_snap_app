import { FaceSnapsService } from './../services/face-snaps.service';
import { FaceSnap } from './../model/face-snap-model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, tap } from 'rxjs';


@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  buttonText!: String;
  faceSnap!: FaceSnap;
  faceSnap$!: Observable<FaceSnap>;
 

  constructor(private FaceSnapsService: FaceSnapsService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    this.faceSnap$ = this.FaceSnapsService.getSnapByFaceId(this.route.snapshot.params['id']);
    this.buttonText = "Oh Snap!";
  }

  onSnap(faceSnapId: number) {
    if (this.buttonText === 'Oh Snap!') {
        this.faceSnap$ = this.FaceSnapsService.snapUnsnap(faceSnapId, 'snap').pipe(
            tap(() => this.buttonText = 'Oops, unSnap!')
        );
    } else {
        this.faceSnap$ = this.FaceSnapsService.snapUnsnap(faceSnapId, 'unsnap').pipe(
            tap(() => this.buttonText = 'Oh Snap!')
        );
    }
  }
  
  goBack(): void{
    this.router.navigateByUrl('/facesnaps')
  }
}
