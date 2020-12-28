import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
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
    getOne(@Param("id") movieId:string) {
        return this.movieservice.getOne(movieId);
    }

    @Post()
    create(@Body() movieData){
        return this.movieservice.create(movieData);
    }

    @Delete("/:id")
    remove(@Param('id') movieId:string){
        return this.movieservice.deleteOne(movieId);
    }

    @Patch('/:id')
    path(@Param('id') movieId:string, @Body() updateData){
        return this.movieservice.update(movieId, updateData);
    }

    

}
