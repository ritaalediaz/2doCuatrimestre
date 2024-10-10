
export class Patente{
    private numero: number;
    private letra: string;
   

    constructor(numeros: number, letras:string, nacionalidad:string){
        this.numero = numeros;
        this.letra = letras;
  
    }
    // getters
   public getNumero():number{
        return this.numero;
    }
    public getLetra():string{
        return this.letra;
    }
   
}