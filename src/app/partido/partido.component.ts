import { Component, OnInit } from '@angular/core';
import { Equipo } from '../Models/Equipo';
import { Jugador } from '../Models/Jugador';
import { EquipoService } from '../servicies/Equipo.service';
import { JugadorService } from '../servicies/jugador.service';

@Component({
  selector: 'app-partido',
  templateUrl: './partido.component.html',
  styleUrls: ['./partido.component.css']
})
export class PartidoComponent implements OnInit {

  ListaEquipos:Equipo[];
  errorMensaje:string;
  local:string;
  equipoLocal:Equipo | undefined;
  equipoVisitante:Equipo | undefined;
  valoracionLocal:number;
  valoracionVisitante:number;
  plantelLocal:Jugador[];
  plantelVisitante:Jugador[];
  golesLocal:number;
  golesVisitante:number;
  resultadoSimulacion:string;
  VerResultado:string;

  constructor(private equipoService:EquipoService,private jugadorService:JugadorService) { }

  ngOnInit(): void {
    this.traerEquipos();
    console.log(this.ListaEquipos)
  }

  traerEquipos(){
    this.equipoService.getEquipos().subscribe((res:Equipo[])=>{
      this.ListaEquipos=res; 
      console.log(this.ListaEquipos) 
    });

  }

  obtenerEquipoVisitante(equipo:any){
    var visita = this.ListaEquipos.find(e => e.nombreEquipo == equipo.target.value);
    this.equipoVisitante = visita;
    var id= this.equipoVisitante?.idEquipo;
    this.jugadorService.getJugadorxEquipo(id).subscribe((res:Jugador[])=>{
      this.plantelVisitante = res;
      console.log("Plantel",this.plantelLocal);
    });
  }

  obtenerEquipoLocal(equipo:any){
    this.equipoLocal = this.ListaEquipos.find(e => e.nombreEquipo == equipo.target.value);
    var id= this.equipoLocal?.idEquipo;
    this.jugadorService.getJugadorxEquipo(id).subscribe((res:Jugador[])=>{
      this.plantelLocal = res;
      console.log("Plantel",this.plantelLocal);
    });
  }

  simularPartido(){
    if( this.equipoLocal == undefined || this.equipoVisitante == undefined){
      alert("DEBE SELECCIONAR 2 EQUIPOS");
      return
    }
    if(this.equipoLocal?.nombreEquipo == this.equipoVisitante?.nombreEquipo){
      alert("ELIGE EQUIPOS DIFERENTES");
      return
    }
    this.valoracionLocal=0;
    this.valoracionVisitante=1;
    console.log("aa");
    this.plantelLocal.forEach(p => {
      //console.log(p.valoracion + this.valoracionLocal);
      this.valoracionLocal += p.valoracion;
    });
    this.plantelVisitante.forEach(p => {
      this.valoracionVisitante += p.valoracion;
    });

    // for(let i = 0; i <= this.plantelVisitante.length; i++) {
    // this.valoracionVisitante+=this.plantelVisitante[i].valoracion;};
    console.log("VALORACION",this.valoracionLocal);
    console.log("VALORACION visita",this.valoracionVisitante);
    var randomLocal = Math.random();
    var randomVisitante=Math.random();
    console.log("Random local",randomLocal,"rnd visita;",randomVisitante)
    if(this.valoracionLocal > this.valoracionVisitante){
      //var tiempoNuevaRotura = (int)Math.Truncate(minimoUniforme + (RND * (maximoUniforme - minimoUniforme + 1)));
      this.golesLocal= Math.trunc(0+ (randomLocal * (7-0 + 1)));
      this.golesVisitante= Math.trunc(0 + (randomVisitante * (5-1 + 1)));
      console.log("Goles visxita",this.golesVisitante)
      console.log("Goles visxita",this.golesLocal)
    }
    else{    
      //var tiempoNuevaRotura = (int)Math.Truncate(minimoUniforme + (RND * (maximoUniforme - minimoUniforme + 1)));
      this.golesVisitante= Math.trunc(0 + (randomVisitante * (7-0 + 1)));
      this.golesLocal= Math.trunc(0 + (randomLocal * (5-0 + 1)));
      console.log("Goles visxita",this.golesVisitante)
      console.log("Goles visxita",this.golesLocal)
    }

    if(this.golesVisitante > this.golesLocal)
        this.resultadoSimulacion="GANO LA VISITA: "+this.equipoVisitante?.nombreEquipo;
    else 
      if(this.golesLocal == this.golesVisitante)
        this.resultadoSimulacion="EMPATE";      
      else
        this.resultadoSimulacion="GANO EL LOCAL: "+this.equipoLocal?.nombreEquipo; 
    
    this.VerResultado="SI";    
  }

  //SIMULAR QUIEN HIZO EL GOL,UN RANDOM DE LOS 10 U 11 PARA SACAR ALGUN JUGADOR.


}
