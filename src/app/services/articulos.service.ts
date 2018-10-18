import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';



@Injectable({
    providedIn: 'root'
})
export class ArticulosService {

    articulos:Taxista[]=[];
    lastKey: string = null;
    hayMas= false;

    constructor( private db: AngularFirestore) {
        //this.cargarArticulos();
        //this. cargarArticulosOrdenados();
        this.cargarUltimoKey().then(() => this.CargarMasArticulos().then( (hayMas2:boolean) =>{
            this.hayMas = hayMas2;
            console.log('hayMasService: ',this.hayMas);
      
        }));
     }

     cargarUltimoKey(){
        return new Promise(( resolve, reject )=>{

            this.db.collection('articulos', ref => ref.orderBy('id','desc').limit(1))
            .valueChanges().subscribe( (post:Taxista[])=>{
               
                this.lastKey = post[0].id;
                   
                this.articulos.push( post[0] );
                
                resolve();
            });

        });
     }

     CargarMasArticulos(){
         return new Promise(( resolve, reject )=>{

            this.db.collection('articulos',
                ref => ref.limit(1)
                .orderBy('id', 'desc')
                .startAfter(this.lastKey)
            ).valueChanges().subscribe((posts:Taxista[]) => {
                
                console.log( posts.length);
                
                if(posts.length == 0){
                    
                    console.log('Ya no hay mas articulos');
                    resolve(true);
                    return;
                }


                for (let index = 0; index < posts.length; index++) {
                    let post = posts[index];
                    this.articulos.push(post);
                    this.lastKey = posts[index].id;                
                }

                console.log('art- ',this.articulos);
                
                resolve(false);

            });
         });
     }

    















    cargarArticulos(){
        this.db.collection('articulos').valueChanges()
        .subscribe( ( data:Taxista[] ) => {
            
            data.forEach(element => {
                this.articulos.unshift(element);
            });
    
            console.log(this.articulos);
                    
        });
        
    }


    cargarArticulo(id:string) {
        return this.db.collection('articulos').doc(id).valueChanges();
    }


    cargarArticulosOrdenados(){
        console.log(this.articulos.length);
        
        let cantidad:number = this.articulos.length + 2;
        console.log(cantidad);

        this.db.collection('articulos', ref => ref.orderBy("fecha", "desc").limit( cantidad )).valueChanges()
        .subscribe( ( data:Taxista[] ) => {
             this.articulos =[];
            data.forEach(element => {
                this.articulos.push(element);
            });

            
        });  
        
    }

}








interface Taxista{
    id:string;
    titulo:string;
    fecha:string;
    categoria:string;
    descripcion:string;
    contenido:string;
    usuario:string;
    foto_movil?:string;
    foto_fb?:string;
    foto_web:string;
}