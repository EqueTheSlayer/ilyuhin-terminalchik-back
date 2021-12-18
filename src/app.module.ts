import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieListModule } from "./movie-list/movie-list.module";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [MovieListModule, MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
