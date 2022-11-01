import { HttpClient } from '@angular/common/http';
import { FaceSnap } from './../model/face-snap-model';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {    
    constructor(private http: HttpClient) {
    }
    
    getAllFaceSnaps(): Observable<Array<FaceSnap>>{
        return this.http.get<Array<FaceSnap>>('http://localhost:3000/facesnaps');
    }
    
    getSnapByFaceId(faceSnapId: number): Observable<FaceSnap>{
        return this.http.get<FaceSnap>('http://localhost:3000/facesnaps/'+faceSnapId);
    }


    snapUnsnap(faceSnapId: number, snapType: 'snap' | 'unsnap'): Observable<FaceSnap> {
    return this.getSnapByFaceId(faceSnapId).pipe(
        map(faceSnap => ({
            ...faceSnap,
            snaps: faceSnap.snaps + (snapType === 'snap' ? 1 : -1)
        })),
        switchMap(updatedFaceSnap => this.http.put<FaceSnap>(
            `http://localhost:3000/facesnaps/${faceSnapId}`,
            updatedFaceSnap)
        )
    );
}

    pushSnap(formValue: { title: string, description: string, imageUrl: string, location?:string}): void{
        // this.faceSnaps.push({
        //     ...formValue,
        //     createdDate: new Date(),
        //     snaps: 0,
        //     id: this.faceSnaps.length
        // })
        this.http.post<FaceSnap>('http://localhost:3000/facesnaps', formValue);
    }
}