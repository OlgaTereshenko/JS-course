const API_URL = "http://localhost:3000";

// import vue.component from "./goods-item"
// import vue.component from "./goods-list"
// import vue.component from "./cart-item"
// import vue.component from "./cart-list"

Vue.component("goods-item", {
  props: ["goodProp"],
  methods: {
    async addToCart() {
      const response = await fetch(`${API_URL}/addToCart`, {
        method: 'POST', 
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(this.goodProp)        
      })
      app.getCart();
      }
      
    },
  template: `
    <div class="goods-item" >
      <h3>{{goodProp.product_name}}</h3>
      <p>{{goodProp.price}}</p>
      <button @click=addToCart>Add to cart</button>
    </div>
  `,
});

Vue.component("goods-list", {
  props: ["goods"],
  template: `
    <div class="goods-list">
      <goods-item v-for="goodEntity in goods" :goodProp="goodEntity"></goods-item>
    </div>
  `,
});


Vue.component("cart-list", {
  props: ["busketGoods"],
  template: `
    <div class="goods-list">
      <cart-item v-for="goodEntity in busketGoods" :goodProp="goodEntity"></cart-item>
    </div>
  `,
});

Vue.component("cart-item", {
  props: ["goodProp"],
  methods: {
    async deleteFromBusket() {
      let currentItemIndex;
      const currentName = this.goodProp.product_name;
      app.busketGoods.forEach(function(elem, i) {
        if(currentName == elem.product_name) {
          currentItemIndex = i;
        }
      })
      app.busketGoods.splice(currentItemIndex, 1);
      const response = await fetch(`${API_URL}/deleteFromBusket`, {
        method: 'DELETE', 
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        
        body: JSON.stringify(app.busketGoods) 
      });
    },

  },
  template: `
    <div class="goods-item" >
      <h3>{{goodProp.product_name}}</h3>
      <p>{{goodProp.price}}</p>
      <button @click=deleteFromBusket>Delete from cart</button>
    </div>
  `,
});

const app = new Vue({
  el: "#app",
  data: {
    goods: [],
    filteredGoods: [],
    busketGoods: [],
    filteredCart: [],
    searchLine: "",
  },

  methods: {
    async getProducts() {
      const responce = await fetch(`${API_URL}/catalogData`);
      if (responce.ok) {
        const catalogItems = await responce.json();
        this.goods = catalogItems;
        this.filteredGoods = catalogItems;
      } else {
        alert("Ошибка при соединении с сервером");
      }
    },

    async getCart() {
      const responce = await fetch(`${API_URL}/cartData`);
      if (responce.ok) {
        const cartList= await responce.json();
        this.busketGoods = cartList;
        this.filteredCart = cartList;
    
      } else {
        alert("Ошибка при соединении с сервером");
      }
    },
  },

  async mounted() {
    await this.getProducts();
    //await this.getCart();
  },
});
