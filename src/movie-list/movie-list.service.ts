import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { MovieDocument, Movies } from "./schemas/movies.schema";
import { CreateMovieDto } from "./dto/create-movie.dto";
import { UpdateMovieDto } from "./dto/update-movie.dto";

@Injectable()
export class MovieListService {
  constructor(@InjectModel(Movies.name) private movieModel: Model<MovieDocument>) {
  }

  async getAll(): Promise<Movies[]> {
    return await this.movieModel.find().exec();
  }

  async createMovie(movieDto: CreateMovieDto): Promise<Movies> {
    const alreadyCreatedMovie = await this.movieModel.findOne({title: movieDto.title});

    if (!alreadyCreatedMovie) {
      const newMovie =  new this.movieModel(movieDto);

      return newMovie.save();
    }
  }

  async updateMovie(id: string, movieDto: UpdateMovieDto): Promise<Movies> {
    return this.movieModel.findByIdAndUpdate(id, movieDto, {new: true});
  }
}