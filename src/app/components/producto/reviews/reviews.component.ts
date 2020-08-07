import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NodeCompatibleEventEmitter } from 'rxjs/internal/observable/fromEvent';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  productoId: number;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.parent.params.subscribe(params => {
      this.productoId = params.productoId;
    })
  }

}
