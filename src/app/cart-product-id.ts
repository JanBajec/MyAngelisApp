export class CartProductId{
    itemId: string;
    quantity: number;
    constructor(itemId: string, quantity: number = 1) {
        this.itemId = itemId;
        this.quantity = quantity;
    }
}
