/*
Необходимо сделать корзину (Cart) на сайте,

    которая имееет список продуктов (Product), добавленных в корзину

и параметры доставки (Delivery). Для Cart реализовать методы:

    - Добавить продукт в корзину

- Удалить продукт из корзины по ID

- Посчитать стоимость товаров в корзине

- Задать доставку

- Checkout - вернуть что всё ок, если есть продукты и параметры доставки

Product: id, название и цена

Delivery: может быть как до дома (дата и адрес) или до пункта выдачи (дата = Сегодня и Id магазина)*/

class Product {
    constructor(public id: number,
                public name: string,
                public price: number) {
    }

}

class Delivery {
    constructor(public date: Date) {
    }
}
class HomeDelivery extends Delivery {
    address: string

    constructor(date: Date, address: string) {
        super(date);
        this.address = address
    }
}

class ShopDelivery extends Delivery {
    constructor(public shopId: number) {
        super(new Date());

    }
}

type DeliveryOptions = HomeDelivery | ShopDelivery

class Cart {
    private products: Product[] = []
    private delivery: DeliveryOptions


    addProductToCart (product: Product): void {
        this.products.push(product)
    }

    deleteProductFromCart(productId: number): void {
        this.products = this.products.filter((item: Product) => item.id !== productId)
    }

    sumPriceProducts(): number {
        return this.products
            .map((item: Product) => item.price)
            .reduce(((previousPrice: number, currentPrice: number) => previousPrice + currentPrice ))
    }

    setDelivery(delivery: DeliveryOptions): void {
        this.delivery = delivery
    }

    checkOut() {
        if (this.products.length === 0) {
            throw new Error('Нет ни одного товара в корзине')
        }

        if (!this.delivery) {
            throw new Error('Не выбран способ доставки')
        }

        return { success: true }
    }
}

const cart = new Cart()
cart.addProductToCart(new Product(1, 'Печенье', 40))
cart.addProductToCart(new Product(2, 'Рулет', 130))
cart.addProductToCart(new Product(1, 'Арбуз', 10))
cart.setDelivery(new HomeDelivery(new Date(), ''))
console.log(cart.sumPriceProducts())
console.log(cart.checkOut())



