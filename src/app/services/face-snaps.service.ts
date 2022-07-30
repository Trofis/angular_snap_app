import { FaceSnap } from './../model/face-snap-model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
      // vos FaceSnap ici
    {
        id:1,
        title: "Trofis",
        description: "My hero !",
        createdDate: new Date(),
        snaps: 5,
        imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'
    },
    {
        id:2,
        title: "Leverbeux",
        description: "My boy 1",
        createdDate: new Date(),
        snaps: 10,
        imageUrl: 'https://media.gettyimages.com/photos/mallard-duck-walking-in-ice-picture-id155358150?s=612x612'
    },
    {
        id:3,
        title: "Totos",
        description: "My boy2",
        createdDate: new Date(),
        snaps: 2,
        imageUrl: 'https://resize.prod.docfr.doc-media.fr/s/1200/img/var/doctissimo/storage/images/fr/www/animaux/diaporamas/ratons-laveurs/2271842-1-fre-FR/Top-10-des-ratons-laveurs-les-plus-adorables.jpg'
        }
  ]
    
    getAllFaceSnaps(): FaceSnap[]{
        return this.faceSnaps;
    }
    
    getSnapByFaceId(faceSnapId: number): FaceSnap{
        const faceSnap = this.faceSnaps.find((faceSnap) => faceSnap.id == faceSnapId);
        if (faceSnap) {
            return faceSnap;
        } else {
            throw new Error('FaceSnap not found!');
        }
    }

    SnapUnsnap(faceSnapId: number, snapType: string): void{
        const faceSnap = this.getSnapByFaceId(faceSnapId)
        if (faceSnap) {
            if (snapType == "snap")
                faceSnap.snaps++;
            else
                faceSnap.snaps--;
        } else {
            throw new Error('FaceSnap not found!');
        }
    }

    pushSnap(formValue: { title: string, description: string, imageUrl: string, location?:string}): void{
        this.faceSnaps.push({
            ...formValue,
            createdDate: new Date(),
            snaps: 0,
            id: this.faceSnaps.length
        })
    }
}