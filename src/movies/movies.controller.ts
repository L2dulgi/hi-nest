import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

        constructor(private readonly movieservice : MoviesService){}
    @Get()
    getAll(): Movie[] {
        return this.movieservice.getAll();
    }

    @Get("/:id")
    getOne(@Param("id") movieId: number) {
        console.log(typeof movieId);
        return this.movieservice.getOne(movieId);
    }

    @Post()
    create(@Body() movieData: CreateMovieDto){
        return this.movieservice.create(movieData);
    }

    @Delete("/:id")
    remove(@Param('id') movieId:number){
        return this.movieservice.deleteOne(movieId);
    }

    @Patch('/:id')
    path(@Param('id') movieId:number, @Body() updateData: UpdateMovieDto){
        return this.movieservice.update(movieId, updateData);
    }

    

}
