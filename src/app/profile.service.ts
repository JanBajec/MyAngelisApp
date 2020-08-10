import {Injectable} from '@angular/core';
import {Profile} from './profile';
import {zip} from 'rxjs';
import {CardInfo} from './card-info';
import {ShippingAddress} from './shipping-address';
import {CartProductId} from './cart-product-id';

@Injectable({
    providedIn: 'root'
})

export class ProfileService {

    myProfile: Profile = new Profile('Jan Bajec', 'janbajec@gmail.com', 'Trzaska cesta 123', '031 999 333');

    constructor() {

    }

    onLogin(username: string, email: string, address: string, phoneNum: string, zipCode: string = '', card: CardInfo = null, shippingAddresses: ShippingAddress[] = null, orderHistories: CartProductId[] = null){
        // pridobi iz baze podatke
        this.myProfile = new Profile(name, email, address, phoneNum, zipCode, card, shippingAddresses, orderHistories);
    }

    onSignIn(username: string, email: string, address: string, phoneNum: string){
        this.myProfile = new Profile(name, email, address, phoneNum);
    }

    getMyProfile(): Profile {
        return this.myProfile;
    }

    setMyProfile(myProfile: Profile) {
        this.myProfile = myProfile;
    }

    setCardMethod(cardMethod: string) {
        this.myProfile.card.method = cardMethod;
    }

}
