import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type MovieDocument = Movies & Document;

@Schema()
export class Movies {
  @Prop()
  title: string;

  @Prop()
  image: string;

  @Prop()
  rating: number;
}

export const MoviesSchema = SchemaFactory.createForClass(Movies);