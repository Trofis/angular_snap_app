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
  @Input() buttonText!: String;
  @Input() _onSnap !: any;

  constructor(private FaceSnapsService: FaceSnapsService) { }
  
  ngOnInit(): void {
    
  }
  
  onSnap(faceSnapId : number): void {
    this._onSnap(faceSnapId);
      
  }
}
