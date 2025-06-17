export class Promedio{
    constructor(nombre,apellido,n1,n2,n3,n4){
        this._nombre = nombre
        this._apellido = apellido
        this._n1 = n1
        this._n2 = n2
        this._n3 = n3
        this._n4 = n4
    }
    get getNombre(){
        return this._nombre
    }
    get getApellido(){
        return this._apellido
    }
    get getNota1(){
        return this._n1
    }
     get getNota2(){
        return this._n2
    }
     get getNota3(){
        return this._n3
    }
     get getNota4(){
        return this._n4
    }
    set setNombre(nombre){
        this._nombre = nombre
    }
    set setApellido(apellido){
        this._apellido = apellido
    }
    set setNota1(nota1){
        this._n1 = nota1
    }
    set setNota2(nota2){
        this._n2 = nota2
    }
    set setNota3(nota3){
        this._n3 = nota3
    }
    set setNota4(nota4){
        this._n4 = nota4
    }
}