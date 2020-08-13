import {Injectable} from '@angular/core';
import {Data} from './data';
import {CartProductId} from './cart-product-id';
import {CartProduct} from './cart-product';
import {Categories} from './categories';
import {FilterService} from './filter.service';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  searchNames: string[] = [];

  categories: Categories[] = [
    {
      name: 'new-arrivals',
      subCategories: [
          'monday',
          'tuesday',
          'wednesday',
          'thursday',
          'friday',
          'saturday',
          'sunday'
      ]
    },
    {
      name: 'best-seller',
      subCategories: [
          'today',
          'this week',
          'last week',
          'this month',
          'last month'
      ]
    },
    {
      name: 'women',
      subCategories: [
          'bags',
          'shirts',
          'skirts',
          'dresses',
          'coat',
          'shoes'
      ]
    },
    {
      name: 'men',
      subCategories: [
          'trousers',
          'shorts',
          'suits',
          'vests',
          'shirts',
          'shoes',
      ]
    },
    {
      name: 'kids',
      subCategories: [
          'girl | 5-14 years',
          'boy | 5-14 years',
          'baby girl',
          'baby boy',
      ]
    }
  ];

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
        'women', 'best-seller',
      ],
      subCategories: [
        'dresses'
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
        'women', 'best-seller',
      ],
      subCategories: [
        'shirts'
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
        'orange',
        'blue'
      ],
      quality: 'wool',
      sizes: [
        'M',
        'XL',
        'XXL'
      ],
      gender: 'women',
      categories: [
        'women', 'best-seller',
      ],
      subCategories: [
        'dresses'
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
          'women', 'best-seller', 'new-arrivals'
      ],
      subCategories: [
        'shirts'
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
    {
      id: 'c3d444c3d2774263ab93598fb0705374',
      cardTitle: 'Title Men shirt',
      cardShortDescription: 'My short description 1',
      cardDescription: 'y dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
      colors: [
        'blue',
        'black',
        '#6a1b9a',
        'red'
      ],
      quality: 'wool',
      sizes: [
        'M',
        'XL',
        'XXL'
      ],
      gender: 'men',
      categories: [
        'men', 'new-arrivals'
      ],
      subCategories: [
        'shirts', 'monday'
      ],
      primaryMediaUrl: 'https://static.zara.net/photos///2020/I/0/2/p/5604/369/048/2/w/539/5604369048_9_1_1.jpg?ts=1597060636763',
      additionalMediaUrls: [
        'https://static.zara.net/photos///2020/I/0/2/p/5604/369/048/22/w/539/5604369048_9_1_1.jpg?ts=1597055684914',
        'https://static.zara.net/photos///2020/I/0/2/p/5604/369/048/2/w/539/5604369048_9_1_1.jpg?ts=1597060636763',
      ],
      listOfPlans: [
        {
          price: {
            amount: 150,
            currency: 'EUR',
            currencySymbol: ''
          }
        }
      ],
    },
    {
      id: 'c3d444c3d2774263ab93598fb0705375',
      cardTitle: 'Men shirt',
      cardShortDescription: 'My short description 1',
      cardDescription: 'y dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
      colors: [
        'green',
        'black',
        'red'
      ],
      quality: 'leather',
      sizes: [
        'L',
        'XL',
      ],
      gender: 'men',
      categories: [
        'men', 'best-seller'
      ],
      subCategories: [
        'shirts', 'last month'
      ],
      primaryMediaUrl: 'https://static.zara.net/photos///2020/I/0/2/p/5604/369/048/2/w/539/5604369048_9_1_1.jpg?ts=1597060636763',
      additionalMediaUrls: [
        'https://static.zara.net/photos///2020/I/0/2/p/5604/369/048/22/w/539/5604369048_9_1_1.jpg?ts=1597055684914',
        'https://static.zara.net/photos///2020/I/0/2/p/5604/369/048/2/w/539/5604369048_9_1_1.jpg?ts=1597060636763',
      ],
      listOfPlans: [
        {
          price: {
            amount: 150,
            currency: 'EUR',
            currencySymbol: ''
          }
        }
      ],
    },
    {
      id: 'c3d444c3d2774263ab93598fb0705376',
      cardTitle: 'Man Coat',
      cardShortDescription: 'My short description 1',
      cardDescription: 'y dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
      colors: [
        'blue',
        'green',
        '#6a1b9a',
        'red'
      ],
      quality: 'cotton',
      sizes: [
        'XS',
        'S',
        'XL',
        'XXL'
      ],
      gender: 'men',
      categories: [
        'men', 'new-arrivals'
      ],
      subCategories: [
        'shirts', 'friday'
      ],
      primaryMediaUrl: 'https://static.zara.net/photos///2020/I/0/2/p/0706/320/707/3/w/661/0706320707_1_1_1.jpg?ts=1597079689960',
      additionalMediaUrls: [
        'https://static.zara.net/photos///2020/I/M/2/p/0000/002/743/2/w/263/0000002743_1_1_1.jpg?ts=1597059264760',
        'https://static.zara.net/photos///2020/I/0/2/p/0706/320/707/3/w/661/0706320707_1_1_1.jpg?ts=1597079689960',
      ],
      listOfPlans: [
        {
          price: {
            amount: 170,
            currency: 'EUR',
            currencySymbol: ''
          }
        }
      ],
    },
    {
      id: 'c3d444c3d2774263ab93598fb0705377',
      cardTitle: 'Man Coat 2',
      cardShortDescription: 'My short description 1',
      cardDescription: 'y dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
      colors: [
        'blue',
        'green',
        '#6a1b9a',
        'pink'
      ],
      quality: 'rayon',
      sizes: [
        'XS',
        'S',
        'XL',
        'XXL'
      ],
      gender: 'men',
      categories: [
        'men', 'new-arrivals'
      ],
      subCategories: [
        'shirts', 'tuesday'
      ],
      primaryMediaUrl: 'https://static.zara.net/photos///2020/I/0/2/p/0706/320/707/3/w/661/0706320707_1_1_1.jpg?ts=1597079689960',
      additionalMediaUrls: [
        'https://static.zara.net/photos///2020/I/M/2/p/0000/002/743/2/w/263/0000002743_1_1_1.jpg?ts=1597059264760',
        'https://static.zara.net/photos///2020/I/0/2/p/0706/320/707/3/w/661/0706320707_1_1_1.jpg?ts=1597079689960',
      ],
      listOfPlans: [
        {
          price: {
            amount: 70,
            currency: 'EUR',
            currencySymbol: ''
          }
        }
      ],
    },
    {
      id: 'c3d444c3d2774263ab93598fb0705378',
      cardTitle: 'Man shirt 1',
      cardShortDescription: 'My short description 1',
      cardDescription: 'y dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
      colors: [
        'blue',
        'brown',
        'purple'
      ],
      quality: 'cotton',
      sizes: [
        'XS',
        'S',
        'XL',
        'XXL'
      ],
      gender: 'men',
      categories: [
        'men', 'new-arrivals'
      ],
      subCategories: [
        'shirts', 'saturday'
      ],
      primaryMediaUrl: 'https://static.zara.net/photos///2020/I/0/2/p/0706/320/707/3/w/661/0706320707_1_1_1.jpg?ts=1597079689960',
      additionalMediaUrls: [
        'https://static.zara.net/photos///2020/I/M/2/p/0000/002/743/2/w/263/0000002743_1_1_1.jpg?ts=1597059264760',
        'https://static.zara.net/photos///2020/I/0/2/p/0706/320/707/3/w/661/0706320707_1_1_1.jpg?ts=1597079689960',
      ],
      listOfPlans: [
        {
          price: {
            amount: 70,
            currency: 'EUR',
            currencySymbol: ''
          }
        }
      ],
    },
    {
      id: 'c3d444c3d2774263ab93598fb0705379',
      cardTitle: 'Man shirt 2',
      cardShortDescription: 'My short description 1',
      cardDescription: 'y dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
      colors: [
        'brown',
        'purple'
      ],
      quality: 'wool',
      sizes: [
        'XS',
        'S',
        'XXL'
      ],
      gender: 'men',
      categories: [
        'men', 'best-seller'
      ],
      subCategories: [
        'shorts', 'last week'
      ],
      primaryMediaUrl: 'https://static.zara.net/photos///2020/I/0/2/p/0706/313/704/22/w/263/0706313704_2_1_1.jpg?ts=1597249942222',
      additionalMediaUrls: [
          'https://static.zara.net/photos///2020/I/0/2/p/0706/313/704/22/w/661/0706313704_1_1_1.jpg?ts=1597242834856',
        'https://static.zara.net/photos///2020/I/0/2/p/0706/314/505/22/w/539/0706314505_9_1_1.jpg?ts=1597245893863',
        'https://static.zara.net/photos///2020/I/0/2/p/0706/314/505/23/w/539/0706314505_9_1_1.jpg?ts=1597245893662',
      ],
      listOfPlans: [
        {
          price: {
            amount: 10,
            currency: 'EUR',
            currencySymbol: ''
          }
        }
      ],
    },
  ];

  constructor(private filterService: FilterService) {
  }

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

  public getProductsByCategory(category: string): Data[] {
    const newData: Data[] = [];
    this.products.forEach((productValue, productIndex) => {
      productValue.categories.forEach((categoryValue, categoryIndex) => {
        if (categoryValue === category) {
          newData.push(productValue);
        }
      });
    });
    return newData;
  }

  public getProductsBySubcategory(category: string, subCategory: string): Data[] {
    const newData: Data[] = [];
    this.products.forEach((productValue, productIndex) => {
      productValue.categories.forEach((categoryValue, categoryIndex) => {
        if (categoryValue === category) {
          productValue.subCategories.forEach((subCatValue, subCatIndex) => {
            if (subCatValue === subCategory) {
              newData.push(productValue);
            }
          });
        }
      });
    });
    return newData;
  }

  public getSubcategoriesByName(category: string): string[] {
    let newSubCategories: string[] = [];
    this.categories.forEach((value, index) => {
      if (category === value.name) { newSubCategories = value.subCategories; }
    });
    return newSubCategories;
  }

  getProductsBySearch(search: string): Data[] {
    let newProducts: Data[] = [];
    const regex = new RegExp(search, 'i');
    this.products.forEach((value, index) => {
      if (regex.test(value.cardTitle)){
        newProducts.push(value);
      }
    });
    if (this.filterService.filterEnabled){
      let filteredProducts: Data[] = [];
      if (this.filterService.low !== null && this.filterService.high !== null) {
        newProducts.forEach((value, index) => {
          if (this.getPrice(value.id) > this.filterService.low && this.getPrice(value.id) < this.filterService.high) {
            filteredProducts.push(value);
          }
        });
        newProducts = filteredProducts;
        filteredProducts = [];
      }
      if (this.filterService.color !== null) {
        newProducts.forEach((productValue, productIndex) => {
          productValue.colors.forEach(colorValue => {
            if (colorValue === this.filterService.color) {
              filteredProducts.push(productValue);
            }
          });
        });
        newProducts = filteredProducts;
        filteredProducts = [];
      }
      if (this.filterService.quality !== null) {
        newProducts.forEach(value => {
          if (value.quality === this.filterService.quality) {
            filteredProducts.push(value);
          }
        });
        newProducts = filteredProducts;
        filteredProducts = [];
      }
      if (this.filterService.size !== null) {
        newProducts.forEach((productValue, productIndex) => {
          productValue.sizes.forEach(sizeValue => {
            if (sizeValue === this.filterService.size) {
              filteredProducts.push(productValue);
            }
          });
        });
        newProducts = filteredProducts;
        filteredProducts = [];
      }
    }
    return newProducts;
  }
}
