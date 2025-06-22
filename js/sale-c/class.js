export class Mattress {
    constructor(brand, quantity) {
        this._brand = brand
        this._quantity = quantity

    }
    get getBrand() {
        return this._brand
    }

    get getQuantity() {
        return this._quantity
    }

    set setBrand(brand) {
        this._brand = brand
    }
    set setQuantity(quantity) {
        this._quantity = quantity;
    }
}