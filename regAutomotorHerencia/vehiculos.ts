export class Vehiculo {
    protected marca: string;
    protected modelo: string;
    protected anio: number;
    protected color: string;


    constructor (marca: string, modelo: string, anio: number, color: string){
        this.marca=marca;
        this.modelo=modelo;
        this.anio= anio;
        this.color= color;
        
    }


// Getters
public getMarca(): string {
    return this.marca;
}

public getModelo(): string {
    return this.modelo; 
}

public getAnio(): number { 
    return this.anio; 
}

public getColor(): string {
    return this.color;
} 


// Setters
public setMarca(marca: string): void {
    this.marca = marca; 
}

public setModelo(modelo: string): void {
    this.modelo = modelo; 
}

public setAnio(anio: number): void {
    this.anio = anio; 
}

public setColor(color: string): void {
    this.color= color; 
}
}