import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MovieComponent } from './movie/movie.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';

@NgModule({
    declarations: [
        MovieComponent,
        MoviesComponent,
        MovieDetailsComponent,
        MovieSearchComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ]
})
export class AppMoviesModule {

}
