import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-view-example-view',
  templateUrl: './tree-view-example-view.component.html',
  styleUrls: ['./tree-view-example-view.component.css']
})
export class TreeViewExampleViewComponent implements OnInit {

  
  data = [
    {
      "_id": "5b7ae80cf73ce7c62a4f951b",
      "index": 0,
      "guid": "ffa4d38c-edaf-4108-a5cb-c0df02d165b0",
      "isActive": true,
      "balance": "$2,333.75",
      "picture": "http://placehold.it/32x32",
      "age": 21,
      "eyeColor": "blue",
      "name": {
        "first": "Mamie",
        "last": "Hendrix"
      },
      "company": "MAROPTIC",
      "email": "mamie.hendrix@maroptic.ca",
      "phone": "+1 (973) 546-3466",
      "address": "118 Columbia Street, Tonopah, South Dakota, 927",
      "about": "Do nulla ut ad est dolore aliqua laborum est labore. Lorem exercitation magna consectetur consectetur in anim laboris anim voluptate minim. Elit adipisicing labore ipsum Lorem ipsum cillum ea minim velit excepteur elit eiusmod irure irure. Aute eu tempor et magna ad deserunt consequat. Ipsum nulla amet eu incididunt officia fugiat deserunt exercitation do. Consequat pariatur do mollit ea fugiat elit consequat duis excepteur labore ullamco sint ex.",
      "registered": "Wednesday, March 21, 2018 7:19 AM",
      "latitude": "55.058687",
      "longitude": "-84.51063",
      "tags": [
        "quis",
        "qui",
        "culpa",
        "reprehenderit",
        "voluptate"
      ],
      "range": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "friends": [
        {
          "id": 0,
          "name": "Jacqueline Spears"
        },
        {
          "id": 1,
          "name": "Lila Vincent"
        },
        {
          "id": 2,
          "name": "Lyons Fitzgerald"
        }
      ],
      "greeting": "Hello, Mamie! You have 8 unread messages.",
      "favoriteFruit": "banana"
    },
    {
      "_id": "5b7ae80c68eb70be6f7f456b",
      "index": 1,
      "guid": "29650616-edaa-4ba8-afcf-687d811aa699",
      "isActive": true,
      "balance": "$3,926.00",
      "picture": "http://placehold.it/32x32",
      "age": 26,
      "eyeColor": "brown",
      "name": {
        "first": "Alma",
        "last": "Freeman"
      },
      "company": "ZILLADYNE",
      "email": "alma.freeman@zilladyne.info",
      "phone": "+1 (855) 519-2585",
      "address": "700 Townsend Street, Marshall, Idaho, 6888",
      "about": "Do enim aute exercitation labore commodo labore laboris cupidatat velit occaecat aliqua in incididunt ullamco. Officia proident elit ut labore nisi ut duis adipisicing cillum aute labore consectetur sint incididunt. Anim ipsum minim velit velit sunt quis excepteur sint amet. Amet quis do cillum elit cupidatat culpa ea. Excepteur duis dolor voluptate laborum non. Sit proident tempor non quis ut ea. Aute aliquip esse veniam aliquip reprehenderit adipisicing.",
      "registered": "Friday, April 11, 2014 12:14 AM",
      "latitude": "-61.000754",
      "longitude": "-5.058804",
      "tags": [
        "est",
        "magna",
        "Lorem",
        "ullamco",
        "tempor"
      ],
      "range": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "friends": [
        {
          "id": 0,
          "name": "Santos Luna"
        },
        {
          "id": 1,
          "name": "Ashley Herrera"
        },
        {
          "id": 2,
          "name": "Bradshaw Ramirez"
        }
      ],
      "greeting": "Hello, Alma! You have 7 unread messages.",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5b7ae80c0b207dcf8d3efcc6",
      "index": 2,
      "guid": "ce938ca4-f730-42d7-b25e-a64594383dbc",
      "isActive": false,
      "balance": "$1,610.59",
      "picture": "http://placehold.it/32x32",
      "age": 25,
      "eyeColor": "brown",
      "name": {
        "first": "Foley",
        "last": "Conrad"
      },
      "company": "ANIMALIA",
      "email": "foley.conrad@animalia.co.uk",
      "phone": "+1 (908) 446-2296",
      "address": "888 Nolans Lane, Martell, Kansas, 5807",
      "about": "Commodo ad laboris irure est. Minim reprehenderit qui proident laborum voluptate nulla proident mollit proident aute nisi ullamco. Anim ex irure proident aliqua magna excepteur ad. Dolor aliqua dolor Lorem magna do cupidatat labore labore qui consectetur pariatur.",
      "registered": "Monday, September 12, 2016 11:16 AM",
      "latitude": "-77.451022",
      "longitude": "-151.406166",
      "tags": [
        "consectetur",
        "incididunt",
        "esse",
        "reprehenderit",
        "dolore"
      ],
      "range": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "friends": [
        {
          "id": 0,
          "name": "Alisa Fernandez"
        },
        {
          "id": 1,
          "name": "Madeline Lamb"
        },
        {
          "id": 2,
          "name": "Yvonne Beck"
        }
      ],
      "greeting": "Hello, Foley! You have 8 unread messages.",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5b7ae80cf3518dbd1042803c",
      "index": 3,
      "guid": "0b8c9b5b-c31e-475c-91b7-93c33a5ef73f",
      "isActive": true,
      "balance": "$2,311.75",
      "picture": "http://placehold.it/32x32",
      "age": 36,
      "eyeColor": "blue",
      "name": {
        "first": "Theresa",
        "last": "Hansen"
      },
      "company": "EQUITAX",
      "email": "theresa.hansen@equitax.biz",
      "phone": "+1 (971) 569-3044",
      "address": "712 Guider Avenue, Rivereno, Texas, 8008",
      "about": "Non nisi magna exercitation ipsum elit est magna elit consequat aute magna. Fugiat laboris sit officia enim. Mollit qui do in eu do et. Nostrud duis consectetur veniam magna consequat. Amet do proident sunt cillum cillum adipisicing labore excepteur aliqua. Eu cillum ea aliquip et nisi nostrud. Laboris incididunt proident aute tempor elit anim eu proident amet id eiusmod ipsum.",
      "registered": "Thursday, June 15, 2017 7:44 AM",
      "latitude": "-23.461941",
      "longitude": "37.988318",
      "tags": [
        "quis",
        "aute",
        "commodo",
        "qui",
        "dolor"
      ],
      "range": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "friends": [
        {
          "id": 0,
          "name": "Parks Gray"
        },
        {
          "id": 1,
          "name": "Burks Mendez"
        },
        {
          "id": 2,
          "name": "Latisha Dalton"
        }
      ],
      "greeting": "Hello, Theresa! You have 7 unread messages.",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "5b7ae80c4da52c7ce0d5cc3a",
      "index": 4,
      "guid": "1f0ed940-78a8-4d4d-b6d7-232d7d18bca6",
      "isActive": false,
      "balance": "$2,145.02",
      "picture": "http://placehold.it/32x32",
      "age": 35,
      "eyeColor": "blue",
      "name": {
        "first": "Silvia",
        "last": "Wells"
      },
      "company": "ACCUFARM",
      "email": "silvia.wells@accufarm.tv",
      "phone": "+1 (952) 487-3384",
      "address": "501 Court Square, Falmouth, Ohio, 2927",
      "about": "Nulla aliquip magna proident occaecat quis duis. Tempor culpa sint deserunt id minim dolor et incididunt duis excepteur ex occaecat elit. Excepteur commodo magna culpa laboris nulla pariatur minim irure ut. Ullamco ut ipsum mollit tempor ipsum cupidatat sit. Lorem et proident elit in nostrud incididunt. Proident do dolore elit ex eiusmod fugiat sunt mollit ea qui incididunt.",
      "registered": "Thursday, May 25, 2017 1:50 PM",
      "latitude": "45.764106",
      "longitude": "-100.281474",
      "tags": [
        "nulla",
        "consectetur",
        "commodo",
        "aliquip",
        "adipisicing"
      ],
      "range": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "friends": [
        {
          "id": 0,
          "name": "Ava Solomon"
        },
        {
          "id": 1,
          "name": "Garner Owen"
        },
        {
          "id": 2,
          "name": "Silva Glass"
        }
      ],
      "greeting": "Hello, Silvia! You have 5 unread messages.",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5b7ae80ca22b296781cccd5d",
      "index": 5,
      "guid": "160ecee2-838e-477c-8e86-17f2fde4c032",
      "isActive": false,
      "balance": "$1,167.29",
      "picture": "http://placehold.it/32x32",
      "age": 40,
      "eyeColor": "brown",
      "name": {
        "first": "Marisol",
        "last": "Osborne"
      },
      "company": "SYNKGEN",
      "email": "marisol.osborne@synkgen.name",
      "phone": "+1 (821) 527-2971",
      "address": "629 Victor Road, Itmann, Northern Mariana Islands, 9850",
      "about": "Aute dolor ullamco anim reprehenderit non occaecat sunt culpa exercitation ex. Deserunt ullamco deserunt dolor tempor quis reprehenderit. Et reprehenderit et ullamco cillum labore fugiat est proident nostrud ullamco nostrud dolor aliquip ea. Do veniam ea elit nisi cillum officia fugiat elit nisi ipsum est duis incididunt. Tempor laboris exercitation consequat deserunt amet Lorem exercitation nulla aute consectetur eu. Nulla amet ut occaecat fugiat.",
      "registered": "Thursday, October 27, 2016 7:26 PM",
      "latitude": "-71.476472",
      "longitude": "-30.388438",
      "tags": [
        "sit",
        "consectetur",
        "incididunt",
        "tempor",
        "elit"
      ],
      "range": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "friends": [
        {
          "id": 0,
          "name": "Avila Davenport"
        },
        {
          "id": 1,
          "name": "Barbra Abbott"
        },
        {
          "id": 2,
          "name": "Lynn Harper"
        }
      ],
      "greeting": "Hello, Marisol! You have 5 unread messages.",
      "favoriteFruit": "apple"
    }
  ]


/*
data = [1, 2, 3, 4, 5]
*/

  constructor() { }

  ngOnInit() {
  }

}
