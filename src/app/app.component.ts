import { Component, OnInit } from '@angular/core';
import { ArticulosService } from './services/articulos.service';

declare function init_plugins();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    
    constructor( public articulosService: ArticulosService ){

    }

    ngOnInit(){
        init_plugins();
    }
}
