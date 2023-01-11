import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comentario } from 'src/app/interfaces/comentario';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-ver-comentario',
  templateUrl: './ver-comentario.component.html',
  styleUrls: ['./ver-comentario.component.css']
})
export class VerComentarioComponent implements OnInit {
  id:number;
  comentario:Comentario|undefined;
  constructor(private Route:ActivatedRoute,
    private comentarioService:ComentarioService){
    this.id=+this.Route.snapshot.paramMap.get('id')!;
  }
  ngOnInit(){
    this.getComentario();
  }
  getComentario(){
    this.comentarioService.getComentario(this.id).subscribe(data=>{
      this.comentario=data;
    });
  }
}
