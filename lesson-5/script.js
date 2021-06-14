const API_URL =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";


console.log(window)

const app = new Vue({
  el: "#app",
  data: {
    goods: [],
    filteredGoods: [],
    searchLine: '',
    isVisibleCart: true,
  },

  methods: {
    async getProducts() {
      const responce = await fetch(`${API_URL}/catalogData.json`);
      if (responce.ok) {
        const catalogItems = await responce.json();
        this.goods = catalogItems;
        this.filteredGoods = catalogItems;
      } else {
        alert("Ошибка при соединении с сервером");
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

