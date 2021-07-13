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

  export default Vue.component