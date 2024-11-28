import { Component, OnInit } from '@angular/core';
import {Veiculo} from "../veiculo";
import {ApiVeiculoService} from "../api-veiculo.service";
import {ConfirmationService, MessageService} from "primeng/api";

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styles: [`
        :host ::ng-deep .p-dialog {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        }
    `],

  styleUrls: ['./veiculo.component.scss']
})
export class VeiculoComponent implements OnInit {
 SETEDIAS=604800000;

  veiculos: Veiculo[]=[];
  anos:any[];
  cores:any[]
  marcas: any[];
  submitted: boolean;
  veiculo: Veiculo;
  veiculoDialog: boolean;
  editando: boolean;
  selectedVeiculos: Veiculo[];


  constructor( private apiService: ApiVeiculoService,
               private messageService: MessageService,
               private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.iniciarBusca();
    this.marcas = [
      {label: 'FORD', value: 'Ford'},
      {label: 'CHEVROLET', value: 'Chevrolet'},
      {label: 'FIAT', value: 'Fiat'},
      {label: 'WOLKSWAGEN', value: 'Volkswagen'},
      {label: 'RENAULT', value: 'Renault'},
      {label: 'PEUGEOT', value: 'Peugeot'},
      {label: 'JEEP', value: 'Jeep'},
      {label: 'TOYOTA', value: 'Toyota'},
      {label: 'CITROËN', value: 'Citroën'}

    ];
  }

  private iniciarBusca() {
    this.apiService.buscaVeiculos().subscribe(
      res => {
        this.veiculos = res.body as Veiculo[];
        // this.popularAnos()
        // this.popularCores()
        console.log(this.veiculos);
      }
    )
  }

  openNew() {
    this.veiculo = {};
    this.submitted = false;
    this.editando=false;
    this.veiculoDialog = true;
  }





  hideDialog() {
    this.veiculoDialog = false;
    this.submitted = false;
  }



  saveVeiculo() {
    this.submitted=true;
    if(this.editando){
      this.apiService.editarVeiculo(this.veiculo).subscribe(
        res=>{
          this.iniciarBusca()
          this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Veículo Atualizado!', life: 3000});
        },error => {
          this.messageService.add({severity: 'error', summary: 'Erro', detail: ''+error.detail, life: 3000});
        }
      )
    }else {
      this.apiService.salvarVeiculo(this.veiculo).subscribe(
        res => {
          this.iniciarBusca()
          this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Veículo Adicionado!', life: 3000});
        }, error => {
          this.messageService.add({severity: 'error', summary: 'Erro', detail: ''+error.detail, life: 3000});
        }
      )
    }
    this.veiculoDialog=false;
    this.veiculo={};

  }

  editVeiculo(veiculo: Veiculo) {
    this.veiculo = {...veiculo};
    this.editando=true;
    this.veiculoDialog = true;
  }

  deleteVeiculo(veiculo: Veiculo) {
    this.apiService.excluirVeiculo(veiculo).subscribe(
      res=>{
        this.iniciarBusca()
        this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Veiculo Excluído!', life: 3000});
      },error => {
        this.messageService.add({severity: 'error', summary: 'Erro', detail: ''+error.detail, life: 3000});
      }
    )
  }
  // popularAnos(){
  //   for (let veiculo of this.veiculos) {
  //     this.anos.push({label: veiculo.ano, value: veiculo.ano})
  //   }
  //   console.log(this.anos)
  // }
  // popularCores(){
  //   for (let veiculo of this.veiculos) {
  //     this.cores.push({label: veiculo.cor?.toUpperCase(), value: veiculo.cor})
  //   }
  //   console.log(this.cores)
  // }
  contarCarrosVendidos(){
    let cont =0
    for (let veiculo of this.veiculos) {
      if(veiculo.vendido){
        cont++
      }
    }
    return cont
  }
  cadastradoNaUltimaSemana(veiculo:Veiculo){
    const dataHoje = new Date();
    if(veiculo.created) {
      let dataVeiculo = new Date(veiculo.created)
      if(dataHoje.getMilliseconds()-dataVeiculo.getMilliseconds()>this.SETEDIAS){
        return false
      }
      return true;
    }
    return false;
  }
  contarCarrosNaoVendidos(){
    let cont =0
    for (let veiculo of this.veiculos) {
      if(!veiculo.vendido){
        cont++
      }
    }
    return cont
  }
  contarCarrosPorDecada(ano:string){
    let cont =0
    const year :bigint=BigInt(ano)
    const nove :bigint=BigInt(9);
    for (let veiculo of this.veiculos) {
      if(veiculo.ano){
        if(veiculo.ano>=year && veiculo.ano<=(year+nove)){
          cont++;
        }
      }
    }
    return cont
  }
  ContarCarrosPorMarca(marca:string){
    let cont =0
    for (let veiculo of this.veiculos) {
      if(veiculo.marca  == marca){
        cont++;
      }
    }
    return cont
  }
  deleteSelectedVeiculos() {
    for(let veiculo of this.selectedVeiculos) {
      this.deleteVeiculo(veiculo);
    }
  }

}
