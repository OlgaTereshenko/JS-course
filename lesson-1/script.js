const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
  ]
   // присвоила аргументам значения по умолчанию 
  const renderGoodsItem = (title = "Название товара", price = "Цена") => {
    return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`
  };
  
  const renderGoodsList = list => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
  
    //   const goodsListDiv = document.querySelector('.goods-list')
    //   goodsListDiv.innerHTML = goodsList
    
    document.querySelector('.goods-list').innerHTML = goodsList.join(""); // Убрала запятую

    // Попробовала упростить написание функции (задание 2), но получилось как-то нечитабельно, поэтому закомментила
    //  document.querySelector('.goods-list').innerHTML = list.map(item => renderGoodsItem(item.title, item.price)).join("");
  };
  
  const init = () => {
    renderGoodsList(goods)
  };

  window.onload = init;