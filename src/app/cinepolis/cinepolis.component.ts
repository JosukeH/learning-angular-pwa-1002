import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent implements OnInit {

  constructor() { 

  }
  nombreCompleto: string = 'Juan'
  cantidadCompradores: number = 1
  precioBase : number = 12;
  isCineco: number = 0;
  total: number= 0; 
  cantidadDeboletos: number = 1 
  boletosDisponibles: number = this.cantidadCompradores * 7;
  calcularPrecio(): number{

    let boletosDisponible= this.cantidadCompradores*7
    let esMiembro = (this.isCineco === 0) 
    
    console.log(esMiembro);

    let precio = this.cantidadDeboletos * this.precioBase
    console.log('====================================');
    console.log(precio);
    console.log('====================================');

    if(this.cantidadDeboletos > 3 ){
      if(this.cantidadDeboletos > 5){
        precio = (esMiembro ? precio* 0.65 : precio*0.85)  
        console.log('====================================');
        console.log(precio);
        console.log('====================================');
      }else{

        precio = (esMiembro ? precio*0.70 : precio*0.90) 
      }

    }else{ 
      precio = (esMiembro ? precio*0.80 : precio) 
    }
    
    
    if( this.cantidadDeboletos >= (this.cantidadCompradores*7)) {
      console.log('==================================== bletos disp');
      console.log(this.cantidadCompradores*7);
      console.log('====================================');
      precio = 0 
      
    } 
    this.total = precio
    console.log(precio);
    
    return precio
  }

  ngOnInit(): void {
    this.boletosDisponibles = this.cantidadCompradores * 7;

  }

}
