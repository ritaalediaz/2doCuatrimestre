
export abstract class Personajes {
    protected nombre: string;
    protected nivel: number=1;
    protected habilidades: string;
    protected vida:number=100;
    protected fuerza:number;
    public constructor(nombre: string, nivel: number = 1, habilidades: string, vida:number,fuerza:number) {
        this.nombre = nombre;
        this.nivel = nivel;
        this.habilidades = habilidades;
        this.vida=100;
        this.fuerza=fuerza;
    }
    abstract atacar(): void;
    abstract defender(): void;
    public mostrarInfo():void{
    }
    // Getters
    public getNombre(): string {
        return this.nombre;
    }
    public getNivel(): number {
        return this.nivel;
    }
    public getHabilidades(): string {
        return this.habilidades;
    }
    public getVida():number{
        return this.vida;
    }
    public getFuerza():number{
        return this.fuerza;
    }
    // Setters
    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }
   public setNivel(nivel: number): void {
        this.nivel = nivel;
    }
   public setHabilidades(habilidades: string): void {
        this.habilidades = habilidades;
    }
   public setVida(vida:number):void{
        this.vida=100;
    }   
    public setFuerza(fuerza:number):void{
        this.fuerza=fuerza;
    }
 //metodos
public atacarOponente():void{
    return console.log("ataca al oponente");
 }
public defenderse():void{
    return console.log("se esta defendiendo del enemigo")
}
}


