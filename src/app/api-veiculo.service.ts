import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Veiculo} from "./veiculo";

@Injectable({
  providedIn: 'root'
})
export class ApiVeiculoService {
  private apiUrl = environment.API_URL;
  constructor(private http: HttpClient) {

  }
  buscaVeiculos(){
    return this.http.get(`${this.apiUrl}/veiculos`,{observe:'response'})
  }
  buscaVeiculosComParametros(marca:string,ano:number,cor:string){
    console.log('Chamou!')
    return this.http.get(`${this.apiUrl}/veiculos/veiculos`,{observe:'response', params: new HttpParams()
        .set('marca', marca)
        .set('cor',cor).set('ano',ano)})
  }
  salvarVeiculo(veiculo:Veiculo){
    return this.http.post(`${this.apiUrl}/veiculos`, veiculo,{observe:'response'})
  }
  editarVeiculo(veiculo:Veiculo){
    return this.http.put(`${this.apiUrl}/veiculos/${veiculo.id}`,veiculo,{observe:'response'})
  }
  excluirVeiculo(veiculo:Veiculo){
    return this.http.delete(`${this.apiUrl}/veiculos/${veiculo.id}`,{observe:'response'})
  }
  venderVeiculo(veiculo:Veiculo){
   // return this.http.patch()
  }
}
