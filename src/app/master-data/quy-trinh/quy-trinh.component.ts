import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quy-trinh',
  templateUrl: './quy-trinh.component.html',
  styleUrls: ['./quy-trinh.component.css']
})


export class QuyTrinhComponent implements OnInit {

  ngOnInit(): void {
  }

  closeModal: string | undefined;

  constructor() {}


  Users = [{
      "id": 5440,
      "name": "Wanda Lynch",
      "email": "wanda.lynch@example.com"
    },
    {
      "id": 6228,
      "name": "Katrina Graves",
      "email": "katrina.graves@example.com"
    },
    {
      "id": 1654,
      "name": "Louis Daniels",
      "email": "louis.daniels@example.com"
    },
    {
      "id": 1631,
      "name": "Gavin Sullivan",
      "email": "gavin.sullivan@example.com"
    },
    {
      "id": 9880,
      "name": "June Martinez",
      "email": "june.martinez@example.com"
    },
    {
      "id": 8634,
      "name": "Owen Davis",
      "email": "owen.davis@example.com"
    },
    {
      "id": 3918,
      "name": "Megan Harrison",
      "email": "megan.harrison@example.com"
    },
    {
      "id": 3680,
      "name": "Joel Thompson",
      "email": "joel.thompson@example.com"
    },
    {
      "id": 2409,
      "name": "Dora Rose",
      "email": "dora.rose@example.com"
    },
    {
      "id": 4477,
      "name": "Candice Neal",
      "email": "candice.neal@example.com"
    }
  ]
 open(){

 }


}

