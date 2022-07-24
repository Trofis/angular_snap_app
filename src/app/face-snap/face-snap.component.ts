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
  ngOnInit(): void {
    
  }
  
  onAddSnap(): void {
    if (!this.alreadySnaped) {
      this.faceSnap.snaps += 1;
      this.alreadySnaped = true;
    }
    else {
      this.faceSnap.snaps -= 1;
      this.alreadySnaped = false;
    }
      
  }
}
