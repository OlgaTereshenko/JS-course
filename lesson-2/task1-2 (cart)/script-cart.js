

// Сделала наследование карточки товара со страницы каталога, изменила кнопку с "добавить в корзину" на "удалить из коризины"
class CartGoodsItem extends GoodsItem {
    render() {
        return `<div class="goods-item"><${this.photo} class = "img"><h3>${this.title}</h3><p>${this.price}</p><button class="product_button" type="submit">Delete</button></div>`;
      }
};

//Добавила класс "общая стоимость корзины", который включает себя стоимость товаров и их количество
class TotalPriceCart {
    constructor(price, amount){
        this.price = price;
        this.amount = amount;
    }
};


const init =() => {
 
}

window.onload = init;