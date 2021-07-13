Vue.component("cart-list", {
    props: ["busketGoods"],
    template: `
      <div class="goods-list">
        <cart-item v-for="goodEntity in busketGoods" :goodProp="goodEntity"></cart-item>
      </div>
    `,
  });

export default Vue.component