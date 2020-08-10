import {Data} from './data';

export class CartProduct{
    item: Data;
    quantity: number;
    constructor(item: Data, quantity: number) {
        this.item = item;
        this.quantity = quantity;
    }
}
