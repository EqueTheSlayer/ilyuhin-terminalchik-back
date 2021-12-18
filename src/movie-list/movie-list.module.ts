import { Module } from "@nestjs/common";
import { MovieListService } from "./movie-list.service";
import { MovieListController } from "./movie-list.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Movies, MoviesSchema } from "./schemas/movies.schema";

@Module({
  providers: [MovieListService],
  controllers: [MovieListController],
  imports: [MongooseModule.forFeature([{name: Movies.name, schema: MoviesSchema}])]
})
export class MovieListModule {

}
