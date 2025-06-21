export class Colchon {
    constructor(marca, cantidad) {
        this._marca = marca
        this._cantidad = cantidad

    }
    get getMarca() {
        return this._marca
    }

    get getCantidad() {
        return this._cantidad
    }

    set setMarca(marca) {
        this._marca = marca
    }
    set setCantidad(cantidad) {
        this._cantidad = cantidad
    }
}