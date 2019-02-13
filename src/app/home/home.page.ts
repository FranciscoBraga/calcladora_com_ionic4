import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

	public valor : String ="";
	public auxiliar : string = "";

	public calcular(valor):void{

		if(valor == "="){
			this.valor = eval(this.auxiliar);
			this.auxiliar = eval(this.auxiliar);
			
		}
		if(valor == 'l'){
			this.valor = "";
			this.auxiliar ="";
		}
		if (valor != "=" && valor != 'l') {
			this.auxiliar += valor;
			this.valor = this.auxiliar;
		}

	}

}
