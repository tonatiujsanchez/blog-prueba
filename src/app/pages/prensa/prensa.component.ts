import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../../services/articulos.service';


declare function init_plugins();

@Component({
    selector: 'app-prensa',
    templateUrl: './prensa.component.html',
    styleUrls: ['./prensa.component.css']
})
export class PrensaComponent implements OnInit {
    articulos:any=[];
    public hayMas:boolean=false;

    cargando:boolean = false; 
    constructor( public _articulosService: ArticulosService) { 
        
    }

    ngOnInit() {
        init_plugins();               
    }



    cargarMas(){
        this._articulosService.CargarMasArticulos().then( (hayMas2:boolean) =>{
            console.log('hayMasComponente',hayMas2);
          
            this.hayMas = hayMas2;
         
        });
    }

    onScroll() {
        this.cargando = !this.hayMas;

        console.log('scrolled!!');
        this._articulosService.CargarMasArticulos().then( (hayMas2:boolean) =>{
            console.log('hayMasComponente',hayMas2);
            this.cargando = false;
            this.hayMas = hayMas2;
         
        });
    }

    onScrollUp() {
        //console.log('scrolled up!!');
      }
}
