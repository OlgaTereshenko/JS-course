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

export default Vue.component