import { Artist } from "./artist";

export class Event {

  id!: number;
  name!: string;
  location!: string;
  description!: string;
  capacity!: string;
  eventDate!: Date;
  flyerPath!: string;
  artists!: Artist[];

}
