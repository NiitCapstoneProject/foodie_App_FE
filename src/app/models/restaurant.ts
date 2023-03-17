import { Cuisine } from "./cuisine"

export type Restaurant={
  name?:string,
  cuisins:Cuisine[],
  city?:string,
  rating?:number,
  image?:string,
  feedback?:string
}
