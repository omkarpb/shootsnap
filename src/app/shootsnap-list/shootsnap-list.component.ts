import { Component, OnInit } from '@angular/core';
import { SnapsService } from '../snaps.service';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import ImageGenerator from 'random-image-creator';

@Component({
  selector: 'app-shootsnap-list',
  templateUrl: './shootsnap-list.component.html',
  styleUrls: ['./shootsnap-list.component.scss']
})
export class ShootsnapListComponent implements OnInit {
  snaps = [];
  faThumbsUp = faThumbsUp;
  navigationSubscription;
  constructor(
    private snapsService: SnapsService,
    private router: Router,
  ) {
    this.loadSnaps();
  }

  ngOnInit() { }

  likeToggle(snap) {
    console.log(snap);
    const isLiked = !snap.isLiked;
    const likes = isLiked ? snap.likes + 1 : snap.likes - 1;

    this.snapsService.updateSnap(Object.assign({}, ...snap, {isLiked, likes}))
      .subscribe(() => {
        console.log('Snap liked successfully');
        window.location.reload();
      }, error => { console.error(error); });
  }

  loadSnaps() {
    this.snapsService.getSnaps().subscribe((response: any[]) => {
      // Temporary change to load fake image instead of image from S3
      this.snaps = response.map(item => {
        item.imgSrc = ImageGenerator(500, 500);
        return item;
      });
      console.log(this.snaps);
    }, error => { console.error(error); });
  }
}
