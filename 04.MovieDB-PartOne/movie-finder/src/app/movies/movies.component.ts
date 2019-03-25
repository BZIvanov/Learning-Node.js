import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import Movie from '../models/Movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popularMovies: Array<Movie>;
  inTheaterMovies: Array<Movie>;
  singleMovie: Movie;
  message = null;

  constructor(private moviesService: MovieService) { }

  ngOnInit() {
    this.moviesService.getPopularMovies().subscribe(data => {
      // here it is very important to get data['results'] with square brackets NOT with data.results
      this.popularMovies = data['results'].slice(0, 6);
      //console.log(this.popularMovies);
    });

    this.moviesService.getInTheaterMovies().subscribe(data => {
      this.inTheaterMovies = data['results'].slice(6,12);
    })
  }

  fromChild(event) {
    console.log(event);
    this.message = event;
  }

}
