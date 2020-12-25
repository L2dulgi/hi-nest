import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    @Get()
    getAll(){
        return "this will return all movies";
    }
    @Get('search')
    search(@Query("year") searchingYear: string){
        return `we are searching for a movie made after : ${searchingYear}`;
    }

    @Get("/:id")
    getOne(@Param("id") movieId:string) {
        return `this will return one movie with id : ${movieId}`;
    }

    @Post()
    create(@Body() movieData){
        console.log(movieData);
        return movieData;
    }

    @Delete("/:id")
    remove(@Param('id') movieId:string){
        return `this will delete a movie with id : ${movieId}`;
    }

    @Patch('/:id')
    path(@Param('id') movieId:string, @Body() updateData){
        return {
            updatedMovie: movieId,
            ...updateData,
        };
    }

    

}
