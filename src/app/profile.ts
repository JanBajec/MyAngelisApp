import {CardInfo} from './card-info';
import {ShippingAddress} from './shipping-address';
import {CartProductId} from './cart-product-id';

export class Profile {
    name: string;
    email: string;
    password?: string;
    address: string;
    zipCode?: string;
    phoneNum: string;
    card?: CardInfo;
    shippingAddresses?: ShippingAddress[];
    orderHistories?: CartProductId[];

    constructor(name: string, email: string, address: string, phoneNum: string, zipCode: string = '',
                card: CardInfo = new CardInfo(), shippingAddresses: ShippingAddress[] = [], orderHistories: CartProductId[] = []) {
        this.name = name;
        this.email = email;
        this.address = address;
        this.zipCode = zipCode;
        this.phoneNum = phoneNum;
        this.card = card;
        this.shippingAddresses = shippingAddresses;
        this.orderHistories = orderHistories;
    }
}
