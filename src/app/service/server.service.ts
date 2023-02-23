import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerService implements OnInit {
  private details=[
    {
      id:1,
      name:'Nokia 5.1 Plus',
      Descripition:'Nokia 3GB/32GB',
      image:'https://images.ctfassets.net/wcfotm6rrl7u/5McQXmq07uRr6md0jl7Fal/d3c7c5017cd73ef9039711aa871bc092/nokia-5_1_Plus-black-front_back-int.png',
      price:'8999',

    },
    {
      id:2,
      name:'Samsung A10s',
      Descripition:'Samsung 3GB/32GB',
      image:'https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662420377/Croma%20Assets/Communication/Mobiles/Images/223502_qvee0e.png/mxw_640,f_auto',
      price:'10999'
    },
    {
      id:3,
      name:'Redmi Mi note 5 pro',
      Descripition:'Redmi 3GB/32GB',
      image:'https://fdn2.mobgsm.com/vv/pics/xiaomi/xiaomi-redmi-note-9-pro-1.jpg',
      price:'12999'
    },
    {
      id:4,
      name:'Vivo Y2',
      Descripition:'Vivo 3GB/32GB',
      image:'https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1662610530365/8f67e82e666716ef4d0913d916367c4a.png',
      price:'9500',
    }
  ]

  constructor() { }
  ngOnInit(): void {  }
  getServer(){
    return this.details
  }
}
