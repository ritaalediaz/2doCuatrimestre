
export class Patente{
    private numero: number;
    private letra: string;
   

    constructor(numeros: number, letras:string, nacionalidad:string){
        this.numero = numeros;
        this.letra = letras;
  
    }
    // getters
    getNumero():number{
        return this.numero;
    }
    getLetra():string{
        return this.letra;
    }
   
}