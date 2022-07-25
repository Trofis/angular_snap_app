import { FaceSnapsService } from './../services/face-snaps.service';
import { FaceSnap } from './../model/face-snap-model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
  
export class FaceSnapComponent implements OnInit {
  alreadySnaped!: boolean;
  @Input() faceSnap!: FaceSnap;

  constructor(private FaceSnapsService: FaceSnapsService) { }
  
  ngOnInit(): void {
    
  }
  
  onAddSnap(): void {
    if (!this.alreadySnaped) {
      this.FaceSnapsService.SnapUnsnap(this.faceSnap.id, "snap")
      this.alreadySnaped = true;
    }
    else {
      this.FaceSnapsService.SnapUnsnap(this.faceSnap.id, "unsnap")
      this.alreadySnaped = false;
    }
      
  }
}
