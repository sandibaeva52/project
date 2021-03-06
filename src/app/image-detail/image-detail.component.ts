import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {ImageService} from '../image.service';
import { CartService } from '../cart.service';
import {Location} from '@angular/common';


@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {
  image: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public activatedRoute: ActivatedRoute,
    private imageService: ImageService,
    private cartService: CartService,
    private location: Location


  ) { }

  ngOnInit(): void {
    this.getImage();
  }
  getImage() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.imageService.getImage(id).subscribe(image => this.image = image);
  }
  addToCart(image:any) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(image);
  }
  goBack(): void {
    this.location.back();
  }


}
