import { Injectable } from '@angular/core';
import Publisher from "../types/publisher";

@Injectable({
  providedIn: 'root'
})
  
export class PublisherControllerService {
  publishers: Publisher[] = [];

  constructor() {
    this.publishers = [{
      name: "Publisher One (This one is pog)",
      publisherId: 1,
    },
    {
      name: "Publisher Two (420 69)",
      publisherId: 2,
    },
    {
      name: "Publisher Three (Trump did 9/11)",
      publisherId: 3,
    }];
  }

  getPublishers = () => {
    return this.publishers;
  }
  getPublisherById = (id: number): Publisher => {
    return this.publishers.find((pub) => pub.publisherId === id) as Publisher;
  }
}
