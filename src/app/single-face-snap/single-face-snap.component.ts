import { FaceSnapsService } from './../services/face-snaps.service';
import { FaceSnap } from './../model/face-snap-model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap!: FaceSnap;
 

  constructor(private FaceSnapsService: FaceSnapsService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    this.faceSnap = this.FaceSnapsService.getSnapByFaceId(this.route.snapshot.params['id']);
    
  }

  goBack(): void{
    this.router.navigateByUrl('/facesnaps')
  }
}
