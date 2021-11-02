import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  data = [
    {name:"Dinesh Pawar",twit_id:"@dineshP",desc_image:"assets/images/faces/face1.jpg",description:"Hey I am searching a 3 years of PHP web developer",like:299,retweet:"1.5k",reply:578,image:"assets/images/faces/face1.jpg"},
    {name:"Sumit Chalke",twit_id:"@sumitC",desc_image:null,description:"Hey I am searching a 3 years of PHP web developer",like:299,retweet:"1.5k",reply:578,image:"assets/images/faces/face1.jpg"},
    {name:"Kaushal Jadhav",twit_id:"@kaushalJ",desc_image:"assets/images/faces/face1.jpg",description:"Hey I am searching a 3 years of PHP web developer",like:299,retweet:"1.5k",reply:578,image:"assets/images/faces/face1.jpg"},
    {name:"Akshay Pawar",twit_id:"@akshayP",desc_image:null,description:"Hey I am searching a 3 years of PHP web developer",like:299,retweet:"1.5k",reply:578,image:"assets/images/faces/face1.jpg"},
    {name:"Babu Pawar",twit_id:"@babuP",desc_image:"assets/images/faces/face1.jpg",description:"Hey I am searching a 3 years of PHP web developer",like:299,retweet:"1.5k",reply:578,image:"assets/images/faces/face1.jpg"},
    {name:"Rakesh Salunkhe",twit_id:"@rakeshS",desc_image:null,description:"Hey I am searching a 3 years of PHP web developer",like:299,retweet:"1.5k",reply:578,image:"assets/images/faces/face1.jpg"},
    {name:"Mahesh Pawar",twit_id:"@maheshP",desc_image:"assets/images/faces/face1.jpg",description:"Hey I am searching a 3 years of PHP web developer",like:299,retweet:"1.5k",reply:578,image:"assets/images/faces/face1.jpg"},
  ];
  constructor() { }
  getData()
  {
    return this.data;
  }
}
