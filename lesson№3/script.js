const API_URL =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";


class GoodsItem {
  constructor(title, price, id) {
    this.title = title;
    this.price = price;
    this.id = id;
  }
  render() {
    return `<div class="goods-item" id=${this.id}><h3>${this.title}</h3><p>${this.price}</p><button class="product_button" type="submit">Add to cart</button></div>`;
  }
}

 
class GoodsList {
  constructor() {
    this.goods = [];
  }

  async fetchGoods() {
    const responce = await fetch(`${API_URL}/catalogData.json`);
    if (responce.ok) {
      const catalogItems = await responce.json();
      this.goods = catalogItems;
    } else {
      alert("Ошибка при соединении с сервером");
    }
  }

  render() {
    let listHtml = "";
    this.goods.forEach((good) => {
      const goodItem = new GoodsItem(
        good.product_name,
        good.price,
        good.id_product
      );
      listHtml += goodItem.render();
    });
    document.querySelector(".goods-list").innerHTML = listHtml;
  }
}

class BasketItem extends GoodsItem{
  render() {
    return `<div class="cart-item" id=${this.id}><h3>${this.title}</h3><p>${this.price}</p><button class="product_button" type="submit">Delete</button></div>`;
  }
};

class BasketList {
  constructor() {
    this.BasketGoods = [];
  }

  buttonOperation() {
    let buttonAdd = document.querySelectorAll('.product_button');
    buttonAdd.forEach((product) => {
      // При нажатии на кнопку она меняет цвет
        product.onmousedown = () => {
        product.style.backgroundColor = '#F16D7F';
        product.style.color = '#ffffff';
        };
      // При отжатии кнопки возвращаем цвет обратно
        product.onmouseup = ()=> {
        product.style.backgroundColor = '#ffffff';
        product.style.color = '#F16D7F';
        let currentId = product.parentElement.id;
        let cartProduct = document.getElementById(currentId);
        let currentTitle = cartProduct.children[0].innerText;
        let currentPrice = cartProduct.children[1].innerText;
        
        this.fetchBasket(currentTitle, currentPrice, currentId);
        this.addToCart();
        buttonAdd = document.querySelectorAll('.product_button').forEach((btn)=>{
          if(btn.innerText == "Delete"){
            btn.addEventListener('click', (event) => {
              let deleteId = event.target.parentElement.id;
              this.deleteGood(deleteId);
              this.addToCart();
            });
          }
          });
        };  
        
      });
    }
    fetchBasket(currentTitle, currentPrice, currentId) {
      this.BasketGoods.push({product_name: currentTitle, price: currentPrice, id_product: currentId});
    }
  
  addToCart(){

   let listCart = "<h3>КОРЗИНА</h3>";
    this.BasketGoods.forEach((good) => { 
     const basketItem = new BasketItem(
      good.product_name,
      good.price,
      good.id_product
      );
      listCart += basketItem.render();
      });
    document.querySelector(".cart-list").innerHTML = listCart;
  };
     
  deleteGood(deleteId){
    this.BasketGoods.forEach((elem)=>{
      if (elem.id_product == deleteId){
        this.BasketGoods.splice(elem, 1);
      }
    });
  };

};

const init = async () => {
  const list = new GoodsList();
  await list.fetchGoods();
  list.render();
  const basketList = new BasketList();
  basketList.buttonOperation();
};

window.onload = init;

// const init = () => {
//   setTimeout(() => {
//     console.log('Hi')
//   }, 5000)
// setInterval(() => {
//   console.log("Назойливый popup");
// }, 2000);
// };

// window.onload = init;