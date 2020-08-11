import {Injectable} from '@angular/core';
import {Data} from './data';
import {CartProductId} from './cart-product-id';
import {CartProduct} from './cart-product';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  searchNames: string[] = [];

  products: Data[] = [
    {
      id: 'c3d444c3d2774263ab93598fb0705370',
      cardTitle: 'Title 1',
      cardShortDescription: 'My short description 1',
      cardDescription: 'y dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
      colors: [
        'red',
        'black',
        '#6a1b9a'
      ],
      quality: 'wool',
      sizes: [
        'M',
        'XL',
        'XXL'
      ],
      gender: 'women',
      categories: [
          'shirt'
      ],
      primaryMediaUrl: 'https://static.zara.net/photos///2020/I/0/1/p/0962/175/250/3/w/538/0962175250_1_1_1.jpg?ts=1596794662787',
      additionalMediaUrls: [
        'https://static.zara.net/photos///2020/I/0/1/p/0962/175/250/3/w/538/0962175250_1_1_1.jpg?ts=1596794662787',
        'https://static.zara.net/photos///2020/I/0/1/p/0962/175/250/3/w/538/0962175250_1_1_1.jpg?ts=1596794662787',
        'https://static.zara.net/photos///2020/I/0/1/p/0962/175/250/3/w/538/0962175250_1_1_1.jpg?ts=1596794662787'
      ],
      listOfPlans: [
         {
           price: {
             amount: 8900,
             currency: 'EUR',
             currencySymbol: ''
           }
         }
       ],
    },
    {
      id: 'c3d444c3d2774263ab93598fb0705371',
      cardTitle: 'Title 2',
      cardShortDescription: 'My short description 1',
      cardDescription: 'y dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
      colors: [
        'green',
        'purple',
        'blue'
      ],
      quality: 'wool',
      sizes: [
        'XS',
        'S',
        'M',
        'L',
      ],
      gender: 'women',
      categories: [
          'shirt',
      ],
      primaryMediaUrl: 'https://static.zara.net/photos///2020/I/0/1/p/7954/618/715/4/w/538/7954618715_1_1_1.jpg?ts=1597061487798',
      additionalMediaUrls: [
        'https://static.zara.net/photos///2020/I/0/1/p/2636/489/505/4/w/538/2636489505_2_1_1.jpg?ts=1597061748464',
        'https://static.zara.net/photos///rw-center/2020/I/0/1/p/4786/245/712/4/w/1087/4786245712_2_2_1.jpg?ts=1597060658701',
      ],
      listOfPlans: [
        {
          price: {
            amount: 300,
            currency: 'EUR',
            currencySymbol: ''
          }
        }
      ],
    },
    {
      id: 'c3d444c3d2774263ab93598fb0705372',
      cardTitle: 'Title 3',
      cardShortDescription: 'My short description 1',
      cardDescription: 'y dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
      colors: [
        'red',
        'black',
        '#6a1b9a'
      ],
      quality: 'wool',
      sizes: [
        'M',
        'XL',
        'XXL'
      ],
      gender: 'women',
      categories: [
        'shirt'
      ],
      primaryMediaUrl: 'https://static.zara.net/photos///2020/I/0/1/p/6254/106/737/3/w/538/6254106737_2_1_1.jpg?ts=1597061487763',
      additionalMediaUrls: [
        'https://static.zara.net/photos///2020/I/0/1/p/7845/618/715/3/w/538/7845618715_1_1_1.jpg?ts=1597061492279',
      ],
      listOfPlans: [
        {
          price: {
            amount: 8900,
            currency: 'EUR',
            currencySymbol: ''
          }
        }
      ],
    },
    {
      id: 'c3d444c3d2774263ab93598fb0705373',
      cardTitle: 'Title 4',
      cardShortDescription: 'My short description 1',
      cardDescription: 'y dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
      colors: [
        'red',
        'black',
        '#6a1b9a'
      ],
      quality: 'wool',
      sizes: [
        'M',
        'XL',
        'XXL'
      ],
      gender: 'women',
      categories: [
        'shirt'
      ],
      primaryMediaUrl: 'https://static.zara.net/photos///2020/I/0/1/p/1014/413/717/2/w/538/1014413717_2_1_1.jpg?ts=1596707770096',
      additionalMediaUrls: [
        'https://static.zara.net/photos///rw-center/2020/I/0/1/p/7901/316/742/2/w/1087/7901316742_1_1_1.jpg?ts=1596707776884',
        'https://static.zara.net/photos///rw-center/2020/I/0/1/p/7901/320/612/2/w/1087/7901320612_2_3_1.jpg?ts=1596707817311',
      ],
      listOfPlans: [
        {
          price: {
            amount: 8900,
            currency: 'EUR',
            currencySymbol: ''
          }
        }
      ],
    },
  ];



  public getProducts(): Data[] {
    return this.products;
  }

  public getProductsById(productIds: string[]): Data[] {
    const cartProducts: Data[] = [];
    if (productIds === null) {return cartProducts; }
    for (const product of this.products) {
      for (const productId of productIds) {
        if (productId === product.id) { cartProducts.push(product); }
      }
    }
    return cartProducts;
  }

  public getCartProductsById(productIds: CartProductId[]): CartProduct[] {
    const cartProducts: CartProduct[] = [];
    if (productIds === null || productIds === []) {return cartProducts; }
    for (const productId of productIds) {
      for (const product of this.products) {
        if (productId.itemId === product.id) {
          cartProducts.push(new CartProduct(product, productId.quantity));
        }
      }
    }
    return cartProducts;
  }

  public getProductById(id: string): Data {
    for (const product of this.products) {
      if (product.id === id) { return product; }
    }
  }

  public getPrice(productId: string): number {
    let amount = 0;
    for (const product of this.products) {
      if (productId === product.id) {
        const listOfPlans = product.listOfPlans;
        for (const plan of listOfPlans) {
          if (plan.price.currency === 'EUR') {
            amount = plan.price.amount;
          } else if (plan.price.currency === 'USD') {
            amount = plan.price.amount * 0.85; // 1USD = 0,85EUR
          }
        }
      }
    }
    return amount;
  }

  public getAllNames(): string[] {
    this.searchNames = [];
    for (const product of this.products) {
      this.searchNames.push(product.cardTitle);
    }
    return this.searchNames;
  }
}
