
// класс товара
class GoodsItem {
    constructor(title, price, photo) {
      this.title = title;
      this.price = price;
      this.photo = photo;
    }
    render() {
      return `<div class="goods-item"><${this.photo} class = "img"><h3>${this.title}</h3><p>${this.price}</p><button class="product_button" type="submit">Add to cart</button></div>`;
    }
  }

  // класс каталога товаров, изначально пустой
  class GoodsList {
    constructor() {
      this.goods = [];
    }
  
    // метод для заполнения каталога товарами (можно брать их с сервера, чтобы они были актуальные)
    fetchGoods() {
      this.goods = [
        {photo: "img src='./img/woman-shirt.jpg'", title: "Shirt", price: 150},
        {photo: "img src='./img/man-panama.jpg'", title: "Panama", price: 50},
        {photo: "img src='./img/woman-jacket.jpg'", title: "Jacket", price: 350},
        {photo: "img src='./img/woman-shoes.jpg'",title: "Shoes", price: 250},
      ];
    }
  
    render() {
      // Создали пустую строку, кот. собираемся заполнить блоками товаров
      let listHtml = "";
      // проходим по всем товарам
      this.goods.forEach((good) => {
        // создаем объект класса GoodsItem
        const goodItem = new GoodsItem(good.title, good.price, good.photo);
          // заполняем listHtml товарами (дивами)
        listHtml += goodItem.render();
      });
      document.querySelector(".goods-list").innerHTML = listHtml;
    }
    
    // добавила метод для подсчета общей стоимости товаров
    totalPrice() {
       let sum = 0;
       this.goods.forEach((good) => {
        sum = sum + good.price;
      });
       console.log(sum);
    };

  }


  const init = () => {
    // Создаем объект list класса GoodsList
      const list = new GoodsList();
      list.fetchGoods();
      list.render();
      list.totalPrice();
  };
  
  window.onload = init;
  