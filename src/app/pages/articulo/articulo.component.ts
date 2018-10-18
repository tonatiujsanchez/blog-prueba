import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticulosService } from '../../services/articulos.service';

import { Meta } from '@angular/platform-browser'


declare function init_plugins();

@Component({
    selector: 'app-articulo',
    templateUrl: './articulo.component.html',
    styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

    articulo:any={};
    constructor( private route: ActivatedRoute, 
                public articulosService: ArticulosService,
                private meta:Meta) {

    }

    ngOnInit() {
        init_plugins();

        this.route.params
            .subscribe(parametros => {


                console.log(parametros['id']);
                this.articulosService.cargarArticulo(parametros['id'])
                    .subscribe((articulo) => {
                        this.articulo = articulo;

                        //this.meta.addTag({ name:'og:url', content: ''});
                        this.meta.addTag({ name:'keywords', content: 'Tlapa de transforma con la esperanza de la gente'});
                        this.meta.addTag({ name:'type', content: 'articulo'});
                        this.meta.addTag({ name:'title', content: this.articulo.titulo});
                        this.meta.addTag({ name:'description', content: this.articulo.descripcion});
                        this.meta.addTag({ name:'image', content: this.articulo.foto_web});


                    });


            });
    }

}
