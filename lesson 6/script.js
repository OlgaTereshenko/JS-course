  const API_URL =
 "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";


console.log(window)

Vue.component('goods-list', {
  props: ['goods'],
  template: `
    <div class="goods-list">
    <h3 v-if="goods.length == 0">Нет данных</h3>
      <goods-item v-for="goodEntity in goods" :goodProp="goodEntity"></goods-item>
    </div>
  `
})

Vue.component('goods-item', {
  props: ['goodProp'],
  template: `
    <div class="goods-item">
      <h3>{{goodProp.product_name}}</h3>
      <p>{{goodProp.price}}</p>
    </div>
  `
})

Vue.component('search', {
  template: `<input type="text" class="goods-search" v-model="searchLine"/>`,
  data() {
    return {searchLine: ''};
  }
})

Vue.component('cart', {
  template: `
  <div v-if="isVisibleCart == false" class="cart-list">
    <h3>CART</h3>
  </div> 
  `,
  data(){
    return {isVisibleCart: true};
  }
})

Vue.component('responce', {
  template: `
  <h3 v-if="responceNot == true">Ошибка при соединении с сервером</h3>
  `,
  data() {
    return {responceNot: false};
  }
})


const app = new Vue({
  el: "#app",
  data: {
    goods: [],
    filteredGoods: [],
    searchLine: '',
    isVisibleCart: true,
    responceNot: false,
  },

  methods: {
    async getProducts() {
      const responce = await fetch(`${API_URL}/catalogData.json`);
      if (responce.ok) {
        const catalogItems = await responce.json();
        this.goods = catalogItems;
        this.filteredGoods = catalogItems;
      } else {
        this.responceNot = true;
      }
    },

    FilterGoods(){
        this.filteredGoods.forEach((good) =>{
            if (this.searchLine !== good.product_name) {
                this.filteredGoods.splice(good, 1);
            }
        });
    }, 
},

  async mounted() {
    await this.getProducts()
  },

});

