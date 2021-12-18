import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { CreateMovieDto } from "./dto/create-movie.dto";
import { UpdateMovieDto } from "./dto/update-movie.dto";
import { MovieListService } from "./movie-list.service";
import { InjectModel } from "@nestjs/mongoose";
import { Movies } from "./schemas/movies.schema";

@Controller('movie-list')
export class MovieListController {
  constructor(private readonly movieService: MovieListService) {
  }
  @Get()
  getAllMovies(): Promise<Movies[]> {
    return this.movieService.getAll();
  }

  @Post()
  createMovie(@Body() createMovieDto: CreateMovieDto): Promise<Movies> {
    return this.movieService.createMovie(createMovieDto);
  }

  @Put(':id')
  updateMovie(@Body() updateMovieDto:UpdateMovieDto, @Param('id') id:string): Promise<Movies> {
    return this.movieService.updateMovie(id, updateMovieDto);
  }
}
